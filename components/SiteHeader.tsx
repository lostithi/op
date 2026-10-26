'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/lib/suresh';

const links = [
  { href: PATHS.works, label: 'Works' },
  { href: PATHS.awards, label: 'Awards' },
  { href: PATHS.about, label: 'About' },
  { href: PATHS.contact, label: 'Contact' },
];

export function SiteHeader() {
  const path = usePathname();

  return (
    <header className="masthead">
      <h1 className="branding serif">
        <Link href="/" aria-label="O.P. Suresh">
          <span>Poetry</span>
          <span>Archive</span>
        </Link>
      </h1>
      <div className="mast-center">
        <Link className="op-link serif" href="/">
          op
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              className="nav-link"
              href={l.href}
              aria-current={path === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mast-right serif">
        <span>Kerala</span>
        <span>India</span>
      </p>
    </header>
  );
}
