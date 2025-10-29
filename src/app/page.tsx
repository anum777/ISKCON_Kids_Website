import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  BookOpen,
  Calendar,
  Heart,
  Lightbulb,
  Palette,
  Puzzle,
  Quote,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { PeacockFeatherIcon } from '@/components/icons';

const featureTiles = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Divine Stories',
    description: 'Explore timeless tales of Krishna and his friends.',
    href: '/stories',
    image: PlaceHolderImages.find((img) => img.id === 'tile1'),
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: 'Upcoming Events',
    description: 'Join our fun-filled festivals and workshops.',
    href: '/events',
    image: PlaceHolderImages.find((img) => img.id === 'tile2'),
  },
  {
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    title: 'Fun & Games',
    description: 'Play exciting games and solve puzzles.',
    href: '/games',
    image: PlaceHolderImages.find((img) => img.id === 'tile3'),
  },
  {
    icon: <Volume2 className="h-8 w-8 text-primary" />,
    title: 'Learn with Fun',
    description: 'Sing bhajans and learn valuable life lessons.',
    href: '/learn',
    image: PlaceHolderImages.find((img) => img.id === 'tile4'),
  },
];

const carouselItems = [
  {
    id: 'carousel1',
    title: 'Krishna and the Butter Pot',
    category: 'Stories',
    href: '/stories/1',
  },
  {
    id: 'carousel2',
    title: 'Krishna Lifts Govardhan Hill',
    category: 'Stories',
    href: '/stories/2',
  },
  {
    id: 'carousel3',
    title: 'Janmashtami Celebrations',
    category: 'Events',
    href: '/events/1',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/20 to-background pt-16 md:pt-24 lg:pt-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 inline-block rounded-full bg-secondary/20 p-3">
              <PeacockFeatherIcon className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Welcome to Krishna Kids Zone
            </h1>
            <p className="mt-4 max-w-[600px] text-lg text-muted-foreground md:text-xl">
              A joyful place for children to play, learn, and grow with the
              tales and teachings of Lord Krishna.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/stories">Explore Stories</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/games">Play Games</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full md:h-auto md:pb-[100%]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-contain"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* Featured Content Carousel */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-2 text-center font-headline text-3xl font-bold md:text-4xl">
            Featured Content
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Discover our most popular stories and upcoming events.
          </p>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {carouselItems.map((item) => {
                const image = PlaceHolderImages.find((img) => img.id === item.id);
                return (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-0">
                        <Link href={item.href}>
                          <div className="relative aspect-video">
                            {image && (
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                              />
                            )}
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute bottom-4 left-4">
                              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                                {item.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="font-headline text-xl font-bold">
                              {item.title}
                            </h3>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-12 hidden sm:flex" />
            <CarouselNext className="mr-12 hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
            Explore Our World
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureTiles.map((tile) => (
              <Card
                key={tile.title}
                className="group overflow-hidden text-center transition-shadow duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <Link href={tile.href}>
                    <div className="relative h-40 w-full overflow-hidden">
                      {tile.image && (
                         <Image
                            src={tile.image.imageUrl}
                            alt={tile.image.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            data-ai-hint={tile.image.imageHint}
                          />
                      )}
                       <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4 flex justify-center">{tile.icon}</div>
                      <h3 className="font-headline text-xl font-bold">
                        {tile.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {tile.description}
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thought for the Day & Games */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="mb-6 font-headline text-3xl font-bold md:text-4xl">
              Thought for the Day
            </h2>
            <Card className="w-full bg-secondary/20">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-secondary" />
                <blockquote className="mt-4 text-xl italic text-foreground">
                  "The soul can never be cut to pieces by any weapon, nor burned
                  by fire, nor moistened by water, nor withered by the wind."
                </blockquote>
                <p className="mt-4 font-bold text-secondary">
                  - Bhagavad Gita 2.23
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
             <h2 className="mb-6 font-headline text-3xl font-bold md:text-4xl">
              Fun & Games
            </h2>
            <div className="grid w-full grid-cols-2 gap-4">
                <Card className="flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-primary/10">
                    <Lightbulb className="mb-2 h-8 w-8 text-primary" />
                    <h4 className="font-bold">Krishna Quiz</h4>
                </Card>
                 <Card className="flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-primary/10">
                    <Palette className="mb-2 h-8 w-8 text-primary" />
                    <h4 className="font-bold">Color Krishna</h4>
                </Card>
                 <Card className="flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-primary/10">
                    <Sparkles className="mb-2 h-8 w-8 text-primary" />
                    <h4 className="font-bold">Guess the God</h4>
                </Card>
                 <Card className="flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-primary/10">
                    <Heart className="mb-2 h-8 w-8 text-primary" />
                    <h4 className="font-bold">Memory Match</h4>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="bg-gradient-to-t from-primary/20 to-background py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Join Our Community!
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Create an account to save your progress, bookmark favorite stories,
            and register for exclusive events.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/signup">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
