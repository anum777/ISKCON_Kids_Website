
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: '1',
    title: 'Janmashtami Grand Celebration',
    date: 'August 26, 2024',
    location: 'ISKCON Temple, Main Hall',
    description: 'Join us for the grand celebration of Lord Krishna\'s birth. The event includes kirtan, abhishek, and a midnight arati.',
    image: PlaceHolderImages.find((img) => img.id === 'carousel3'),
  },
  {
    id: '2',
    title: 'Kids Storytelling Workshop',
    date: 'September 14, 2024',
    location: 'Community Hall',
    description: 'A special workshop for kids to learn and enact stories of Krishna. Fun activities and prizes to be won!',
    image: PlaceHolderImages.find((img) => img.id === 'event-detail-2'),
  },
];

export default function EventsPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <Calendar className="mx-auto h-12 w-12 text-secondary" />
          <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Participate in our vibrant festivals, workshops, and community gatherings.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden md:grid md:grid-cols-2 md:gap-8 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-64 md:h-full">
                  {event.image && (
                    <Image
                      src={event.image.imageUrl}
                      alt={event.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={event.image.imageHint}
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-headline text-2xl font-bold">{event.title}</h3>
                  <div className="mt-4 flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4">{event.description}</p>
                   <div className="mt-6">
                      <Button asChild>
                          <Link href={`/events/${event.id}`}>View Details</Link>
                      </Button>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
