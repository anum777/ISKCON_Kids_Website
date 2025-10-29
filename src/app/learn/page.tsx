
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Mic2, BookText, Brain } from 'lucide-react';
import Link from 'next/link';

const learningModules = [
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: 'Bhajans and Kirtans',
    description: 'Learn and sing devotional songs dedicated to Krishna.',
    href: '/learn/bhajans',
  },
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: 'Shlokas from Gita',
    description: 'Memorize and understand key verses from the Bhagavad Gita.',
    href: '/learn/shlokas',
  },
  {
    icon: <Mic2 className="h-8 w-8 text-primary" />,
    title: 'Mantra Meditation',
    description: 'Learn simple yet powerful mantras for peace and focus.',
    href: '/learn/mantras',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'Moral Lessons',
    description: 'Discover the values and morals from Krishna\'s life stories.',
    href: '/learn/lessons',
  },
];

export default function LearnPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <Brain className="mx-auto h-12 w-12 text-secondary" />
          <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
            Learn with Fun
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Engage with interactive modules to learn shlokas, bhajans, and life lessons from Krishna's teachings.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {learningModules.map((module) => (
              <Card key={module.title} className="group transition-shadow duration-300 hover:shadow-xl">
                 <Link href={module.href}>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                         {module.icon}
                        </div>
                        <div>
                            <CardTitle className="text-2xl">{module.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{module.description}</p>
                    </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
