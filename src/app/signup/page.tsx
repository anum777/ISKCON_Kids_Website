'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import { useAuth, initiateEmailSignUp, setDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendEmailVerification } from 'firebase/auth';

export default function SignupPage() {
  const signupArt = PlaceHolderImages.find((img) => img.id === 'signup-art');
  const auth = useAuth();
  const firestore = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  useEffect(() => {
    if (user && !isVerificationSent) {
      // Create user profile in Firestore
      const userRef = doc(firestore, 'users', user.uid);
      const userData = {
        id: user.uid,
        childName,
        age: Number(age),
        parentName,
        email: user.email,
        emailVerified: user.emailVerified,
        createdAt: new Date().toISOString(),
        profileImage: user.photoURL || '',
      };
      setDocumentNonBlocking(userRef, userData, { merge: true });

      // Send verification email
      sendEmailVerification(user).then(() => {
        setIsVerificationSent(true);
        toast({
          title: 'Verification Email Sent',
          description: 'Please check your inbox to verify your email address.',
        });
      });

      router.push('/');
    }
  }, [user, router, firestore, childName, age, parentName, isVerificationSent, toast]);

  const handleSignUp = () => {
    initiateEmailSignUp(auth, email, password);
    toast({
        title: 'Account created!',
        description: 'Welcome! You are now being logged in.',
    });
  };

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
                  <Input id="child-name" placeholder="Arjuna" required value={childName} onChange={(e) => setChildName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="8" required value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="parent-name">Parent&apos;s Name</Label>
                <Input id="parent-name" placeholder="Yashoda" required value={parentName} onChange={(e) => setParentName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full mt-4" onClick={handleSignUp}>
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
