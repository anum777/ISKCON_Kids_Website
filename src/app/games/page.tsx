
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Lightbulb, Palette, Sparkles, Heart, Puzzle } from 'lucide-react';
import Link from 'next/link';

const games = [
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: 'Krishna Quiz',
        description: 'Test your knowledge about Krishna\'s life and teachings.',
        href: '#',
    },
     {
        icon: <Palette className="h-10 w-10 text-primary" />,
        title: 'Color Krishna',
        description: 'Unleash your creativity and color beautiful scenes.',
        href: '#',
    },
     {
        icon: <Sparkles className="h-10 w-10 text-primary" />,
        title: 'Guess the God',
        description: 'Identify different gods and goddesses from clues.',
        href: '#',
    },
     {
        icon: <Heart className="h-10 w-10 text-primary" />,
        title: 'Memory Match',
        description: 'Match pairs of divine symbols and characters.',
        href: '/games/memory-match',
    },
     {
        icon: <Puzzle className="h-10 w-10 text-primary" />,
        title: 'Jigsaw Puzzles',
        description: 'Solve beautiful puzzles of Krishna\'s pastimes.',
        href: '#',
    },
];


export default function GamesPage() {
  return (
    <div className="bg-background">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <Gamepad2 className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
            Fun & Games
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Play, learn, and have fun with our collection of interactive games.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <Link key={game.title} href={game.href}>
                <Card
                  className="group flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                >
                    <div className="mb-6 rounded-full bg-primary/20 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {game.icon}
                    </div>
                    <h3 className="font-headline text-2xl font-bold">
                      {game.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {game.description}
                    </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
