export const SITE = 'https://opsuresh.com';

/** Homepage and site metadata only — not used in the About slideshow or gallery. */
export const PORTRAIT = {
  src: '/images/portrait-studio.jpg',
  alt: 'Portrait of O.P. Suresh in a yellow striped shirt against a black background.',
  width: 682,
  height: 1024,
} as const;

export const ABOUT_PORTRAIT = {
  src: '/images/portrait-seated.jpg',
  alt: 'O.P. Suresh seated outdoors in a yellow kurta and white dhoti.',
  width: 682,
  height: 1024,
  caption: 'O.P. Suresh',
} as const;

/** About-page marquee only — excludes homepage (`PORTRAIT`) and About lead (`ABOUT_PORTRAIT`). One entry per image file. */
export const PORTRAIT_SLIDESHOW: Picture[] = [
  {
    src: '/images/slideshow-stage-ribbon.jpg',
    alt: 'O.P. Suresh on stage with a prize rosette and three other men.',
    width: 939,
    height: 1024,
    caption: 'O.P. Suresh',
  },
  {
    src: '/images/slideshow-chin-portrait.jpg',
    alt: 'Portrait of O.P. Suresh with his hand at his jaw.',
    width: 1024,
    height: 682,
    caption: 'O.P. Suresh',
    objectPosition: '50% 38%',
  },
  {
    src: '/images/slideshow-iffk-group.jpg',
    alt: 'O.P. Suresh with two other men. The lanyards read IFFK.',
    width: 768,
    height: 1024,
    caption: 'At the IFFK.',
  },
  {
    src: '/images/slideshow-reading-mic.jpg',
    alt: 'O.P. Suresh speaking at a microphone.',
    width: 1024,
    height: 682,
    caption: 'Speech at a public reading.',
    objectPosition: '50% 40%',
  },
  {
    src: '/images/portrait-beanie.jpg',
    alt: 'Portrait of O.P. Suresh wearing glasses and a grey and black cap.',
    width: 684,
    height: 1024,
    caption: 'O.P. Suresh',
  },
  {
    src: '/images/slideshow-table-talk.jpg',
    alt: 'O.P. Suresh speaking closely with another man at a table with a red cloth.',
    width: 1024,
    height: 887,
    caption: 'O.P. Suresh',
    objectPosition: '50% 42%',
  },
  {
    src: '/images/slideshow-wlf-mic.jpg',
    alt: 'O.P. Suresh speaking at the Wayanad Literature Festival. His badge reads O.P. Suresh, Speaker.',
    width: 948,
    height: 1024,
    caption: 'Wayanad Literature Festival.',
  },
  {
    src: '/images/slideshow-two-kurta.jpg',
    alt: 'O.P. Suresh standing with an older man in a red kurta.',
    width: 768,
    height: 1024,
    caption: 'O.P. Suresh',
  },
  {
    src: '/images/slideshow-three-talk.jpg',
    alt: 'O.P. Suresh in conversation with another man in front of a Malayalam banner.',
    width: 699,
    height: 641,
    caption: 'O.P. Suresh',
    objectPosition: '62% 32%',
  },
  {
    src: '/images/slideshow-conversation.jpg',
    alt: 'O.P. Suresh in conversation with another man.',
    width: 884,
    height: 1024,
    caption: 'O.P. Suresh',
  },
  {
    src: '/images/slideshow-three-indoor.jpg',
    alt: 'O.P. Suresh with two other men at an indoor event.',
    width: 768,
    height: 1024,
    caption: 'O.P. Suresh',
  },
];

