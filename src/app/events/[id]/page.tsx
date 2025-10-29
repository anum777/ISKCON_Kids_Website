
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { use } from 'react';

const events = {
  '1': {
    title: 'Janmashtami Grand Celebration',
    date: 'August 26, 2024',
    time: '6:00 PM - 1:00 AM',
    location: 'ISKCON Temple, Main Hall',
    organizer: 'ISKCON Events Committee',
    image: PlaceHolderImages.find((img) => img.id === 'event-detail-1'),
    details: [
      "Experience the divine atmosphere as we celebrate the birth of Lord Krishna. Janmashtami is one of the most important festivals, and we invite you and your family to be a part of the grand festivities.",
      "The evening will be filled with melodious kirtans, a grand abhishek (bathing ceremony) of the deities, and enlightening discourses on the life and teachings of Krishna. A special highlight is the midnight arati, a spectacular ceremony to welcome the Lord.",
      "Delicious prasadam (sanctified food) will be served to all attendees. Don't miss this opportunity for spiritual immersion and community celebration."
    ],
    schedule: [
        { time: '6:00 PM', activity: 'Welcome & Kirtan' },
        { time: '7:30 PM', activity: 'Discourse on Krishna\'s Pastimes' },
        { time: '9:00 PM', activity: 'Grand Abhishek Ceremony' },
        { time: '11:00 PM', activity: 'Cultural Performances' },
        { time: '12:00 AM', activity: 'Midnight Arati & Kirtan' },
        { time: '12:30 AM', activity: 'Prasadam Distribution' },
    ]
  },
  '2': {
    title: 'Kids Storytelling Workshop',
    date: 'September 14, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Community Hall, Sector B',
    organizer: 'Krishna Kids Zone Team',
    image: PlaceHolderImages.find((img) => img.id === 'event-detail-2'),
    details: [
      "Let your child's imagination soar! Our storytelling workshop is designed to introduce children to the fascinating stories of Krishna in an interactive and engaging way. Kids will not only listen to stories but also participate in activities that bring these tales to life.",
      "The workshop will include role-playing, craft sessions related to the stories, and a fun quiz. It's a perfect way for children to learn about values like courage, friendship, and devotion in a playful environment.",
      "All materials will be provided. Limited spots available, so please register in advance to secure a place for your child. Snacks and juice will be served."
    ],
    schedule: [
        { time: '10:00 AM', activity: 'Registration & Welcome Game' },
        { time: '10:30 AM', activity: 'Story Session 1: Krishna the Butter Thief' },
        { time: '11:15 AM', activity: 'Craft Activity: Decorate a Butter Pot' },
        { time: '12:00 PM', activity: 'Story Session 2: Kaliya the Serpent' },
        { time: '12:45 PM', activity: 'Quiz & Prize Distribution' },
    ]
  }
};

type EventParams = {
  params: {
    id: keyof typeof events;
  };
};

export default function EventDetailPage({ params }: EventParams) {
  const event = events[use(params).id];

  if (!event) {
    return (
      <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
        <h1 className="font-headline text-3xl font-bold">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="relative h-96 w-full">
        {event.image && (
          <Image
            src={event.image.imageUrl}
            alt={event.image.description}
            fill
            className="object-cover"
            data-ai-hint={event.image.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
       <div className="container mx-auto -mt-48 px-4 md:px-6 pb-16">
         <div className="relative z-10">
           <Button asChild variant="outline" className="mb-4 bg-card/80 backdrop-blur">
             <Link href="/events"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Events</Link>
           </Button>
         </div>
        <div className="relative z-10 mx-auto max-w-5xl rounded-lg bg-card shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">{event.title}</h1>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <span>{event.organizer}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 prose prose-lg dark:prose-invert">
                        <h2 className="font-headline text-2xl font-bold">About the Event</h2>
                         {event.details.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-4">Schedule</h2>
                        <ul className="space-y-4">
                            {event.schedule.map(item => (
                                <li key={item.time} className="flex gap-4">
                                    <div className="font-semibold text-primary w-24">{item.time}</div>
                                    <div className="text-muted-foreground">{item.activity}</div>
                                </li>
                            ))}
                        </ul>
                         <Button size="lg" className="w-full mt-8">Register Now</Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
