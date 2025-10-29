import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Music, PlayCircle } from 'lucide-react';

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

export default function BhajansPage() {
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
              <PlayCircle className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80" />
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