export const PERSON = {
  name: 'O.P. Suresh',
  nameMl: 'ഒ.പി. സുരേഷ്',
  aliases: ['O. P. Suresh', 'OP Suresh', 'Suresh O.P.'],
  descriptor: 'Malayalam poet, author, and journalist',
  descriptorMl: 'കവി, എഴുത്തുകാരൻ, മാധ്യമപ്രവർത്തകൻ',
  nativePlace: 'Cheekode, Malappuram, Kerala',
  age: '53',
  addressLines: ['Satori', 'Nellikode', 'Kozhikode', 'Kerala 673016', 'India'],
  phone: '+919447644528',
  phoneDisplay: '+91 94476 44528',
  email: 'opsuresh@gmail.com',
  wikidataId: 'Q110120248',
  wikidata: 'https://www.wikidata.org/wiki/Q110120248',
  wikipediaMl:
    'https://ml.wikipedia.org/wiki/%E0%B4%92.%E0%B4%AA%E0%B4%BF._%E0%B4%B8%E0%B5%81%E0%B4%B0%E0%B5%87%E0%B4%B7%E0%B5%8D',
  truecopy: 'https://truecopythink.media/contributor/op-suresh',
  truecopyTag: 'https://truecopythink.media/tag/op-suresh',
  facebook: 'https://www.facebook.com/opsuresh/',
  instagram: 'https://www.instagram.com/opsureshsuresh/',
} as const;

export const LINKS = {
  tajmahal: 'https://dcbookstore.com/books/tajmahal',
  tajmahalInsight: 'https://www.insightpublica.com/books/malayalam/poem/writings/taj-mahal',
  verutheyirikkuvin: 'https://www.mbibooks.com/product/verutheyirikkuvin/',
  ekakikalude: 'https://www.chinthapublishers.com/ekakikalude-alkkoottam.html',
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
  kaumudi:
    'https://keralakaumudi.com/en/kerala/general/kerala-sahitya-akademi-awards-announced-poetry-award-to-op-suresh-fellowships-awarded-to-perumbadavam-and-sethu-620160',
  cherukadExpress:
    'https://malayalam.indianexpress.com/kerala-news/cherukad-award-to-o-p-suresh-for-tajmahal/',
  alifMeem:
    'https://www.deshabhimani.com/art-culture/art-and-culture-news--34104/aliph-meme-poetry-award-2026-84042',
  readingVerattam: 'https://www.youtube.com/watch?v=RY_Dcs23yhQ',
  readingTajmahal: 'https://www.youtube.com/watch?v=22n83ACba58',
  readingAdrisyam: 'https://www.youtube.com/watch?v=x_pJvh4k62g',
  talkKalpetta: 'https://www.youtube.com/watch?v=RT07BDREC8s',
  talkDialogos: 'https://www.youtube.com/watch?v=OggEe_9x7Kg',
  talkChavara: 'https://www.youtube.com/watch?v=apK4A2JZ0jM',
  songMadangiyethumbol: 'https://www.youtube.com/watch?v=RYPWgH_OQoY',
  songMadangiyethumbolVideo: 'https://www.youtube.com/watch?v=_pfuVXTfkWI',
  songOruthulli: 'https://www.youtube.com/watch?v=23dERxp2InE',
  songVaanam: 'https://www.youtube.com/watch?v=hhtO96Ybjl4',
  jiosaavn: 'https://www.jiosaavn.com/artist/o.p.suresh-songs/61kF3gfbObo_',
} as const;

export type Picture = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** CSS `object-position` for slideshow crops (default `center center`). */
  objectPosition?: string;
  /** Slideshow only — `contain` for very wide shots that would lose the subject under cover. */
  objectFit?: 'cover' | 'contain';
};

export type Book = {
  slug: string;
  titleEn: string;
  titleMl: string;
  gloss: string;
  note: string;
  year: string;
  publisherName: string;
  publisherUrl?: string;
  isbn?: string;
  href?: string;
  sameAs?: string[];
  bookAwards?: string[];
  editor?: boolean;
  covers: Picture[];
};

export function bookPath(slug: string) {
  return `/works/${slug}/`;
}

