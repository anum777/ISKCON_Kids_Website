
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

const quizQuestions = [
  {
    question: 'What is the name of Krishna\'s mother who raised him in Vrindavan?',
    options: ['Devaki', 'Rohini', 'Yashoda', 'Kunti'],
    answer: 'Yashoda',
  },
  {
    question: 'Krishna lifted which hill to protect the people of Vrindavan from Indra\'s wrath?',
    options: ['Mount Kailash', 'Govardhan Hill', 'Himalayas', 'Vindhya Hill'],
    answer: 'Govardhan Hill',
  },
  {
    question: 'Who was Krishna\'s dear childhood friend who came to visit him in Dwarka?',
    options: ['Arjuna', 'Sudama', 'Balarama', 'Uddhava'],
    answer: 'Sudama',
  },
  {
    question: 'What is the name of the divine flute Krishna plays?',
    options: ['Bansuri', 'Veena', 'Sitar', 'Sarod'],
    answer: 'Bansuri',
  },
  {
    question: 'In the Mahabharata war, Krishna was the charioteer for which warrior?',
    options: ['Bhima', 'Yudhishthira', 'Arjuna', 'Nakula'],
    answer: 'Arjuna',
  },
];

export default function KrishnaQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizFinished(false);
  };
  
  if (isQuizFinished) {
      return (
          <div className="container mx-auto py-12 text-center">
               <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
                    <CardDescription>You did a great job.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold my-4">
                        Your Score: {score} / {quizQuestions.length}
                    </p>
                    <Button onClick={restartQuiz} className="mt-8">
                        Play Again
                    </Button>
                </CardContent>
            </Card>
          </div>
      )
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-headline text-4xl font-bold text-center md:text-5xl mb-2">Krishna Quiz</h1>
        <p className="text-center text-lg text-muted-foreground mb-8">Test your knowledge!</p>
        
        <Card>
          <CardHeader>
            <Progress value={progress} className="mb-4" />
            <CardTitle className="text-2xl">Question {currentQuestionIndex + 1}</CardTitle>
            <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.answer;
                const isSelected = option === selectedOption;
                
                return (
                  <Button
                    key={option}
                    variant="outline"
                    size="lg"
                    className={cn(
                      'justify-start h-auto py-3 text-left',
                      isAnswered && isCorrect && 'bg-green-100 border-green-500 text-green-800 hover:bg-green-100',
                      isAnswered && isSelected && !isCorrect && 'bg-red-100 border-red-500 text-red-800 hover:bg-red-100',
                    )}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                  >
                     {isAnswered && isSelected && isCorrect && <Check className="mr-2 h-5 w-5" />}
                     {isAnswered && isSelected && !isCorrect && <X className="mr-2 h-5 w-5" />}
                     {isAnswered && !isSelected && isCorrect && <Check className="mr-2 h-5 w-5" />}
                    {option}
                  </Button>
                )
              })}
            </div>
            {isAnswered && (
                 <div className="mt-6 text-center">
                    <Button onClick={handleNextQuestion}>
                        {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
