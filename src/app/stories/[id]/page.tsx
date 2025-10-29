
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { use } from 'react';

const stories = {
  '1': {
    title: 'Krishna and the Butter Pot',
    category: 'Leela',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-1'),
    content: [
      "In the heart of the beautiful village of Vrindavan, filled with green pastures and happy cows, lived a special child named Krishna. His eyes twinkled with mischief, and his smile could melt anyone's heart. Krishna's greatest love, besides his mother Yashoda, was for sweet, freshly churned butter. The aroma of butter was like a magical song to him, and he would follow it anywhere.",
      "The women of Vrindavan, the gopis, adored Krishna, but they also had to be very clever to protect their butter from his playful raids. He and his friends, a merry band of boys, were famous for their 'butter-stealing' adventures. They would tiptoe into homes, their giggles echoing softly, on a quest for the delicious treat.",
      "One sunny afternoon, Mother Yashoda decided she would outsmart her little prankster. She churned a large pot of fragrant, creamy butter and, with a knowing smile, tied it high up to a wooden beam on the ceiling. 'There,' she thought, 'this will surely be out of his reach.'",
      "But Krishna was not just any child. When he saw the pot hanging so high, a clever idea sparked in his mind. He whispered to his friends, and in a moment, they had a plan. They formed a human pyramid, one friend climbing on another's shoulders, with strong little Krishna at the very top. Reaching the pot, he didn't just take the butter for himself. He shared it joyfully with every single one of his friends, their faces beaming with delight.",
      "When Yashoda returned, she saw the empty pot swinging gently and the children with buttery smiles. Instead of scolding them, her heart filled with overwhelming love and amusement for her son's cleverness and generous heart. This playful story, or 'leela', teaches us that even Krishna's most mischievous acts were full of love and the simple joy of sharing with others."
    ],
  },
  '2': {
    title: 'Krishna Lifts Govardhan Hill',
    category: 'Valor',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-2'),
    content: [
      "For many years, the people of Vrindavan performed a grand ceremony to honor Lord Indra, the king of the heavens and the god of rain. They believed that this worship would please Indra and ensure he sent the right amount of rain for their crops and cattle. But one year, a young Krishna, with wisdom beyond his years, questioned this tradition.",
      "'Why do we worship Indra?' he asked the elders. 'It is the Govardhan Hill that provides for us. Its lush grasses feed our cows, its streams give us fresh water, and its forests give us herbs. We should worship the hill that directly cares for us.' The villagers were convinced by his simple logic and prepared a great offering for Govardhan Hill instead.",
      "When Lord Indra saw this, he became furious. His pride was wounded. In a fit of rage, he commanded the clouds to unleash a terrifying storm upon Vrindavan. Dark clouds gathered, lightning flashed, and rain poured down in sheets, threatening to flood the entire village and drown everyone.",
      "The villagers, terrified, ran to Krishna for help. With a calm and reassuring smile, Krishna walked to the Govardhan Hill and, to everyone's astonishment, lifted the entire massive hill with just the little finger of his left hand. He held it up like a giant umbrella, and all the people and animals of Vrindavan took shelter beneath it, completely safe from Indra's wrath.",
      "For seven days and seven nights, Krishna held the hill effortlessly while the storm raged outside. Finally, Indra realized he was powerless against this divine child. His pride shattered, he stopped the rain and came down to Vrindavan to beg for Krishna's forgiveness. This incredible feat showed everyone Krishna's true nature as the supreme protector of his devotees, teaching that faith in the divine provides the ultimate shelter from all of life's storms."
    ],
  },
  '3': {
    title: "Sudama's Gift to Krishna",
    category: 'Friendship',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-3'),
    content: [
      "Sudama was a humble and poor Brahmin who had been a dear childhood friend of Krishna. They had studied together and shared many happy moments. As they grew up, their paths diverged. Krishna became the magnificent King of Dwarka, while Sudama lived a simple life of poverty with his family. There were days they didn't even have enough food.",
      "One day, Sudama's wife, seeing her children's hunger, gently urged him, 'Why don't you visit your friend Krishna? As a king, he is known for his kindness and generosity. He will surely help us.' Sudama was hesitant. He didn't want to ask for anything, but he also didn't want to refuse his wife. 'You should never visit someone empty-handed,' she reminded him. With no valuables to offer, she tied a small handful of flattened rice (poha) in a worn piece of cloth. It was all they had.",
      "With the small bundle in hand, Sudama journeyed to the grand city of Dwarka. He was awestruck by the golden palaces and bustling streets. He felt small and out of place. When he finally reached the king's palace, the guards were hesitant to let the poorly dressed man in. But when Sudama mentioned Krishna's name, the message was rushed to the king.",
      "The moment Krishna heard Sudama's name, he leaped from his royal throne and ran barefoot to the palace gates. He embraced his old friend with tears of joy, ignoring his torn clothes and dusty feet. He brought Sudama inside, seated him on his own throne, and washed his feet with love and reverence.",
      "Krishna noticed the small bundle Sudama was trying to hide. 'What have you brought for me, my friend?' he asked with a smile. Ashamed, Sudama hesitated, but Krishna playfully snatched the bundle and opened it. 'Poha!' he exclaimed with delight. He ate a handful with such relish, as if it were the most delicious food in the world. Sudama was so overwhelmed by Krishna's love and humility that he completely forgot the reason for his visit. He couldn't bring himself to ask for anything.",
      "After spending a few blissful days, Sudama started his journey home, his heart full but his hands empty. He worried about what he would tell his wife. But as he approached his village, he couldn't find his small hut. In its place stood a magnificent palace, and his family, dressed in beautiful clothes, came running out to greet him, their faces shining with happiness. Without a word being spoken, Krishna had understood his friend's needs and had blessed him with immeasurable prosperity. This beautiful story teaches us that in true friendship and devotion, what is given from the heart is more valuable than any worldly wealth."
    ],
  }
};

type StoryParams = {
  params: {
    id: keyof typeof stories;
  };
};

export default function StoryDetailPage({ params }: StoryParams) {
  const story = stories[use(params).id];

  if (!story) {
    return (
      <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
        <h1 className="font-headline text-3xl font-bold">Story not found</h1>
      </div>
    );
  }

  return (
    <article>
      <div className="relative h-96 w-full">
        {story.image && (
          <Image
            src={story.image.imageUrl}
            alt={story.image.description}
            fill
            className="object-cover"
            data-ai-hint={story.image.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto -mt-48 px-4 md:px-6">
        <div className="relative z-10 mx-auto max-w-3xl rounded-lg bg-card p-6 shadow-xl">
           <Button asChild variant="ghost" className="mb-4">
             <Link href="/stories"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Stories</Link>
           </Button>
          <Badge>{story.category}</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">{story.title}</h1>
        </div>
        <div className="prose prose-lg mx-auto max-w-3xl py-12 dark:prose-invert">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