export const BOOKS: Book[] = [
  {
    slug: 'pala-kaalangalil-oru-poovu',
    titleEn: 'Pala Kaalangalil Oru Poovu',
    titleMl: 'പലകാലങ്ങളിൽ ഒരു പൂവ്',
    gloss: 'Poetry. A Flower for All Seasons.',
    year: '2008',
    publisherName: 'DC Books',
    publisherUrl: 'https://dcbookstore.com/',
    isbn: '978-81-264-2007-0',
    bookAwards: ['Atlas Kairali Award for Poetry, 2008'],
    note: 'DC Books, 2008. ISBN 978-81-264-2007-0. An Insight Publica cover is marked 3rd edition. Atlas Kairali Award for Poetry, 2008.',
    covers: [
      {
        src: '/images/cover-pala.jpg',
        alt: 'Red DC Books cover of Pala Kaalangalil Oru Poovu by O.P. Suresh.',
        width: 584,
        height: 944,
        caption: 'DC Books',
      },
      {
        src: '/images/cover-pala-insight.jpg',
        alt: 'Insight Publica third-edition cover of Pala Kaalangalil Oru Poovu by O.P. Suresh.',
        width: 613,
        height: 890,
        caption: 'Insight Publica, 3rd edition',
      },
    ],
  },
  {
    slug: 'verutheyirikkuvin',
    titleEn: 'Verutheyirikkuvin',
    titleMl: 'വെറുതെയിരിക്കുവിൻ',
    gloss: 'Poetry. Sit Still.',
    year: '2015',
    publisherName: 'Mathrubhumi Books',
    publisherUrl: 'https://www.mbibooks.com/',
    isbn: '978-81-8266-544-6',
    sameAs: [LINKS.verutheyirikkuvin],
    note: 'Mathrubhumi Books, 2015. ISBN 978-81-8266-544-6. ₹85. Cover design: Satheesh Unnikrishnan.',
    href: LINKS.verutheyirikkuvin,
    covers: [
      {
        src: '/images/cover-veruthe.jpg',
        alt: 'Yellow Mathrubhumi Books cover of Verutheyirikkuvin by O.P. Suresh.',
        width: 590,
        height: 866,
        caption: 'Mathrubhumi Books',
      },
    ],
  },
  {
    slug: 'ekakikalude-aalkkoottam',
    titleEn: 'Ekakikalude Aalkkoottam',
    titleMl: 'ഏകാകികളുടെ ആൾക്കൂട്ടം',
    gloss: 'Anecdotes. Crowd of Loners.',
    year: '2017',
    publisherName: 'Chintha Publishers',
    publisherUrl: 'https://www.chinthapublishers.com/',
    isbn: '9386637014',
    sameAs: [LINKS.ekakikalude],
    note: 'Chintha Publishers, 2017. ISBN 9386637014. ₹75. A Basho Books copy is marked released May 2022, ISBN 978-93-93762-04-7, ₹120. Cover design: Nishan. Photograph: Binuraj.',
    href: LINKS.ekakikalude,
    covers: [
      {
        src: '/images/cover-ekaki.jpg',
        alt: 'Basho Books cover of Ekakikalude Aalkkoottam, a green bicycle with a basket of flowers.',
        width: 584,
        height: 944,
        caption: 'Basho Books, 2022',
      },
      {
        src: '/images/cover-ekaki-red.jpg',
        alt: 'Red cover of Ekakikalude Aalkkoottam, crumpled paper and a cigarette. No publisher name is printed on this front.',
        width: 574,
        height: 1023,
        caption: 'Another cover of the same title',
      },
    ],
  },
  {
    slug: 'taj-mahal',
    titleEn: 'Taj Mahal',
    titleMl: 'താജ് മഹൽ',
    gloss: 'Poetry.',
    year: '2018',
    publisherName: 'DC Books',
    publisherUrl: 'https://dcbookstore.com/',
    isbn: '978-93-5282-594-3',
    sameAs: [LINKS.tajmahal, LINKS.tajmahalInsight],
    bookAwards: [
      'Kerala Sahitya Akademi Award for Poetry, 2020',
      'Cherukad Award, 2018',
      'Dr. Rajan Memorial Award, 2018',
    ],
    note: 'DC Books, 2018. ISBN 978-93-5282-594-3. The photographed DC Books cover is marked 2nd edition. ₹85. Thirty-five poems, written from 2015 to 2018. Insight Publica edition, ISBN 978-93-5517-195-5, ₹159.',
    href: LINKS.tajmahal,
    covers: [
      {
        src: '/images/cover-taj.jpg',
        alt: 'DC Books cover of Taj Mahal by O.P. Suresh, orange title on a black field, a white dog at the lower right.',
        width: 610,
        height: 926,
        caption: 'DC Books, 2nd edition',
      },
      {
        src: '/images/cover-taj-insight.jpg',
        alt: 'Floral cover of Taj Mahal by O.P. Suresh, noting the Kerala Sahitya Akademi award.',
        width: 598,
        height: 906,
        caption: 'Insight Publica',
      },
    ],
  },
  {
    slug: 'pachilayude-jeevacharithram',
    titleEn: 'Pachilayude Jeevacharithram',
    titleMl: 'പച്ചിലയുടെ ജീവചരിത്രം',
    gloss: 'Poetry. The Life History of a Green Leaf.',
    year: '2023',
    publisherName: 'Mathrubhumi Books',
    publisherUrl: 'https://www.mbibooks.com/',
    isbn: '978-93-5962-006-0',
    bookAwards: ['Manimallika Literary Award, 2024'],
    note: 'Mathrubhumi Books, 2023. ISBN 978-93-5962-006-0. ₹190. Author photograph: Aju. Cover design: Vimal G.P. Manimallika Literary Award, 2024.',
    covers: [
      {
        src: '/images/cover-pachila.jpg',
        alt: 'Mathrubhumi Books cover of Pachilayude Jeevacharithram, a tree drawn as a fingerprint.',
        width: 500,
        height: 927,
        caption: 'Mathrubhumi Books, 2023',
      },
    ],
  },
  {
    slug: 'cinemayude-sahayaathrikan',
    titleEn: 'Cinemayude Sahayaathrikan',
    titleMl: 'സിനിമയുടെ സഹയാത്രികൻ',
    gloss: 'Editor. The Fellow Traveller of Cinema.',
    year: '2024',
    publisherName: 'Kerala State Chalachitra Academy',
    isbn: '978-93-93541-61-1',
    editor: true,
    note: 'Kerala State Chalachitra Academy, 2024. ISBN 978-93-93541-61-1. ₹500. The cover is a portrait of Chelavoor Venu. The back lists it as Malayalam essays, memoirs, and non-fiction.',
    covers: [
      {
        src: '/images/cover-cinema.jpg',
        alt: 'Cover of Cinemayude Sahayaathrikan, edited by O.P. Suresh, with a drawn portrait of Chelavoor Venu.',
        width: 595,
        height: 926,
        caption: 'Kerala State Chalachitra Academy, 2024',
      },
    ],
  },
];

