export const PERSON = {
  name: 'O.P. Suresh',
  nameMl: 'ഒ.പി. സുരേഷ്',
  aliases: ['O. P. Suresh', 'OP Suresh'],
  descriptor: 'Malayalam poet, songwriter, translator',
  descriptorMl: 'മലയാള കവി, ഗാനരചയിതാവ്, വിവർത്തകൻ',
  place: 'Cheekode, Malappuram, Kerala',
  placeMl: 'ചീക്കോട്, മലപ്പുറം, കേരളം',
  wikidataId: 'Q110120248',
  wikidata: 'https://www.wikidata.org/wiki/Q110120248',
  wikipediaMl:
    'https://ml.wikipedia.org/wiki/%E0%B4%92.%E0%B4%AA%E0%B4%BF._%E0%B4%B8%E0%B5%81%E0%B4%B0%E0%B5%87%E0%B4%B7%E0%B5%8D',
  truecopy: 'https://truecopythink.media/contributor/op-suresh',
  truecopyTag: 'https://truecopythink.media/tag/op-suresh',
  facebook: 'https://www.facebook.com/opsuresh/',
  instagram: 'https://www.instagram.com/opsureshsuresh/',
  email: 'opsuresh@gmail.com',
} as const;

export const LINKS = {
  tajmahal: 'https://dcbookstore.com/books/tajmahal',
  tajmahalInsight:
    'https://www.insightpublica.com/books/malayalam/poem/writings/taj-mahal',
  palakalangalil: 'https://dcbookstore.com/books/pala-kalangalil-oru-poovu',
  verutheyirikkuvin: 'https://www.mbibooks.com/product/verutheyirikkuvin/',
  ekakikalude: 'https://www.chinthapublishers.com/ekakikalude-alkkoottam.html',
  pachilayude:
    'https://www.amazon.in/%E0%B4%AA%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%BF%E0%B4%B2%E0%B4%AF%E0%B5%81%E0%B4%9F%E0%B5%86-%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%9A%E0%B4%B0%E0%B4%BF%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%82-Pachilayude-Jeevacharithram-Malayalam-ebook/dp/B0CVRRN524',
  kalapurushan:
    'https://www.mathrubhumi.com/special-pages/world-poetry-day-2023/world-poetry-day-2023-poem-by-op-suresh-2fb190b0',
  avidethekkullaVandi:
    'https://www.samakalikamalayalam.com/story/malayalam-vaarika/poetry/poem-written-by-op-suresh-146378.html',
  varthulachathvaram:
    'https://www.samakalikamalayalam.com/story/malayalam-vaarika/poetry/poem-written-by-op-suresh-186951.html',
  kulivellam:
    'https://www.samakalikamalayalam.com/story/malayalam-vaarika/poetry/poem-written-by-op--suresh-181809.html',
  poemIni: 'https://truecopythink.media/poetry/ini-poem-by-op-suresh',
  poemChe: 'https://truecopythink.media/poetry/op-suresh-poem-malayalam-che',
  poemBenjamin:
    'https://truecopythink.media/poetry/benjamin-netanyahu-malayalam-poem-by-op-suresh',
  wlf: 'https://wlfwayanad.com/2024/?page_id=2007',
  klf: 'https://keralaliteraturefestival.com/speakerview/714/O%20P%20Suresh',
  readingVerattam: 'https://www.youtube.com/watch?v=RY_Dcs23yhQ',
  readingTajmahal: 'https://www.youtube.com/watch?v=22n83ACba58',
  readingAdrisyam: 'https://www.youtube.com/watch?v=x_pJvh4k62g',
  songMadangiyethumbol: 'https://www.youtube.com/watch?v=RYPWgH_OQoY',
  jiosaavn: 'https://www.jiosaavn.com/artist/o.p.suresh-songs/61kF3gfbObo_',
} as const;

export type Book = {
  slug: string;
  titleEn: string;
  titleMl: string;
  note: string;
  href?: string;
};

