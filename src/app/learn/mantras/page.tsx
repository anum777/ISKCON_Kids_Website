import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mic2, PlayCircle, Volume2 } from 'lucide-react';

const mantras = [
  {
    title: 'Hare Krishna Maha Mantra',
    sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे ॥',
    translation: 'O Lord, O energy of the Lord, please engage me in Your service.',
    description: 'The most important mantra in Kali-yuga. Chanting this mantra purifies the mind, awakens our spiritual consciousness, and brings us closer to Krishna.',
  },
  {
    title: 'Om Namo Bhagavate Vasudevaya',
    sanskrit: 'ॐ नमो भगवते वासुदेवाय',
    translation: 'I bow to the Supreme Lord, Vasudeva (Krishna).',
    description: 'A powerful mantra for liberation (mukti). It is a form of salutation to Krishna, acknowledging him as the supreme reality.',
  },
];

export default function MantrasPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <Mic2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Mantra Meditation
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Learn simple yet powerful mantras for peace, focus, and spiritual connection.
        </p>
      </div>

      <div className="space-y-8">
        {mantras.map((mantra) => (
          <Card key={mantra.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{mantra.title}</CardTitle>
                <PlayCircle className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-semibold text-center font-serif text-primary/80">{mantra.sanskrit}</p>
              <p className="text-center italic text-muted-foreground">"{mantra.translation}"</p>
              <p className="text-lg">{mantra.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