export type Appearance = {
  title: string;
  titleMl?: string;
  source: string;
  href?: string;
};

export const POEMS: Appearance[] = [
  { title: 'Kalapurushan', titleMl: 'കാലപുരുഷൻ', source: 'Mathrubhumi', href: LINKS.kalapurushan },
  {
    title: 'Avidethekkulla Vandi',
    titleMl: 'അവിടേക്കുള്ള വണ്ടി',
    source: 'Samakalika Malayalam',
    href: LINKS.avidethekkullaVandi,
  },
  { title: 'Kulivellam', titleMl: 'കുളിവെള്ളം', source: 'Samakalika Malayalam', href: LINKS.kulivellam },
  {
    title: 'Varthulachathvaram',
    titleMl: 'വർത്തുളചത്വരം',
    source: 'Samakalika Malayalam',
    href: LINKS.varthulachathvaram,
  },
  { title: 'Ini', titleMl: 'ഇനി', source: 'Truecopy Think', href: LINKS.poemIni },
  { title: 'Che', titleMl: 'ഛെ !', source: 'Truecopy Think', href: LINKS.poemChe },
  {
    title: 'Benjamin Netanyahu',
    titleMl: 'ബെഞ്ചമിൻ നെതന്യാഹു',
    source: 'Truecopy Think',
    href: LINKS.poemBenjamin,
  },
  {
    title: 'Mathram',
    titleMl: 'മാത്രം',
    source: 'Signed ഒ.പി. സുരേഷ്.',
  },
  {
    title: 'Impermanence',
    source:
      'Translated from the Malayalam by Jayasree Kalathil. Malayalam Literary Survey, Vol. 45, Issue 4, October–December 2025, pages 41–43.',
  },
];

