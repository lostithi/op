import type { Metadata } from 'next';
import Image from 'next/image';
import { LINKS, PERSON } from '@/lib/suresh';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">About</h2>
      </header>
      <hr />
      <div className="about-split">
        <figure className="about-figure">
          <Image
            src="/images/suresh-wlf-2.jpg"
            alt="O.P. Suresh at the Wayanad Literature Festival, speaking beside a clay pitcher."
            width={1200}
            height={900}
          />
          <figcaption>
            <a href={LINKS.wlf}>Wayanad Literature Festival</a>
          </figcaption>
        </figure>
        <div className="page-copy">
          <p>
            O.P. Suresh is a Malayalam poet, songwriter, and translator from Cheekode, in Malappuram district, Kerala. His
            poems have been translated into Hindi, Tamil, Bengali, Assamese, and English.
          </p>
          <p>
            He has taught at Guruvayurappan College in Kozhikode and at Minicoy Senior Secondary School, and has worked as
            a journalist and a management consultant. He is manager of the Deshabhimani Kozhikode unit.
          </p>
          <p>
            He has appeared at the <a href={LINKS.wlf}>Wayanad Literature Festival</a> and the{' '}
            <a href={LINKS.klf}>Kerala Literature Festival</a>. Readings and conversations are gathered on{' '}
            <a href={PERSON.truecopyTag}>Truecopy Think</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
