import Image from 'next/image';
import Link from 'next/link';
import { AWARDS, BOOKS, LINKS, PERSON, PORTRAIT, bookPath } from '@/lib/suresh';

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
          <a href={PERSON.wikipediaMl}>Malayalam Wikipedia</a>
          <a href={LINKS.wlf}>Wayanad Literature Festival</a>
          <a href={LINKS.klf}>Kerala Literature Festival</a>
          <a href={PERSON.truecopyTag}>Truecopy Think</a>
        </p>
      </section>

      <section className="feature" aria-labelledby="featured-work">
        <figure className="feature-figure">
          <Image
            src="/images/cover-taj.jpg"
            alt="DC Books cover of Taj Mahal by O.P. Suresh. The cover is marked 2nd edition."
            width={610}
            height={926}
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
            <Link href={bookPath('taj-mahal')}>The book</Link>
            <a href={LINKS.tajmahal}>DC Books</a>
          </p>
        </div>
      </section>

      <hr />

      <section className="list-section">
        <h2>Works</h2>
        <div className="entry-group">
          {worksLeft.map((b) => (
            <Link className="entry entry-work" key={b.slug} href={bookPath(b.slug)}>
              <span className="work-plate work-plate-sm">
                <Image
                  src={b.covers[0].src}
                  alt=""
                  width={b.covers[0].width}
                  height={b.covers[0].height}
                />
              </span>
              <span>
                <strong>{b.titleEn}</strong>
                <span className="ml" lang="ml">
                  {b.titleMl}
                </span>
                {b.gloss}
              </span>
            </Link>
          ))}
        </div>
        <div className="entry-group">
          {worksRight.map((b) => (
            <Link className="entry entry-work" key={b.slug} href={bookPath(b.slug)}>
              <span className="work-plate work-plate-sm">
                <Image
                  src={b.covers[0].src}
                  alt=""
                  width={b.covers[0].width}
                  height={b.covers[0].height}
                />
              </span>
              <span>
                <strong>{b.titleEn}</strong>
                <span className="ml" lang="ml">
                  {b.titleMl}
                </span>
                {b.gloss}
              </span>
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
