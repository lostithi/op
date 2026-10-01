import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BOOKS, bookPath } from '@/lib/suresh';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BOOKS.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = BOOKS.find((item) => item.slug === slug);
  if (!book) return { title: 'Works' };
  return {
    title: book.titleEn,
    description: `${book.titleEn} (${book.titleMl}). ${book.note}`,
    alternates: { canonical: bookPath(book.slug) },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = BOOKS.find((item) => item.slug === slug);
  if (!book) notFound();
  const links = [
    book.href
      ? { href: book.href, label: book.publisherName }
      : book.publisherUrl
        ? { href: book.publisherUrl, label: book.publisherName }
        : null,
    ...(book.sameAs ?? [])
      .filter((href) => href !== book.href)
      .map((href) => ({ href, label: href.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] })),
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <main id="main">
      <header className="room-head">
        <h2 className="serif">{book.titleEn}</h2>
        <span className="ornament" aria-hidden="true" />
      </header>
      <hr />
      <div className="about-split">
        <div className="cover-grid">
          {book.covers.map((cover) => (
            <figure key={cover.src}>
              <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} priority />
              <figcaption>{cover.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="page-copy">
          <p className="ml" lang="ml">
            {book.titleMl}
          </p>
          <p>{book.gloss}</p>
          <p>{book.note}</p>
          {links.length > 0 ? (
            <p className="titlepage-links book-links">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}
          <p>
            <Link href="/works/">All works</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
