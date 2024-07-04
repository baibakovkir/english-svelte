import englishOGE from '$lib/assets/english-oge.jpg';
import englishTalking from '$lib/assets/english-talking.jpg';
import englishA1 from '$lib/assets/english-a1.avif';

export const posts = [
	{
		slug: 'oge',
		title: 'ОГЭ',
    description: 'Требуется знание времен: Present Simple, Present Continuous, Present Perfect, Past Simple, Past Continuous, Past Perfect, Future Simple.',
    content: [ //https://dzodzo.ru/kodifikator-oge-po-anglijskomu-fipi/
      {
        name: 'Порядок обстоятельств',
        slug: 'adjective-order',
      },
      {
        name: 'Предложения с It',
        slug: 'it-in-the-beginning',
      },
      {
        name: 'There + to be',
        slug: 'there-to-be',
      },
      {
        name: 'Сложносочиненные предложения', //https://studfile.net/preview/3682072/page:39/
        slug: 'compound-sentences',
      },
      {
        name: 'Сложноподчиненные предложения',
        slug: 'complex-sentences',
      },
      {
        name: 'Условные предложения реального характера (Conditional 1)',
        slug: 'conditional-1',
      },
      {
        name: 'Условные предложения нереального характера (Conditional 2)',
        slug: 'conditional-2',
      },
      {
        name: 'I wish...',
        slug: 'i-wish',
      },
      {
        name: 'so/such',
        slug: 'so-such',
      },
      {
        name: 'as ... as; not so ... as; neither ... nor; either ... or;',
        slug: 'as-not-so',
      },
      {
        name: 'Конструкции с глаголами на -ing',
        slug: 'ing-verb-constructions',
      },
      {
        name: 'Конструкции it takes me ... to ...',
        slug: 'it-takes-me',
      },
      {
        name: 'Согласование времен в плане настоящего и прошлого',
        slug: 'conjunctions-present-and-past',
      },
      {
        name: 'Косвенная речь в настоящем и прошедшем времени',
        slug: 'indirect-speech-present-and-past',
      },
      {
        name: 'Простой страдательный залог (Simple passive voice)',
        slug: 'simple-passive',
      },
      {
        name: 'Фразовые глаголы',
        slug: 'phrasal-verbs',
      },
      {
        name: 'Модальные глаголы',
        slug: 'modal-verbs',
      },
      {
        name: 'Будущее время в английском языке (future in English)',
        slug: 'future-in-english',
      },
      {
        name: 'Причастие I (participle I)',
        slug: 'participle-I',
      },
      {
        name: 'Причастие II (participle II)',
        slug: 'participle-II',
      },
      {
        name: 'Существительные во множественном числе',
        slug: 'plural-nouns',
      },
      {
        name: 'Исчисляемые и неисчисляемые существительные',
        slug: 'countable-and-uncountable-nouns',
      },
      {
        name: 'Артикли',
        slug: 'articles',
      },
      {
        name: 'Местоимения',
        slug: 'pronouns',
      },
      {
        name: 'Степени сравнения прилагательных',
        slug: 'comparative-adjectives',
      },
      {
        name: 'Наречия в сравнительной и превосходной степени/ наречия количества',
        slug: 'comparative-and-superlative-adverbs',
      },
      {
        name: 'Количественные числительные',
        slug: 'cardinal-numbers',
      },
      {
        name: 'Порядковые числительные',
        slug: 'ordinal-numbers',
      },
      {
        name: 'Предлоги места, направления и времени',
        slug: 'prepositions-locations-and-times',
      },
      {
        name: 'Связующие компоненты в тексте',
        slug: 'text-components',
      },
      {
        name: 'Словообразование',
        slug: 'word-formation',
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