export const READINGS: Appearance[] = [
  {
    title: 'Verattam',
    titleMl: 'വേരറ്റം',
    source: 'Truecopy Think. O.P. Suresh reading the poem.',
    href: LINKS.readingVerattam,
  },
  {
    title: 'Bavuttikkayude Tajmahal',
    titleMl: 'ബാവൂട്ടിക്കയുടെ താജ്മഹൽ',
    source: 'Truecopy Think. ഒ.പി. സുരേഷിന്റെ കാവ്യ ജീവിതം.',
    href: LINKS.readingTajmahal,
  },
  {
    title: 'Adrisyam',
    titleMl: 'അദൃശ്യം',
    source: 'Sydney Malayalam Live',
    href: LINKS.readingAdrisyam,
  },
  {
    title: 'A conversation with Kalpetta Narayanan',
    titleMl: 'രണ്ടു കവികൾ തമ്മിൽ സംഭാഷണത്തിന് ഒരു ശ്രമം',
    source: 'Truecopy Think. കൽപ്പറ്റ നാരായണൻ / ഒ.പി. സുരേഷ്.',
    href: LINKS.talkKalpetta,
  },
  {
    title: 'Dialogos, with Jayasree Kalathil',
    titleMl: 'എൻ. പ്രഭാകരനെയോ എസ്. ഹരീഷിനെയോ മൊഴിമാറ്റാൻ എളുപ്പം?',
    source: 'Truecopy Think',
    href: LINKS.talkDialogos,
  },
  {
    title: 'Chavara Memorial Speech',
    source: 'Silver Hills CMI Institutions. Route to the Root.',
    href: LINKS.talkChavara,
  },
];

export const SONGS: Appearance[] = [
  {
    title: 'Madangiyethumbol',
    source: 'Shahabaz Aman, O.P. Suresh. Manorama Music Kavithakal.',
    href: LINKS.songMadangiyethumbol,
  },
  {
    title: 'Madangiyethumbol',
    source: 'Ghazal video. Shahabaz Aman, O.P. Suresh. Malayalam Movie Songs.',
    href: LINKS.songMadangiyethumbolVideo,
  },
  {
    title: 'Oruthulli Kanneerin',
    source: 'Sithara Krishnakumar, Mohazin Omar, O.P. Suresh. From Pranayathilanu Njan.',
    href: LINKS.songOruthulli,
  },
  {
    title: 'Vaanam Vismaya Thaarangalal',
    source: 'Mohazin Omar, O.P. Suresh, Amal Antony. From Pranayathilanu Njan.',
    href: LINKS.songVaanam,
  },
];

export type Award = {
  year: string;
  titleEn: string;
  titleMl: string;
  work?: string;
  note?: string;
  href?: string;
};

