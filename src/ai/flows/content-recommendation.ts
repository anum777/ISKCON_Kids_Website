// src/ai/flows/content-recommendation.ts
'use server';

/**
 * @fileOverview A content recommendation AI agent.
 *
 * - recommendContent - A function that handles the content recommendation process.
 * - ContentRecommendationInput - The input type for the recommendContent function.
 * - ContentRecommendationOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentRecommendationInputSchema = z.object({
  age: z.number().describe('The age of the user.'),
  pastActivities: z
    .array(z.string())
    .describe(
      'A list of the user\'s past activities, such as stories read or games played.'
    ),
});
export type ContentRecommendationInput = z.infer<
  typeof ContentRecommendationInputSchema
>;

const ContentRecommendationOutputSchema = z.object({
  recommendedContent: z
    .array(z.string())
    .describe('A list of recommended content items (story or game titles).'),
});
export type ContentRecommendationOutput = z.infer<
  typeof ContentRecommendationOutputSchema
>;

export async function recommendContent(
  input: ContentRecommendationInput
): Promise<ContentRecommendationOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentRecommendationPrompt',
  input: {schema: ContentRecommendationInputSchema},
  output: {schema: ContentRecommendationOutputSchema},
  prompt: `You are an AI content recommendation system for a children's app.

  Based on the user's age and past activities, recommend a list of content items (story or game titles) that they might enjoy.

  User Age: {{{age}}}
  Past Activities: {{#each pastActivities}}{{{this}}}, {{/each}}

  Recommended Content:`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: ContentRecommendationInputSchema,
    outputSchema: ContentRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
