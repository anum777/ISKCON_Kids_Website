
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check, X, Sparkles } from 'lucide-react';

const gods = [
  { 
    name: 'Krishna', 
    image: PlaceHolderImages.find(img => img.id === 'guess-god-krishna'),
    clue: 'Plays a divine flute and is known for his mischievous and loving nature.'
  },
  { 
    name: 'Ganesha', 
    image: PlaceHolderImages.find(img => img.id === 'guess-god-ganesha'),
    clue: 'Has an elephant head and is the remover of obstacles.'
  },
  { 
    name: 'Shiva', 
    image: PlaceHolderImages.find(img => img.id === 'guess-god-shiva'),
    clue: 'A great ascetic who resides on Mount Kailash, known as the destroyer.'
  },
];

// Function to get a random set of options including the correct answer
const getOptions = (correctAnswer: string) => {
    const allNames = gods.map(g => g.name);
    const wrongAnswers = allNames.filter(name => name !== correctAnswer);
    const shuffledWrong = wrongAnswers.sort(() => 0.5 - Math.random());
    const options = [correctAnswer, ...shuffledWrong.slice(0, 2)];
    return options.sort(() => 0.5 - Math.random());
};


export default function GuessTheGodPage() {
  const [currentGame, setCurrentGame] = useState<{question: typeof gods[0], options: string[]}>({ question: gods[0], options: [] });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    startNewRound();
  }, [round]);

  const startNewRound = () => {
    if (round >= gods.length) {
        setIsGameFinished(true);
        return;
    }
    const currentGod = gods[round];
    setCurrentGame({
        question: currentGod,
        options: getOptions(currentGod.name)
    });
    setSelectedOption(null);
    setIsAnswered(false);
  }

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentGame.question.name) {
      setScore(score + 1);
    }
  };
  
  const handleNext = () => {
      setRound(round + 1);
  }
  
  const restartGame = () => {
      setScore(0);
      setRound(0);
      setIsGameFinished(false);
  }

  if (isGameFinished) {
      return (
          <div className="container mx-auto py-12 text-center">
               <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Game Over!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold my-4">
                        Your Score: {score} / {gods.length}
                    </p>
                    <Button onClick={restartGame} className="mt-8">
                        Play Again
                    </Button>
                </CardContent>
            </Card>
          </div>
      )
  }

  return (
    <div className="container mx-auto py-12">
        <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="mx-auto h-12 w-12 text-primary" />
            <h1 className="font-headline text-4xl font-bold md:text-5xl mt-4">Guess the God</h1>
            <p className="mt-4 text-lg text-muted-foreground">Can you identify the divine personality from the image and clue?</p>
        </div>
        
        <Card className="max-w-md mx-auto mt-8">
            <CardHeader>
                {currentGame.question.image && (
                     <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                        <Image 
                            src={currentGame.question.image.imageUrl} 
                            alt="Guess the god" 
                            fill
                            className={cn("object-cover transition-all duration-500", {"blur-md grayscale": !isAnswered, "blur-none grayscale-0": isAnswered})}
                            data-ai-hint={currentGame.question.image.imageHint}
                        />
                     </div>
                )}
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center text-base mb-6 h-12">
                   {currentGame.question.clue}
                </CardDescription>

                <div className="grid grid-cols-1 gap-4">
                    {currentGame.options.map(option => {
                        const isCorrect = option === currentGame.question.name;
                        const isSelected = option === selectedOption;

                        return (
                            <Button
                                key={option}
                                variant="outline"
                                size="lg"
                                className={cn(
                                    'justify-center h-auto py-3 text-lg',
                                    isAnswered && isCorrect && 'bg-green-100 border-green-500 text-green-800 hover:bg-green-100',
                                    isAnswered && isSelected && !isCorrect && 'bg-red-100 border-red-500 text-red-800 hover:bg-red-100',
                                )}
                                onClick={() => handleOptionSelect(option)}
                                disabled={isAnswered}
                            >
                                {isAnswered && isSelected && <span className="mr-2">{isCorrect ? <Check /> : <X />}</span>}
                                {option}
                            </Button>
                        )
                    })}
                </div>
                 {isAnswered && (
                 <div className="mt-6 text-center">
                    <Button onClick={handleNext}>
                        {round < gods.length - 1 ? 'Next' : 'Finish'}
                    </Button>
                </div>
            )}
            </CardContent>
        </Card>

    </div>
  );
}
