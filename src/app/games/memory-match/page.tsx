
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FluteIcon, LotusIcon, PeacockFeatherIcon } from '@/components/icons';
import { Heart, Star, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  { icon: FluteIcon, name: 'Flute' },
  { icon: LotusIcon, name: 'Lotus' },
  { icon: PeacockFeatherIcon, name: 'PeacockFeather' },
  { icon: Heart, name: 'Heart' },
  { icon: Star, name: 'Star' },
  { icon: Sun, name: 'Sun' },
];

const createGameBoard = () => {
  const gameIcons = [...icons, ...icons];
  return gameIcons
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export default function MemoryMatchPage() {
  const [cards, setCards] = useState(createGameBoard().map((icon, index) => ({ id: index, icon: icon.icon, name: icon.name, isFlipped: false, isMatched: false })));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      const [firstCardIndex, secondCardIndex] = flippedCards;
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];

      if (firstCard.name === secondCard.name) {
        // Match found
        setCards(prevCards =>
          prevCards.map(card =>
            card.name === firstCard.name ? { ...card, isMatched: true } : card
          )
        );
        setMatchedPairs(prev => prev + 1);
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstCardIndex || index === secondCardIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (icons.length > 0 && matchedPairs === icons.length) {
      setIsGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !cards[index].isFlipped && !cards[index].isMatched) {
      setCards(prevCards =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards(prev => [...prev, index]);
    }
  };

  const restartGame = () => {
    setCards(createGameBoard().map((icon, index) => ({ id: index, icon: icon.icon, name: icon.name, isFlipped: false, isMatched: false })));
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setIsGameWon(false);
  };

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-headline text-4xl font-bold md:text-5xl">Memory Match</h1>
      <p className="mt-4 text-lg text-muted-foreground">Match the pairs of divine symbols!</p>
      
      <div className="my-8 flex justify-center gap-8">
        <div className="text-xl">Moves: <span className="font-bold">{moves}</span></div>
        <div className="text-xl">Matches: <span className="font-bold">{matchedPairs} / {icons.length}</span></div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Card
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={cn(
                "aspect-square flex items-center justify-center cursor-pointer transition-transform duration-500",
                {
                  "bg-card": !card.isFlipped,
                  "[transform:rotateY(180deg)]": card.isFlipped,
                }
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={cn("absolute w-full h-full backface-hidden", {"[transform:rotateY(180deg)]": card.isFlipped})}>
                {card.isFlipped || card.isMatched ? (
                  <CardContent className="p-0 h-full w-full flex items-center justify-center bg-primary/10 rounded-lg">
                    <IconComponent className={cn("h-1/2 w-1/2 text-primary", {"text-green-500": card.isMatched})} />
                  </CardContent>
                ) : (
                   <CardContent className="p-0 h-full w-full flex items-center justify-center bg-secondary/20 rounded-lg" />
                )}
              </div>
            </Card>
          );
        })}
      </div>
      
      {isGameWon && (
        <div className="mt-8">
          <h2 className="font-headline text-3xl font-bold text-green-500">You Won!</h2>
          <p className="text-lg text-muted-foreground">Congratulations on matching all the pairs in {moves} moves.</p>
        </div>
      )}

      <Button onClick={restartGame} className="mt-8">
        Restart Game
      </Button>

      <style jsx>{`
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
