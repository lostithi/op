import type { Metadata } from 'next';
import Image from 'next/image';
import { EDUCATION, ENGAGEMENTS, LINKS, PERSON, PHOTOS, PORTRAIT } from '@/lib/suresh';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">About</h2>
        <span className="ornament" aria-hidden="true" />
      </header>
      <hr />
      <div className="about-split">
        <figure className="about-figure">
          <Image
            src={PORTRAIT.src}
            alt={PORTRAIT.alt}
            width={PORTRAIT.width}
            height={PORTRAIT.height}
            priority
          />
          <figcaption>{PORTRAIT.caption}</figcaption>
        </figure>
        <div className="page-copy">
          <p>
            O.P. Suresh is a poet, author, and journalist, aged {PERSON.age}, working predominantly in Malayalam. He has
            published five books in Malayalam, and has edited <span className="ml" lang="ml">സിനിമയുടെ സഹയാത്രികൻ</span>{' '}
            (Cinemayude Sahayaathrikan). His poems have been translated into English, Hindi, and Tamil.
          </p>
          <p>
            He has worked in Mathrubhumi, Deepika, and Deshabhimani, and as a lecturer in Malayalam language and
            literature at Zamorin’s Guruvayurappan College, Kozhikode. The{' '}
            <a href={LINKS.wlf}>Wayanad Literature Festival</a> speaker note also records teaching at Minicoy Senior
            Secondary School. He currently serves as head of the Kozhikode unit of Deshabhimani Publications.
          </p>
          <p>
            His native place is Cheekode, Malappuram, as given on the Mathrubhumi Books author note and in Indian Express
            Malayalam, 15 October 2018. That report also says he had worked in teaching, marketing, and journalism, and
            was then manager of the Deshabhimani Kozhikode unit.
          </p>
          <h3>Education</h3>
          <ul className="fact-list">
            {EDUCATION.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h3>Engagements</h3>
          <ul className="fact-list">
            {ENGAGEMENTS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="photo-grid">
        {PHOTOS.map((photo) => (
          <figure key={photo.src}>
            <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
