import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Canyon Spirit',
    category: 'Adventure Reel',
    instagramUrl: 'https://www.instagram.com/reel/DRfYpnHkRlK/',
    description: 'Capturing the raw energy of the canyon winds and the silent strength of the stone.'
  },
  {
    id: '2',
    title: 'Forest Awakening',
    category: 'Nature',
    instagramUrl: 'https://www.instagram.com/reel/DRK1vRkERlL/',
    description: 'A journey through the deep woods where light filters through the canopy like liquid gold.'
  },
  {
    id: '3',
    title: 'River Rhythms',
    category: 'Water',
    instagramUrl: 'https://www.instagram.com/reel/DQudqX4EZ0B/',
    description: 'The ceaseless flow of the river, a meditation on movement and time.'
  },
  {
    id: '4',
    title: 'Desert Mirage',
    category: 'Landscape',
    instagramUrl: 'https://www.instagram.com/reel/DQZzIgbEWsw/',
    description: 'Heat waves and horizons. The desert tells stories of resilience and beauty.'
  },
  {
    id: '5',
    title: 'Golden Hour Peak',
    category: 'Mountain',
    instagramUrl: 'https://www.instagram.com/reel/DPzIaQggFsY/',
    description: 'Standing at the summit as the world turns gold beneath our feet.'
  },
  {
    id: '6',
    title: 'Winter Silence',
    category: 'Snow',
    instagramUrl: 'https://www.instagram.com/reel/DPmT6aDgEje/',
    description: 'The hushed quiet of a snow-covered landscape, pure and untouched.'
  },
  {
    id: '7',
    title: 'Autumn Whispers',
    category: 'Seasonal',
    instagramUrl: 'https://www.instagram.com/reel/DPeiGK1AJSf/',
    description: 'When the leaves turn and the air grows crisp, adventure takes on a new color.'
  },
  {
    id: '8',
    title: 'The Climb',
    category: 'Action',
    instagramUrl: 'https://www.instagram.com/reel/DPRth8bAB3_/',
    description: 'Every step upward is a victory. The view from the top is earned.'
  },
  {
    id: '9',
    title: 'Studio Vibe',
    category: 'Behind Scenes',
    instagramUrl: 'https://www.instagram.com/p/DPAYn0CEUev/',
    description: 'Where the magic happens. A look inside the creative process at Vamoka.'
  },
  {
    id: '10',
    title: 'Trail Tales',
    category: 'Adventure',
    instagramUrl: 'https://www.instagram.com/reel/DPMgBlzgN6V/',
    description: 'Paths less traveled and the stories they hold.'
  },
  {
    id: '11',
    title: 'Morning Mist',
    category: 'Atmosphere',
    instagramUrl: 'https://www.instagram.com/reel/DOW3QJegDds/',
    description: 'The ethereal beauty of early morning mist rolling over the hills.'
  },
  {
    id: '12',
    title: 'Art in Motion',
    category: 'Process',
    instagramUrl: 'https://www.instagram.com/reel/DMbgDJ4R4t3/',
    description: 'Creating art in the wild, inspired by the very elements we paint.'
  },
  {
    id: '13',
    title: 'Canvas of the Wild',
    category: 'Creation',
    instagramUrl: 'https://www.instagram.com/reel/DMRIQDjRUAD/',
    description: 'Where the brush follows the rhythm of the wild.'
  },
  {
    id: '14',
    title: 'Peak Serenity',
    category: 'Mountain',
    instagramUrl: 'https://www.instagram.com/reel/DL_DMsdRtJs/',
    description: 'Finding peace at the highest points.'
  },
  {
    id: '15',
    title: 'Oceanic Flow',
    category: 'Water',
    instagramUrl: 'https://www.instagram.com/reel/DKspyitRqvz/',
    description: 'The relentless and beautiful movement of the tides.'
  },
  {
    id: '16',
    title: 'Hidden Trails',
    category: 'Adventure',
    instagramUrl: 'https://www.instagram.com/reel/DKS5y8QxTi6/',
    description: 'Discovering the secrets hidden off the beaten path.'
  },
  {
    id: '17',
    title: 'Morning Light',
    category: 'Atmosphere',
    instagramUrl: 'https://www.instagram.com/reel/DJ12vy5Rz4i/',
    description: 'The first rays of sun breaking through the mist.'
  },
  {
    id: '18',
    title: 'Nature\'s Texture',
    category: 'Detail',
    instagramUrl: 'https://www.instagram.com/reel/DJnE6Q3RCZT/',
    description: 'Zooming in on the intricate details of the natural world.'
  },
  {
    id: '19',
    title: 'Windswept',
    category: 'Landscape',
    instagramUrl: 'https://www.instagram.com/reel/DJfZ5_PRO_S/',
    description: 'The invisible force that shapes the world around us.'
  },
  {
    id: '20',
    title: 'River Stone',
    category: 'Nature',
    instagramUrl: 'https://www.instagram.com/reel/DJc1JTBRkeL/',
    description: 'Smooth stones and flowing water, a perfect harmony.'
  },
  {
    id: '21',
    title: 'Artistic Vision',
    category: 'Gallery',
    instagramUrl: 'https://www.instagram.com/p/DJXoMMcRDr3/',
    description: 'A captured moment of artistic inspiration.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Art Curator AI" for Vamoka Art Adventures. 
Your goal is to help visitors find the perfect art piece for their home.
Be friendly, artistic, and sophisticated.

Key Brand Details to Emphasize:
- **Philosophy**: Vamoka creates unique Handmade Modern Decorative Art.
- **Location**: Based in Virginia, USA.
- **Services**: We offer Worldwide Shipping and Custom Sizes to fit any space.
- **Mission**: Bringing beauty and warmth to your space.

Use the provided product list to make specific recommendations.
If a user asks about the brand, emphasize the details above (Handmade, Virginia-based, Custom options).

Here is the current content catalog:
${JSON.stringify(MOCK_PRODUCTS.map(p => ({ title: p.title, category: p.category, description: p.description })))}

When recommending a piece, mention its title and the feeling it evokes.
Keep responses concise (under 100 words).
`;