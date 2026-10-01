import type { Metadata } from 'next';
import Image from 'next/image';
import { PortraitSlideshow } from '@/components/PortraitSlideshow';
import { ABOUT_PORTRAIT, EDUCATION, ENGAGEMENTS, LINKS, PERSON, PHOTOS, PORTRAIT_SLIDESHOW } from '@/lib/suresh';

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
            src={ABOUT_PORTRAIT.src}
            alt={ABOUT_PORTRAIT.alt}
            width={ABOUT_PORTRAIT.width}
            height={ABOUT_PORTRAIT.height}
            priority
          />
          <figcaption>{ABOUT_PORTRAIT.caption}</figcaption>
        </figure>
        <div className="page-copy">
          <p>
            O.P. Suresh is a poet, author, and journalist, aged {PERSON.age}, working predominantly in Malayalam. He is
            from Cheekode, Malappuram. He has published five books in Malayalam, and has edited{' '}
            <span className="ml" lang="ml">സിനിമയുടെ സഹയാത്രികൻ</span> (Cinemayude Sahayaathrikan). His poems have been
            translated into English, Hindi, and Tamil.
          </p>
          <p>
            He has worked in Mathrubhumi, Deepika, and Deshabhimani, and in teaching, marketing, and journalism. He has
            taught Malayalam language and literature at Zamorin’s Guruvayurappan College, Kozhikode, and at Minicoy
            Senior Secondary School. He is head of the Kozhikode unit of Deshabhimani Publications. He has spoken at the{' '}
            <a href={LINKS.wlf}>Wayanad Literature Festival</a> and the{' '}
            <a href={LINKS.klf}>Kerala Literature Festival</a>.
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
      <PortraitSlideshow portraits={PORTRAIT_SLIDESHOW} />
      <div className="photo-gallery">
        {(
          [
            ['wide', PHOTOS.filter((photo) => photo.width / photo.height >= 1.15)],
            ['portraits', PHOTOS.filter((photo) => photo.width / photo.height < 1.15)],
          ] as const
        ).map(([band, photos]) => (
          <div className={`photo-band photo-band-${band}`} key={band}>
            {photos.map((photo) => (
              <figure key={photo.src} className={photo.width / photo.height >= 1.85 ? 'span-full' : undefined}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
