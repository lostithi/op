import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">Not found</h2>
        <p>That page is not in this archive.</p>
      </header>
      <hr />
      <p className="page-copy">
        <Link href="/">Return</Link>
      </p>
    </main>
  );
}
