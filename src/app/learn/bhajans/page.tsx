'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Music, PlayCircle, Loader2, StopCircle } from 'lucide-react';
import { useState } from 'react';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { useToast } from '@/hooks/use-toast';

const bhajans = [
  {
    title: 'Achyutam Keshavam',
    lyrics: [
      'Achyutam Keshavam Krishna Damodaram,',
      'Rama Narayanam Janaki Vallabham.',
      'Kaun Kehte Hain Bhagvan Aate Nahi,',
      'Tum Meera Ke Jaise Bulate Nahi.',
    ],
  },
  {
    title: 'Govinda Namalu',
    lyrics: [
      'Govinda Namalu, Krishna Namalu,',
      'Madhava Namalu, Keshava Namalu.',
      'Srinivasa Govinda, Sri Venkatesa Govinda,',
      'Govinda Hari Govinda, Gokula Nandana Govinda.',
    ],
  },
   {
    title: 'Hare Krishna Maha Mantra',
    lyrics: [
      'Hare Krishna, Hare Krishna,',
      'Krishna Krishna, Hare Hare,',
      'Hare Rama, Hare Rama,',
      'Rama Rama, Hare Hare.',
    ],
  },
];

type AudioState = {
  [key: string]: {
    isLoading: boolean;
    audioUrl: string | null;
    isPlaying: boolean;
  };
};

export default function BhajansPage() {
  const [audioState, setAudioState] = useState<AudioState>({});
  const { toast } = useToast();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const handlePlayAudio = async (title: string, text: string) => {
    // Stop any currently playing audio
    if (audioElement) {
        audioElement.pause();
        // Reset the isPlaying state for all other bhajans
        const newAudioState: AudioState = {};
        Object.keys(audioState).forEach(key => {
            newAudioState[key] = { ...audioState[key], isPlaying: false };
        });
        setAudioState(newAudioState);
    }
    
    // If we have the audio cached and it's for the current bhajan, just play it
    if (audioState[title]?.audioUrl) {
      const audio = new Audio(audioState[title].audioUrl!);
      setAudioElement(audio);
      audio.play();
      setAudioState(prev => ({ ...prev, [title]: { ...prev[title], isPlaying: true } }));
      audio.onended = () => {
          setAudioState(prev => ({ ...prev, [title]: { ...prev[title], isPlaying: false } }));
      };
      return;
    }

    setAudioState(prev => ({ ...prev, [title]: { isLoading: true, audioUrl: null, isPlaying: false } }));
    try {
      const response = await textToSpeech(text);
      const audio = new Audio(response.media);
      setAudioElement(audio);
      audio.play();
      setAudioState(prev => ({
        ...prev,
        [title]: { isLoading: false, audioUrl: response.media, isPlaying: true },
      }));
       audio.onended = () => {
          setAudioState(prev => ({ ...prev, [title]: { ...prev[title], isPlaying: false } }));
      };
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate audio. Please try again.',
      });
      setAudioState(prev => ({ ...prev, [title]: { ...prev[title], isLoading: false } }));
    }
  };

  const handleStopAudio = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      const newAudioState: AudioState = {};
        Object.keys(audioState).forEach(key => {
            newAudioState[key] = { ...audioState[key], isPlaying: false };
        });
        setAudioState(newAudioState);
      setAudioElement(null);
    }
  };
  
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <Music className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Bhajans and Kirtans
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sing along to these beautiful devotional songs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bhajans.map((bhajan) => (
          <Card key={bhajan.title}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{bhajan.title}</CardTitle>
              {audioState[bhajan.title]?.isLoading ? (
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              ) : audioState[bhajan.title]?.isPlaying ? (
                <StopCircle className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80" onClick={handleStopAudio} />
              ) : (
                <PlayCircle className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80" onClick={() => handlePlayAudio(bhajan.title, bhajan.lyrics.join(', '))} />
              )}
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert">
                {bhajan.lyrics.map((line, index) => (
                  <p key={index} className="italic">{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
