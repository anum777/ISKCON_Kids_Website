'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PeacockFeatherIcon } from '@/components/icons';

export default function SignupPage() {
  const signupArt = PlaceHolderImages.find((img) => img.id === 'signup-art');

  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <PeacockFeatherIcon className="h-12 w-12 text-secondary" />
             </div>
            <CardTitle className="text-3xl">Join the Fun!</CardTitle>
            <CardDescription>
              Create an account to start your journey with Krishna.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="child-name">Child&apos;s Name</Label>
                  <Input id="child-name" placeholder="Arjuna" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="8" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="parent-name">Parent&apos;s Name</Label>
                <Input id="parent-name" placeholder="Yashoda" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full mt-4">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {signupArt && (
          <Image
            src={signupArt.imageUrl}
            alt={signupArt.description}
            fill
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            data-ai-hint={signupArt.imageHint}
          />
        )}
      </div>
    </div>
  );
}
