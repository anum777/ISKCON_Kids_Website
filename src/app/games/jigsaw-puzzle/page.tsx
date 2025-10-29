
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

const PUZZLE_IMAGE_ID = 'jigsaw-puzzle-1';
const GRID_SIZE = 3; // 3x3 grid

type Piece = {
  id: number;
  row: number;
  col: number;
  style: React.CSSProperties;
};

export default function JigsawPuzzlePage() {
  const puzzleImage = PlaceHolderImages.find(img => img.id === PUZZLE_IMAGE_ID);
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (puzzleImage) {
      // Use the size from the placeholder image URL
      const urlParts = puzzleImage.imageUrl.split('/');
      const width = parseInt(urlParts[urlParts.length - 2], 10);
      const height = parseInt(urlParts[urlParts.length - 1], 10);
      setImageSize({ width, height });

      const pieceWidth = width / GRID_SIZE;
      const pieceHeight = height / GRID_SIZE;
      const initialPieces: Piece[] = [];
      for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;
        initialPieces.push({
          id: i,
          row,
          col,
          style: {
            backgroundImage: `url(${puzzleImage.imageUrl})`,
            backgroundPosition: `-${col * pieceWidth}px -${row * pieceHeight}px`,
            width: `${pieceWidth}px`,
            height: `${pieceHeight}px`,
          },
        });
      }
      setPieces(shuffle(initialPieces));
    }
  }, [puzzleImage]);

  const shuffle = (array: Piece[]) => {
    if (isSolved) return array;
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const solvePuzzle = () => {
    setPieces(prevPieces => [...prevPieces].sort((a, b) => a.id - b.id));
    setIsSolved(true);
  };
  
  const restartPuzzle = () => {
      setIsSolved(false);
      setPieces(shuffle([...pieces]));
  }

  if (!puzzleImage) return <div>Loading puzzle...</div>;

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="font-headline text-4xl font-bold md:text-5xl">Jigsaw Puzzle</h1>
      <p className="mt-4 text-lg text-muted-foreground">Piece together the divine scene.</p>
      
      <Card className="max-w-max mx-auto mt-8">
        <CardContent className="p-2">
            <div
            className="grid gap-1"
            style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
            }}
            >
            {pieces.map((piece) => (
                <div key={piece.id} style={piece.style} className="border border-background" />
            ))}
            </div>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        {isSolved ? (
            <>
                <h2 className="font-headline text-3xl font-bold text-green-500">Puzzle Solved!</h2>
                <Button onClick={restartPuzzle} className="mt-4">
                    Play Again
                </Button>
            </>
        ) : (
            <Button onClick={solvePuzzle}>
                <Puzzle className="mr-2 h-4 w-4" />
                Solve Puzzle
            </Button>
        )}
      </div>

    </div>
  );
}