export const BOOKS: Book[] = [
  {
    slug: 'tajmahal',
    titleEn: 'Tajmahal',
    titleMl: 'താജ്മഹൽ',
    note: 'DC Books, 2018. ISBN 978-93-5282-594-3. 35 poems, 2015–2018. Akademi 2020, Cherukad 2018.',
    href: LINKS.tajmahal,
  },
  {
    slug: 'palakalangalil-oru-poovu',
    titleEn: 'Palakalangalil Oru Poovu',
    titleMl: 'പലകാലങ്ങളിൽ ഒരു പൂവ്',
    note: 'DC Books, 2010. ISBN 978-81-264-2007-0.',
    href: LINKS.palakalangalil,
  },
  {
    slug: 'verutheyirikkuvin',
    titleEn: 'Verutheyirikkuvin',
    titleMl: 'വെറുതെയിരിക്കുവിൻ',
    note: 'Mathrubhumi Books. ISBN 978-81-8266-544-6.',
    href: LINKS.verutheyirikkuvin,
  },
  {
    slug: 'ekakikalude-aalkkoottam',
    titleEn: 'Ekakikalude Aalkkoottam',
    titleMl: 'ഏകാകികളുടെ ആൾക്കൂട്ടം',
    note: 'Memoir. Chintha Publishers, 2017. ISBN 978-93-86637-01-7.',
    href: LINKS.ekakikalude,
  },
  {
    slug: 'pachilayude-jeevacharithram',
    titleEn: 'Pachilayude Jeevacharithram',
    titleMl: 'പച്ചിലയുടെ ജീവചരിത്രം',
    note: 'Malayalam ebook.',
    href: LINKS.pachilayude,
  },
  {
    slug: 'chelavoor-venu',
    titleEn: 'Chelavoor Venu',
    titleMl: 'ചെലവൂർ വേണു',
    note: 'Editor.',
  },
];

export type Appearance = {
  titleMl: string;
  source: string;
  href: string;
};

export const POEMS: Appearance[] = [
  { titleMl: 'കാലപുരുഷൻ', source: 'Mathrubhumi', href: LINKS.kalapurushan },
  { titleMl: 'അവിടേക്കുള്ള വണ്ടി', source: 'Samakalika Malayalam', href: LINKS.avidethekkullaVandi },
  { titleMl: 'കുളിവെള്ളം', source: 'Samakalika Malayalam', href: LINKS.kulivellam },
  { titleMl: 'വർത്തുളചത്വരം', source: 'Samakalika Malayalam', href: LINKS.varthulachathvaram },
  { titleMl: 'ഇനി', source: 'Truecopy Think', href: LINKS.poemIni },
  { titleMl: 'ഛെ !', source: 'Truecopy Think', href: LINKS.poemChe },
  { titleMl: 'ബെഞ്ചമിൻ നെതന്യാഹു', source: 'Truecopy Think', href: LINKS.poemBenjamin },
];

export const READINGS: Appearance[] = [
  { titleMl: 'വേരറ്റം', source: 'Truecopy Think', href: LINKS.readingVerattam },
  { titleMl: 'ബാവൂട്ടിക്കയുടെ താജ്മഹൽ', source: 'Truecopy Think', href: LINKS.readingTajmahal },
  { titleMl: 'അദൃശ്യം', source: 'Sydney Malayalam Live', href: LINKS.readingAdrisyam },
];

export type Award = {
  year: string;
  titleEn: string;
  titleMl: string;
  work?: string;
  note?: string;
};

export const AWARDS: Award[] = [
  {
    year: '2020',
    titleEn: 'Kerala Sahitya Akademi Award for Poetry',
    titleMl: 'കേരള സാഹിത്യ അക്കാദമി പുരസ്കാരം — കവിത',
    work: 'Tajmahal',
    note: 'Announced 17 August 2021.',
  },
  {
    year: '2018',
    titleEn: 'Cherukad Award',
    titleMl: 'ചെറുകാട് കവിതാ പുരസ്കാരം',
    work: 'Tajmahal',
  },
  {
    year: '2018',
    titleEn: 'Dr. K. Rajan Memorial Award',
    titleMl: 'ഡോ. കെ. രാജൻ സ്മാരക അവാർഡ്',
  },
  {
    year: '2024',
    titleEn: 'Brennan Manimallika Sahitya Puraskaram',
    titleMl: 'ബ്രണ്ണൻ മണിമല്ലിക സാഹിത്യ പുരസ്കാരം',
    work: 'Pachilayude Jeevacharithram',
  },
  {
    year: '2026',
    titleEn: 'Alif Meem Kavitha Award',
    titleMl: 'അലിഫ് മീം കവിത അവാർഡ്',
    work: 'Muthu Velicham',
  },
];

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON.name,
    alternateName: [...PERSON.aliases, PERSON.nameMl],
    description: PERSON.descriptor,
    jobTitle: ['Poet', 'Songwriter', 'Translator'],
    nationality: { '@type': 'Country', name: 'India' },
    homeLocation: { '@type': 'Place', name: PERSON.place },
    email: PERSON.email,
    award: [
      'Kerala Sahitya Akademi Award for Poetry (2020) for Tajmahal',
      'Cherukad Award (2018) for Tajmahal',
      'Brennan Manimallika Sahitya Puraskaram (2024) for Pachilayude Jeevacharithram',
      'Alif Meem Kavitha Award (2026) for Muthu Velicham',
    ],
    sameAs: [
      PERSON.wikipediaMl,
      PERSON.truecopy,
      PERSON.facebook,
      PERSON.instagram,
      LINKS.wlf,
      LINKS.klf,
      LINKS.jiosaavn,
    ],
  };
}
