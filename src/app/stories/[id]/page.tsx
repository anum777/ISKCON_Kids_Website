
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
      "In the heart of the beautiful village of Vrindavan, filled with green pastures and happy cows, lived a special child named Krishna. His eyes twinkled with mischief, and his smile could melt anyone's heart. Krishna's greatest love, besides his mother Yashoda, was for sweet, freshly churned butter. The aroma of butter was like a magical song to him, and he would follow it anywhere. Even as a baby, he was known for his extraordinary feats and charming pranks.",
      "The women of Vrindavan, the gopis, adored Krishna, but they also had to be very clever to protect their butter from his playful raids. He and his friends, a merry band of boys, were famous for their 'butter-stealing' adventures. They would tiptoe into homes, their giggles echoing softly, on a quest for the delicious treat. Krishna, with his divine charm, would often persuade the gopis to give him butter, but sometimes, the challenge of a little friendly theft was too much to resist. He would devise elaborate plans with his friends, creating distractions and using their small statures to their advantage.",
      "One sunny afternoon, Mother Yashoda decided she would outsmart her little prankster. She churned a large pot of fragrant, creamy butter and, with a knowing smile, tied it high up to a wooden beam on the ceiling. 'There,' she thought, 'this will surely be out of his reach. He will have to learn that he cannot always have what he wants, whenever he wants.' She then went about her daily chores, confident in her cleverness.",
      "But Krishna was not just any child. He was the Supreme Personality of Godhead, playing the part of a human child. When he saw the pot hanging so high, a clever idea sparked in his mind. He whispered to his friends, and in a moment, they had a plan. They gathered together, forming a human pyramid, one friend climbing on another's shoulders, with strong little Krishna at the very top. It was a wobbly but determined tower of friendship. Reaching the pot, he didn't just take the butter for himself. He shared it joyfully with every single one of his friends, their faces beaming with delight. He even shared some with the monkeys who had gathered to watch the spectacle.",
      "When Yashoda returned, she saw the empty pot swinging gently and the children with buttery smiles. At first, she feigned anger, picking up a stick to chase Krishna. But seeing his innocent, butter-smeared face, her heart filled with overwhelming love and amusement for her son's cleverness and generous heart. This playful story, or 'leela', teaches us that even Krishna's most mischievous acts were full of love, camaraderie, and the simple joy of sharing with others. It shows that God's love is accessible to all, and that the sweetest rewards are those shared with friends."
    ],
  },
  '2': {
    title: 'Krishna Lifts Govardhan Hill',
    category: 'Valor',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-2'),
    content: [
      "For many years, the people of Vrindavan, the simple cow-herding community where Krishna grew up, performed a grand annual ceremony to honor Lord Indra, the king of the heavens and the god of rain and thunderstorms. They believed that this elaborate worship, called Indra-yajna, would please him and ensure he sent the right amount of rain for their crops to grow and their cattle to thrive. It was a tradition passed down through generations.",
      "But one year, a young Krishna, with wisdom beyond his years and a mischievous glint in his eye, questioned this tradition. 'My dear father and elders,' he addressed the villagers, 'Why do we worship Indra? He is a demigod, and we are simple farmers and cowherds. It is the Govardhan Hill that provides for us directly. Its lush grasses feed our cows, its streams give us fresh water, its forests provide us with herbs and wood, and its caves shelter us. Govardhan Hill is our true friend. We should worship the hill that directly cares for us.' The villagers were captivated by his simple yet profound logic and decided to prepare a great offering for Govardhan Hill instead. They prepared mountains of food, circumambulated the hill, and offered their prayers to it.",
      "When Lord Indra, seated in his celestial kingdom, saw this, he became furious. His pride was wounded that these mere mortals would dare to cease his worship and honor a hill instead. In a fit of rage, he commanded the Samvartaka clouds, which are usually reserved for the dissolution of the universe, to unleash a terrifying storm upon Vrindavan. Dark, ominous clouds gathered, lightning flashed across the sky, and rain poured down in sheets as thick as pillars. The water levels rose dangerously, threatening to flood the entire village and drown everyone.",
      "The villagers, terrified for their lives, ran to Krishna for help, their faces pale with fear. 'Krishna! Krishna! Save us from Indra's wrath!' they cried. With a calm and reassuring smile, Krishna walked to the Govardhan Hill. Then, to everyone's utter astonishment, he lifted the entire massive hill with just the little finger of his left hand. He held it up effortlessly, like a giant umbrella.",
      "'Come, everyone! Take shelter under the hill!' he called out. All the people and animals of Vrindavan—men, women, children, cows, and calves—scrambled underneath the mighty hill, completely safe from Indra's devastating storm. For seven days and seven nights, Krishna stood there, holding the hill without any sign of fatigue, while the storm raged outside. The villagers, safe under his protection, looked at him with awe and realized he was no ordinary boy.",
      "Finally, Indra, realizing he was powerless against this divine child, saw his pride shattered. He stopped the rain and came down to Vrindavan to beg for Krishna's forgiveness. He understood that Krishna was the Supreme Lord. This incredible feat, known as Govardhan Leela, showed everyone Krishna's true nature as the supreme protector of his devotees, teaching that faith in the divine provides the ultimate shelter from all of life's storms and the arrogance of false pride."
    ],
  },
  '3': {
    title: "Sudama's Gift to Krishna",
    category: 'Friendship',
    image: PlaceHolderImages.find((img) => img.id === 'story-detail-3'),
    content: [
      "In a small, humble village lived a poor Brahmin named Sudama. He was a man of great learning and piety, but he and his family lived in extreme poverty. Sudama had been a dear childhood friend of Krishna. They had studied together at the ashram of their guru, Sandipani Muni, and had shared many happy, adventurous moments. As they grew up, their paths diverged. Krishna became the magnificent, opulent King of Dwarka, while Sudama remained a simple householder, often struggling to feed his family.",
      "One day, Sudama's wife, seeing her children's hunger and their worn-out clothes, gently urged him, 'My lord, you always speak so fondly of your friend, Krishna, the King of Dwarka. He is known for his kindness to Brahmins and his boundless generosity. Why don't you visit him? I am sure he will not let his friend suffer.' Sudama was hesitant. He cherished his friendship with Krishna and didn't want to approach him with a motive, to ask for material help. His love was pure and unconditional.",
      "But his wife insisted. 'You should never visit someone so great empty-handed,' she reminded him. With no valuables to offer, she went to their neighbors and managed to gather a small handful of chipped, flattened rice (poha). She tied this meager gift in a worn, torn piece of cloth. It was all they could muster.",
      "With the small bundle clutched in his hand, Sudama embarked on the long journey to the grand city of Dwarka. He was awestruck by the golden palaces, the bustling, clean streets, and the prosperous citizens. He felt small and out of place in his tattered clothes. When he finally reached the king's palace, the guards were hesitant to let the poorly dressed man in. But when Sudama, with a trembling voice, mentioned that he was Krishna's childhood friend, the message was rushed to the king.",
      "The moment Krishna heard Sudama's name, he leaped from his royal throne and ran barefoot to the palace gates, his royal garments trailing behind him. Tears of joy streamed down his face as he embraced his old friend, ignoring his torn clothes and dusty feet. He brought Sudama inside, seated him on his own throne, and to the astonishment of the entire court, personally washed his feet with warm water, love, and reverence.",
      "They reminisced about their childhood for hours. Krishna noticed the small, lumpy bundle Sudama was trying to hide. 'What have you brought for me, my friend? You know I love gifts offered with affection,' he asked with a playful smile. Ashamed of his humble offering, Sudama hesitated, but Krishna playfully snatched the bundle and opened it. 'Poha!' he exclaimed with genuine delight. 'My favorite!' He ate a handful with such relish, as if it were the most delicious delicacy in the world. As he reached for a second handful, his queen, Rukmini, gently stopped him, knowing that even one handful of rice offered with such pure devotion was enough to grant immense blessings.",
      "Sudama was so overwhelmed by Krishna's love, humility, and affection that he completely forgot the reason for his visit. He couldn't bring himself to ask for anything. After spending a few blissful days, Sudama started his journey home, his heart full of love but his hands empty. He worried about what he would tell his wife. But as he approached his village, he couldn't find his small, dilapidated hut. In its place stood a magnificent, jewel-studded palace. His family, dressed in beautiful silk clothes and ornaments, came running out to greet him, their faces shining with happiness. Without a single word being spoken, Krishna, the all-knowing Lord, had understood his friend's needs and had blessed him with immeasurable prosperity. This beautiful story teaches us that in true friendship and devotion, what is given from the heart, no matter how small, is more valuable than any worldly wealth, and that God always provides for his devotees."
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
