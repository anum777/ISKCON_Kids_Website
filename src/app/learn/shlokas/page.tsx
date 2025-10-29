import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookText, PlayCircle } from 'lucide-react';

const shlokas = [
  {
    chapterVerse: 'Bhagavad Gita 2.23',
    sanskrit: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥',
    transliteration: 'nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ\nna cainaṁ kledayantyāpo na śoṣayati mārutaḥ',
    translation: 'The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.',
  },
  {
    chapterVerse: 'Bhagavad Gita 4.7',
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'yadā yadā hi dharmasya glānirbhavati bhārata\nabhyutthānamadharmasya tadātmānaṁ sṛjāmyaham',
    translation: 'Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.',
  },
];

export default function ShlokasPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <BookText className="mx-auto h-12 w-12 text-secondary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Shlokas from the Gita
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Memorize and understand key verses from the Bhagavad Gita.
        </p>
      </div>

      <div className="space-y-8">
        {shlokas.map((shloka) => (
          <Card key={shloka.chapterVerse}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{shloka.chapterVerse}</CardTitle>
                 <PlayCircle className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl font-serif whitespace-pre-line text-center text-primary">{shloka.sanskrit}</p>
              <p className="text-center italic text-muted-foreground">{shloka.transliteration}</p>
              <p className="text-lg text-center">"{shloka.translation}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