export const AWARDS: Award[] = [
  {
    year: '2026',
    titleEn: 'Alif Meem Poetry Award',
    titleMl: 'അലിഫ് മീം കവിതാ പുരസ്‌കാരം',
    work: 'Muthu Velicham (മുത്തു വെളിച്ചം)',
    note: 'Deshabhimani, 21 August 2026.',
    href: LINKS.alifMeem,
  },
  {
    year: '2024',
    titleEn: 'Manimallika Literary Award',
    titleMl: 'മണിമല്ലിക സാഹിത്യ പുരസ്കാരം',
    work: 'Pachilayude Jeevacharithram',
    note: 'The Wayanad Literature Festival speaker note names the Malayalam Association of Thalassery Brennan College.',
    href: LINKS.wlf,
  },
  {
    year: '2020',
    titleEn: 'Kerala Sahitya Akademi Award for Poetry',
    titleMl: 'കേരള സാഹിത്യ അക്കാദമി പുരസ്കാരം — കവിത',
    work: 'Taj Mahal',
    note: 'The 2020 awards were announced on 17 August 2021. Kerala Kaumudi.',
    href: LINKS.kaumudi,
  },
  {
    year: '2018',
    titleEn: 'Cherukad Award',
    titleMl: 'ചെറുകാട് പുരസ്കാരം',
    work: 'Taj Mahal',
    note: 'Indian Express Malayalam, 15 October 2018.',
    href: LINKS.cherukadExpress,
  },
  {
    year: '2018',
    titleEn: 'Dr. Rajan Memorial Award',
    titleMl: 'ഡോ. രാജൻ സ്മാരക പുരസ്കാരം',
    work: 'Taj Mahal',
    note: 'Recorded in his curriculum vitae and on the Mathrubhumi Books author note.',
  },
  {
    year: '2008',
    titleEn: 'Atlas Kairali Award for Poetry',
    titleMl: 'അറ്റ്ലസ് കൈരളി പുരസ്കാരം',
    work: 'Pala Kaalangalil Oru Poovu',
    note: 'Recorded in his curriculum vitae.',
  },
  {
    year: '1999',
    titleEn: 'Vidyarangam Award for Poetry',
    titleMl: 'വിദ്യാരംഗം പുരസ്കാരം',
    work: 'Bhoomisasthrathile Bhoomi',
    note: 'Recorded in his curriculum vitae.',
  },
];

export const EDUCATION = [
  'MBA, Marketing, Sri Vinayaka Mission University, 2008–2010.',
  'BEd, Malayalam Literature, Calicut University, 1994.',
  'MA, Malayalam Literature, Calicut University, 1992–1994.',
  'BA, Malayalam Literature, Calicut University, 1989–1992.',
] as const;

export const ENGAGEMENTS = [
  "International project ‘Heart on Platform’, with Tukums City of Literature, 2025.",
  "Project ‘The Roads that lead to Edinburgh’, with Melbourne City of Literature, 2024.",
  'Organizing committee member, Kerala Literature Festival, 2016 to the present.',
  'Participant, national literary programmes of the Kendra Sahitya Akademi, New Delhi, 2016 to the present.',
  'Member, steering committee, UNESCO City of Literature, Kozhikode.',
  'Director, M. Mukundan Literary Festival, 2024.',
  'Jury member, Malayalam Cinema Today, IFFK, 2023.',
  'Director, Malappuram Mahotsavam Literary and Cultural Festival, 2022.',
  'Chief organiser, MT Festival, 2017, commemorating M.T. Vasudevan Nair.',
  'Representative, Malayalam poetry, Hyderabad Literature Festival, 2010.',
  'General convenor, International Literature Festival of Kerala, 2007.',
] as const;

