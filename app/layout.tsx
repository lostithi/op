import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter, Libre_Baskerville, Noto_Sans_Malayalam, Noto_Serif_Malayalam } from 'next/font/google';
import { SiteHeader } from '@/components/SiteHeader';
import { PERSON, PORTRAIT, SITE, personJsonLd } from '@/lib/suresh';
import './globals.css';

const sans = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Libre_Baskerville({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const ml = Noto_Sans_Malayalam({
  subsets: ['malayalam'],
  variable: '--font-ml',
  display: 'swap',
});

const mlSerif = Noto_Serif_Malayalam({
  subsets: ['malayalam'],
  variable: '--font-ml-serif',
  display: 'swap',
});

const site = process.env.NEXT_PUBLIC_SITE_URL ?? SITE;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'O.P. Suresh',
    template: '%s — O.P. Suresh',
  },
  description:
    'Official site of O.P. Suresh, Malayalam poet, author, and journalist from Cheekode, Kerala.',
  alternates: { canonical: `${site}/` },
  openGraph: {
    title: 'O.P. Suresh',
    description: 'Malayalam poet, author, and journalist. Cheekode, Malappuram, Kerala.',
    type: 'profile',
    url: `${site}/`,
    locale: 'en_IN',
    images: [
      {
        url: PORTRAIT.src,
        width: PORTRAIT.width,
        height: PORTRAIT.height,
        alt: PORTRAIT.alt,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${ml.variable} ${mlSerif.variable}`}>
      <body>
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: A paper poetry archive: the public record set like a journal contents page. Not a Google card, not laterite rooms.
OWN-WORLD: Bone field #E7E9E4, hairline black rules, Inter at 11px for facts, Libre Baskerville for the masthead, Noto Serif Malayalam for titles.
STORY: Read the masthead, scan the facts, find a book.
FIRST VIEWPORT: Three-column masthead POETRY / op / CHEEKODE over a three-column fact grid, then a hairline and the works.
FORM: User-pinned Variant archive (Inter, Baskerville, hairlines). Fake prizes, London, and invented poems from the mock are not used.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <footer className="colophon">
          <p className="op-mark serif">op</p>
          <div className="colophon-end">
            <div className="colophon-meta">
              <p>
                <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
              </p>
              <p>Official site of O.P. Suresh</p>
            </div>
            <a
              className="studio-credit"
              href="https://spinestudio.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spine Studios"
            >
              <Image
                src="/logos/spine-studios.png"
                alt="Spine Studios"
                width={144}
                height={231}
              />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
