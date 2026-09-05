import Image from 'next/image';
import Link from 'next/link';
import { AWARDS, BOOKS, LINKS, PERSON } from '@/lib/suresh';

const worksLeft = BOOKS.slice(0, 3);
const worksRight = BOOKS.slice(3);
const awardsLeft = AWARDS.slice(0, 2);
const awardsRight = AWARDS.slice(2);

export default function HomePage() {
  return (
    <main id="main">
      <section className="titlepage">
        <h2 className="titlepage-name">
          <span className="titlepage-ml ml" lang="ml">
            {PERSON.nameMl}
          </span>
          <span className="titlepage-en serif">{PERSON.name}</span>
        </h2>
        <p className="titlepage-role">{PERSON.descriptor}</p>
        <p className="titlepage-role">Cheekode, Malappuram, Kerala</p>
        <p className="titlepage-role">Translated into Hindi, Tamil, Bengali, Assamese, English</p>
        <span className="ornament" aria-hidden="true" />
        <p className="titlepage-links">
          <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          <a href={PERSON.truecopyTag}>Truecopy Think</a>
        </p>
      </section>

      <section className="feature" aria-labelledby="featured-work">
        <figure className="feature-figure">
          <Image
            src="/images/suresh-wlf-1.jpg"
            alt="O.P. Suresh speaking at the Wayanad Literature Festival, seated with a microphone."
            width={900}
            height={1200}
            priority
          />
          <figcaption>
            <a href={LINKS.wlf}>Wayanad Literature Festival</a>
          </figcaption>
        </figure>
        <div>
          <h2 id="featured-work" className="feature-title serif">
            <span className="ml" lang="ml">
              താജ്മഹൽ
            </span>
            Tajmahal
          </h2>
          <p className="feature-text serif">
            The collection to begin with. Thirty-five poems, written between 2015 and 2018.
          </p>
          <p className="feature-links">
            <a href={LINKS.tajmahal}>The book</a>
            <Link href="/works">Works</Link>
          </p>
        </div>
      </section>

      <hr />

      <section className="list-section">
        <h2>Works</h2>
        <div className="entry-group">
          {worksLeft.map((b) => (
            <Link className="entry" key={b.slug} href={b.href ?? `/works#${b.slug}`}>
              <strong>{b.titleEn}</strong>
              <span className="ml" lang="ml">
                {b.titleMl}
              </span>
              {b.note}
            </Link>
          ))}
        </div>
        <div className="entry-group">
          {worksRight.map((b) => (
            <Link className="entry" key={b.slug} href={b.href ?? `/works#${b.slug}`}>
              <strong>{b.titleEn}</strong>
              <span className="ml" lang="ml">
                {b.titleMl}
              </span>
              {b.note}
            </Link>
          ))}
        </div>
      </section>

      <hr />

      <section className="list-section">
        <h2>Awards</h2>
        <div className="entry-group">
          {awardsLeft.map((a) => (
            <div className="entry" key={a.titleEn + a.year}>
              <strong>{a.titleEn}</strong>
              {a.work ? `For ${a.work}. ` : ''}
              {a.note ?? ''}
            </div>
          ))}
        </div>
        <div className="entry-group">
          {awardsRight.map((a) => (
            <div className="entry" key={a.titleEn + a.year}>
              <strong>{a.titleEn}</strong>
              {a.work ? `For ${a.work}. ` : ''}
              {a.note ?? ''}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
