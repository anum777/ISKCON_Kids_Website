
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen } from 'lucide-react';

const stories = [
  {
    id: '1',
    title: 'Krishna and the Butter Pot',
    description: 'A playful story about baby Krishna\'s love for butter.',
    image: PlaceHolderImages.find((img) => img.id === 'carousel1'),
    category: 'Leela',
  },
  {
    id: '2',
    title: 'Krishna Lifts Govardhan Hill',
    description: 'The story of how Krishna protected Vrindavan from Indra\'s wrath.',
    image: PlaceHolderImages.find((img) => img.id === 'carousel2'),
    category: 'Valor',
  },
  {
    id: '3',
    title: 'Sudama\'s Gift to Krishna',
    description: 'A heartwarming tale of friendship and devotion.',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-3'),
    category: 'Friendship',
  },
];

export default function StoriesPage() {
  return (
    <div className="bg-background">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <BookOpen className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
            Divine Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the timeless tales of Krishna, filled with wisdom, love, and adventure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <Link href={`/stories/${story.id}`}>
                    <div className="relative aspect-video">
                      {story.image && (
                        <Image
                          src={story.image.imageUrl}
                          alt={story.image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={story.image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40" />
                       <div className="absolute bottom-4 left-4">
                        <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-bold">
                        {story.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{story.description}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