export const PHOTOS: Picture[] = [
  {
    src: '/images/podium-culture.jpg',
    alt: 'O.P. Suresh speaking at a lectern marked Ministry of Culture, Government of India, and Sahitya Akademi.',
    width: 1024,
    height: 682,
    caption: 'Speech at the Ministry of Culture and Sahitya Akademi.',
  },
  {
    src: '/images/letters-2026.jpg',
    alt: 'O.P. Suresh on a Festival of Letters panel. His nameplate reads O.P. Suresh. The banner is dated 30 March to 4 April 2026.',
    width: 1024,
    height: 634,
    caption: 'Festival of Letters. 30 March–4 April 2026.',
  },
  {
    src: '/images/klf-2025.jpg',
    alt: 'O.P. Suresh speaking on a Kerala Literature Festival panel. The backdrop reads 8th edition, 23, 24, 25, 26 January 2025, Kozhikode Beach.',
    width: 1024,
    height: 682,
    caption: 'Kerala Literature Festival. 23–26 January 2025, Kozhikode Beach.',
  },
  {
    src: '/images/wlf-2024.jpg',
    alt: 'O.P. Suresh speaking on stage at the Wayanad Literature Festival. The screen reads WLF 2024.',
    width: 1024,
    height: 658,
    caption: 'Wayanad Literature Festival, 2024.',
  },
  {
    src: '/images/kofilm-2024.jpg',
    alt: 'O.P. Suresh speaking at the Kozhikode Corporation KO Film Fest open forum. The banner includes the Kerala State Chalachitra Academy and the date to 11 January 2024.',
    width: 1024,
    height: 682,
    caption: 'Kozhikode Corporation KO Film Fest. To 11 January 2024.',
  },
  {
    src: '/images/iffk.jpg',
    alt: 'O.P. Suresh standing with four other people in front of large letters spelling IFFK.',
    width: 1024,
    height: 768,
    caption: 'At the IFFK.',
  },
  {
    src: '/images/reading-two.jpg',
    alt: 'O.P. Suresh speaking at the Kerala Literature Festival. The lanyards read KLF.',
    width: 1024,
    height: 682,
    caption: 'Kerala Literature Festival.',
  },
  {
    src: '/images/seated-panel.jpg',
    alt: 'O.P. Suresh speaking on a panel. The backdrop reads KULF.',
    width: 1024,
    height: 682,
    caption: 'KULF.',
  },
  {
    src: '/images/reading-bava.jpg',
    alt: 'O.P. Suresh speaking at a microphone.',
    width: 731,
    height: 1024,
    caption: 'Speech at a public reading.',
  },
  {
    src: '/images/sketch-2024.jpg',
    alt: 'Ink and colour drawing of O.P. Suresh in a cap, looking at a phone. The sheet is dated 20/11/24.',
    width: 843,
    height: 1024,
    caption: 'O.P. sketch by deva Prakash.',
  },
];


export function personJsonLd() {
  const personId = `${SITE}/#person`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: PERSON.name,
        alternateName: PERSON.nameMl,
        inLanguage: ['en', 'ml'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: PERSON.name,
        alternateName: [...PERSON.aliases, PERSON.nameMl],
        description: PERSON.descriptor,
        url: `${SITE}/`,
        image: `${SITE}${PORTRAIT.src}`,
        jobTitle: ['Poet', 'Author', 'Journalist'],
        nationality: { '@type': 'Country', name: 'India' },
        homeLocation: { '@type': 'Place', name: PERSON.nativePlace },
        knowsLanguage: [
          { '@type': 'Language', name: 'Malayalam' },
          { '@type': 'Language', name: 'English' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'public enquiries',
          url: `${SITE}/contact/`,
        },
        award: AWARDS.map((a) =>
          [a.year, a.titleEn, a.work ? `for ${a.work}` : ''].filter(Boolean).join(' '),
        ),
        sameAs: [
          PERSON.wikipediaMl,
          PERSON.wikidata,
          PERSON.truecopy,
          PERSON.facebook,
          PERSON.instagram,
          LINKS.wlf,
          LINKS.klf,
          LINKS.jiosaavn,
        ],
      },
      ...BOOKS.map((book) => {
        const url = `${SITE}${bookPath(book.slug)}`;
        const publisher: { '@type': 'Organization'; name: string; url?: string } = {
          '@type': 'Organization',
          name: book.publisherName,
        };
        if (book.publisherUrl) publisher.url = book.publisherUrl;
        return {
          '@type': 'Book',
          '@id': url,
          name: book.titleEn,
          alternateName: book.titleMl,
          inLanguage: 'ml',
          url,
          image: `${SITE}${book.covers[0].src}`,
          datePublished: book.year,
          ...(book.isbn ? { isbn: book.isbn } : {}),
          ...(book.editor ? { editor: { '@id': personId } } : { author: { '@id': personId } }),
          publisher,
          ...(book.sameAs?.length ? { sameAs: book.sameAs } : {}),
          ...(book.bookAwards?.length ? { award: book.bookAwards } : {}),
        };
      }),
    ],
  };
}
