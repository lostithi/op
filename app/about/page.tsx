import type { Metadata } from 'next';
import Image from 'next/image';

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
          <figcaption>Wayanad Literature Festival</figcaption>
        </figure>
        <div className="page-copy">
          <p>
            O.P. Suresh is a Malayalam poet, songwriter, and translator from Cheekode, in Malappuram district, Kerala. His
            poems have been translated into Hindi, Tamil, Bengali, Assamese, and English.
          </p>
          <p>
            He has worked as a teacher, a journalist, and a management consultant. In 2018 he was unit manager of
            Deshabhimani in Kozhikode.
          </p>
        </div>
      </div>
    </main>
  );
}
