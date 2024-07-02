import englishOGE from '$lib/assets/english-oge.jpg';
import englishTalking from '$lib/assets/english-talking.jpg';
import englishA1 from '$lib/assets/english-a1.avif';

export const posts = [
	{
		slug: 'oge',
		title: 'ОГЭ',
    content: [
      {
        name: 'Словообразование',
        slug: 'slovo-obrazovanie',
      },
    ],
		img: englishOGE
		},
  {
    slug: 'talking',
    title: 'Для разговора',
    content: [
      {
        name: 'Словообразование',
        slug: 'slovo-obrazovanie',
      },
    ],
    img: englishTalking
  },
  {
    slug: 'a1',
    title: 'A1',
    content: [
      {
        name: 'Словообразование',
        slug: 'slovo-obrazovanie',
      },
    ],
    img: englishA1
  }
];