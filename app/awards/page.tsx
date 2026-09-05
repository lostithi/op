import type { Metadata } from 'next';
import { AWARDS } from '@/lib/suresh';

export const metadata: Metadata = { title: 'Awards' };

const left = AWARDS.slice(0, 2);
const right = AWARDS.slice(2);

export default function AwardsPage() {
  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">Awards</h2>
        <span className="ornament" aria-hidden="true" />
      </header>
      <hr />
      <section className="list-section">
        <h2>Record</h2>
        <div className="entry-group">
          {left.map((a) => (
            <article className="entry" key={a.titleEn + a.year}>
              <strong>
                {a.year} · {a.titleEn}
              </strong>
              <span className="ml" lang="ml">
                {a.titleMl}
              </span>
              {a.work ? `For ${a.work}. ` : ''}
              {a.note ?? ''}
            </article>
          ))}
        </div>
        <div className="entry-group">
          {right.map((a) => (
            <article className="entry" key={a.titleEn + a.year}>
              <strong>
                {a.year} · {a.titleEn}
              </strong>
              <span className="ml" lang="ml">
                {a.titleMl}
              </span>
              {a.work ? `For ${a.work}. ` : ''}
              {a.note ?? ''}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
