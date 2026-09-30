import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BOOKS, LINKS, POEMS, READINGS, SONGS } from '@/lib/suresh';

export const metadata: Metadata = { title: 'Works' };

function AxisMark({ kind }: { kind: 'cross' | 'square' | 'circle' }) {
  return (
    <div className="folio-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        {kind === 'cross' ? <path d="M12 2L12 22M2 12L22 12" /> : null}
        {kind === 'square' ? <rect x="6" y="6" width="12" height="12" /> : null}
        {kind === 'circle' ? <circle cx="12" cy="12" r="8" /> : null}
      </svg>
    </div>
  );
}

export default function WorksPage() {
  return (
    <main id="main" className="folio">
      <section className="folio-sec folio-sage">
        <div className="folio-axis" aria-hidden="true" />
        <AxisMark kind="cross" />
        <div className="folio-pane left">
          <h2 className="folio-display serif">
            <span className="ml" lang="ml">
              താജ് മഹൽ
            </span>
            <em>Taj Mahal</em>
          </h2>
          <figure className="folio-figure">
            <Image
              src="/images/cover-taj.jpg"
              alt="DC Books cover of Taj Mahal by O.P. Suresh. The cover is marked 2nd edition."
              width={661}
              height={1024}
            />
            <figcaption>DC Books, 2nd edition</figcaption>
          </figure>
        </div>
        <div className="folio-pane right">
          <p className="folio-lede serif">
            Thirty-five poems, written from 2015 to 2018. Kerala Sahitya Akademi Award for Poetry, 2020, announced 17
            August 2021. Cherukad Award, 2018. Dr. Rajan Memorial Award, 2018.
          </p>
          <p className="folio-note">
            Indian Express Malayalam, 15 October 2018, says the poems were published in Mathrubhumi weekly.{' '}
            <a href={LINKS.tajmahal}>DC Books</a>
            {'. '}
            <a href={LINKS.tajmahalInsight}>Insight Publica</a>.
          </p>
        </div>
      </section>

      <section className="folio-sec folio-rose">
        <div className="folio-axis" aria-hidden="true" />
        <AxisMark kind="square" />
        <div className="folio-pane left">
          <h2 className="folio-display serif">Songs.</h2>
          <p className="folio-note">
            {SONGS.map((song, i) => (
              <span key={song.href}>
                {i > 0 ? <br /> : null}
                <a href={song.href}>
                  {song.title}
                  {` — ${song.source}`}
                </a>
              </span>
            ))}
            <br />
            <a href={LINKS.jiosaavn}>O.P. Suresh — JioSaavn</a>
          </p>
        </div>
        <div className="folio-pane right">
          <p className="folio-lede serif">Readings</p>
          <p className="folio-note">
            {READINGS.map((r, i) => (
              <span key={r.href}>
                {i > 0 ? <br /> : null}
                <a href={r.href}>
                  {r.titleMl ? (
                    <span className="ml" lang="ml">
                      {r.titleMl}
                    </span>
                  ) : (
                    r.title
                  )}
                  {` — ${r.source}`}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="folio-sec folio-sea">
        <div className="folio-axis" aria-hidden="true" />
        <AxisMark kind="circle" />
        <div className="folio-pane left">
          <p className="folio-micro">Collected works</p>
          <h2 className="folio-display serif">The books as they are recorded.</h2>
        </div>
        <div className="folio-pane right">
          <div className="cover-grid">
            {BOOKS.flatMap((book) =>
              book.covers.map((cover) => (
                <figure key={cover.src}>
                  <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} />
                  <figcaption>
                    {book.titleEn}. {cover.caption}
                  </figcaption>
                </figure>
              )),
            )}
          </div>
          <ul className="archive-list">
            {BOOKS.map((b) => (
              <li key={b.slug}>
                <a className="archive-item" href={b.href ?? `#${b.slug}`} id={b.slug}>
                  <span>
                    <strong>{b.titleEn}</strong>
                    <span className="ml" lang="ml">
                      {' '}
                      {b.titleMl}
                    </span>
                  </span>
                  <span className="archive-note">{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="folio-lede serif">Poems in print.</p>
          <figure className="folio-figure">
            <Image
              src="/images/poem-mathram.jpg"
              alt="Poem card titled Mathram, signed O.P. Suresh, with a bare tree and a figure on a swing."
              width={1024}
              height={1024}
            />
            <figcaption>മാത്രം — O.P. Suresh</figcaption>
          </figure>
          <ul className="archive-list">
            {POEMS.map((p) => (
              <li key={p.title}>
                {p.href ? (
                  <a className="archive-item" href={p.href}>
                    <span className="ml" lang="ml">
                      {p.titleMl ?? p.title}
                    </span>
                    <span className="archive-note">{p.source}</span>
                  </a>
                ) : (
                  <span className="archive-item">
                    <span className="ml" lang="ml">
                      {p.titleMl ?? p.title}
                    </span>
                    <span className="archive-note">{p.source}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="folio-note">
            <Link href="/">Return to the archive</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
