import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, Heart, Shield, BookOpen } from 'lucide-react';

const lessons = [
  {
    title: 'The Importance of Dharma (Duty)',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    description: "Krishna teaches Arjuna in the Bhagavad Gita that performing one's prescribed duties without attachment to the results is the path to spiritual advancement. It's about doing the right thing, even when it's hard.",
    story: 'From the Bhagavad Gita',
  },
  {
    title: 'True Friendship',
    icon: <Heart className="h-8 w-8 text-primary" />,
    description: 'The story of Krishna and Sudama shows that true friendship is based on love and affection, not wealth or status. A small gift given with a pure heart is more valuable than all the riches in the world.',
    story: 'The Story of Sudama',
  },
  {
    title: 'Protection of the Devotees',
    icon: <Shield className="h-8 w-8 text-primary" />,
    description: 'When Krishna lifted Govardhan Hill, he showed his immense power to protect his devotees from any harm. It teaches us that complete faith in the divine provides the ultimate shelter.',
    story: 'Krishna Lifts Govardhan Hill',
  },
   {
    title: 'The Soul is Eternal',
    icon: <Brain className="h-8 w-8 text-primary" />,
    description: 'Krishna explains that the soul is immortal; it can never be created or destroyed. The body is just a temporary vessel. This knowledge helps us overcome the fear of death and material loss.',
    story: 'From the Bhagavad Gita',
  },
];

export default function MoralLessonsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <Brain className="mx-auto h-12 w-12 text-secondary" />
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Moral Lessons
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover timeless values and morals from Krishna's life and teachings.
        </p>
      </div>

      <div className="space-y-8">
        {lessons.map((lesson) => (
          <Card key={lesson.title}>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-4">
                {lesson.icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{lesson.story}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">{lesson.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
