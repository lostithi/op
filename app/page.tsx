import Image from 'next/image';
import Link from 'next/link';
import { AWARDS, BOOKS, LINKS, PERSON, PORTRAIT } from '@/lib/suresh';

const worksLeft = BOOKS.slice(0, 3);
const worksRight = BOOKS.slice(3);
const awardSplit = Math.ceil(AWARDS.length / 2);
const awardsLeft = AWARDS.slice(0, awardSplit);
const awardsRight = AWARDS.slice(awardSplit);

export default function HomePage() {
  return (
    <main id="main">
      <section className="titlepage">
        <figure className="titlepage-portrait">
          <Image
            src={PORTRAIT.src}
            alt={PORTRAIT.alt}
            width={PORTRAIT.width}
            height={PORTRAIT.height}
            priority
          />
        </figure>
        <h2 className="titlepage-name">
          <span className="titlepage-ml ml" lang="ml">
            {PERSON.nameMl}
          </span>
          <span className="titlepage-en serif">{PERSON.name}</span>
        </h2>
        <p className="titlepage-role">{PERSON.descriptor}</p>
        <p className="titlepage-role">{PERSON.nativePlace}</p>
        <p className="titlepage-role">Poems translated into English, Hindi, and Tamil</p>
        <span className="ornament" aria-hidden="true" />
        <p className="titlepage-links">
          <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          <a href={PERSON.truecopyTag}>Truecopy Think</a>
        </p>
      </section>

      <section className="feature" aria-labelledby="featured-work">
        <figure className="feature-figure">
          <Image
            src="/images/cover-taj.jpg"
            alt="DC Books cover of Taj Mahal by O.P. Suresh. The cover is marked 2nd edition."
            width={661}
            height={1024}
            priority
          />
          <figcaption>
            <a href={LINKS.tajmahal}>DC Books, 2nd edition</a>
          </figcaption>
        </figure>
        <div>
          <h2 id="featured-work" className="feature-title serif">
            <span className="ml" lang="ml">
              താജ് മഹൽ
            </span>
            Taj Mahal
          </h2>
          <p className="feature-text serif">
            Thirty-five poems, written from 2015 to 2018. Kerala Sahitya Akademi Award for Poetry, 2020.
            Cherukad Award, 2018.
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
              {b.gloss}
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
              {b.gloss}
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
              <strong>
                {a.year} · {a.titleEn}
              </strong>
              {a.work ? `For ${a.work}.` : ''}
            </div>
          ))}
        </div>
        <div className="entry-group">
          {awardsRight.map((a) => (
            <div className="entry" key={a.titleEn + a.year}>
              <strong>
                {a.year} · {a.titleEn}
              </strong>
              {a.work ? `For ${a.work}.` : ''}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
