
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');
  return (
    <div className="bg-background">
       <section className="relative w-full h-80 bg-primary/10">
         {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto text-center">
            <Mail className="mx-auto h-12 w-12 text-white" />
            <h1 className="mt-4 font-headline text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              We'd love to hear from you. Reach out with any questions or feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                     <h2 className="font-headline text-3xl font-bold mb-6">Get in Touch</h2>
                     <p className="text-muted-foreground mb-8">
                         Have a question about our events, content, or just want to say hello? Fill out the form and we will get back to you as soon as possible.
                     </p>
                     <Card>
                         <CardContent className="p-6">
                             <form className="grid gap-6">
                                 <div className="grid gap-2">
                                     <Label htmlFor="name">Name</Label>
                                     <Input id="name" placeholder="Your Name" />
                                 </div>
                                 <div className="grid gap-2">
                                     <Label htmlFor="email">Email</Label>
                                     <Input id="email" type="email" placeholder="you@example.com" />
                                 </div>
                                  <div className="grid gap-2">
                                     <Label htmlFor="subject">Subject</Label>
                                     <Input id="subject" placeholder="Question about..." />
                                 </div>
                                 <div className="grid gap-2">
                                     <Label htmlFor="message">Message</Label>
                                     <Textarea id="message" placeholder="Your message..." />
                                 </div>
                                 <Button type="submit">Send Message</Button>
                             </form>
                         </CardContent>
                     </Card>
                </div>
                 <div>
                    <h2 className="font-headline text-3xl font-bold mb-6">Our Information</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="rounded-lg bg-primary/10 p-3">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Our Address</CardTitle>
                                    <p className="text-muted-foreground">123 Divine Lane, Vrindavan, IN</p>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="rounded-lg bg-primary/10 p-3">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Email Us</CardTitle>
                                    <p className="text-muted-foreground">contact@krishnakids.com</p>
                                </div>
                            </CardHeader>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="rounded-lg bg-primary/10 p-3">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Call Us</CardTitle>
                                    <p className="text-muted-foreground">(123) 456-7890</p>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
}
