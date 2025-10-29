
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const stories = {
  '1': {
    title: 'Krishna and the Butter Pot',
    category: 'Leela',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-1'),
    content: [
      "In the joyful village of Vrindavan, lived the most mischievous and beloved child, Krishna. His love for freshly churned butter was known to all. He would often gather his friends and lead them on 'butter-stealing' adventures.",
      "One day, Yashoda, his mother, decided to hide the butter pot high up, tied to the ceiling, thinking it would be safe from Krishna's reach. But little Krishna was clever. He gathered his friends, and they formed a human pyramid. Climbing on their shoulders, Krishna reached the pot and shared the delicious butter with everyone. Yashoda, instead of being angry, was filled with love and amusement at her son's cleverness and generosity.",
      "This story teaches us about Krishna's playful nature and how even his mischievous acts were filled with love and a desire to share joy with others."
    ],
  },
  '2': {
    title: 'Krishna Lifts Govardhan Hill',
    category: 'Valor',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-2'),
    content: [
      "The villagers of Vrindavan used to worship Lord Indra, the god of rain and thunder, hoping for good rains for their crops. One year, young Krishna convinced them to worship the Govardhan Hill instead, as it provided them with everything they needed.",
      "This angered Indra, who sent torrential rains to flood the village. The villagers were terrified. To protect them, Krishna lifted the entire Govardhan Hill with his little finger, and all the villagers and their cattle took shelter under it for seven days and seven nights, safe from the storm.",
      "Realizing Krishna's divine power, Indra's pride was humbled. He came to Vrindavan and apologized to Krishna. This story shows Krishna's immense power and his role as the ultimate protector of his devotees."
    ],
  },
  '3': {
    title: "Sudama's Gift to Krishna",
    category: 'Friendship',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-3'),
    content: [
      "Sudama, a poor Brahmin, was a childhood friend of Krishna. Though they had grown apart, Sudama's wife insisted he visit the wealthy King Krishna in Dwarka to ask for help. Hesitantly, Sudama agreed, taking a humble gift of flattened rice (poha) with him.",
      "When Sudama arrived at the magnificent palace, Krishna rushed to greet him with open arms, treating him with the utmost love and respect. Krishna happily ate the simple poha, cherishing the gift from his old friend. Sudama was so overwhelmed by Krishna's love that he couldn't bring himself to ask for anything.",
      "When Sudama returned home, he found his small hut replaced by a grand palace and his family dressed in fine clothes. Krishna had blessed him with immense wealth without Sudama even having to ask. This tale highlights the power of true friendship and selfless devotion."
    ],
  }
};

type StoryParams = {
  params: {
    id: keyof typeof stories;
  };
};

export default function StoryDetailPage({ params }: StoryParams) {
  const story = stories[params.id];

  if (!story) {
    return (
      <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
        <h1 className="font-headline text-3xl font-bold">Story not found</h1>
      </div>
    );
  }

  return (
    <article>
      <div className="relative h-96 w-full">
        {story.image && (
          <Image
            src={story.image.imageUrl}
            alt={story.image.description}
            fill
            className="object-cover"
            data-ai-hint={story.image.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto -mt-48 px-4 md:px-6">
        <div className="relative z-10 mx-auto max-w-3xl rounded-lg bg-card p-6 shadow-xl">
           <Button asChild variant="ghost" className="mb-4">
             <Link href="/stories"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Stories</Link>
           </Button>
          <Badge>{story.category}</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">{story.title}</h1>
        </div>
        <div className="prose prose-lg mx-auto max-w-3xl py-12 dark:prose-invert">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
