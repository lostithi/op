import type { Metadata } from 'next';
import { PERSON } from '@/lib/suresh';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">Contact</h2>
      </header>
      <hr />
      <div className="letter">
        <p className="letter-lede serif">You are welcome to write.</p>
        <p>
          <a className="letter-mail" href={`mailto:${PERSON.email}`}>
            {PERSON.email}
          </a>
        </p>
        <p className="letter-sign ml" lang="ml">
          {PERSON.nameMl}
        </p>
      </div>
    </main>
  );
}
