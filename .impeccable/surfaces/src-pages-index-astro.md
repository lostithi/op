---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/books.astro","src/pages/awards.astro","src/pages/about.astro","src/pages/contact.astro"]
---

# Surface: official teletext magazine (home + keyed pages)

## Scope
Visitor mode: Persuade (identity/proof), with Read on books/awards pages.

Approved world: broadcast teletext magazine (`broadcast-programming-teletext-service`, seed `9898f932`). User chose challenger over assigned Jacket Table.

Approved composition: Comp C split magazine (`.impeccable/mocks/comp-c-split.png`).

## Audience / job
English-speaking literary visitor confirms who O.P. Suresh is, then keys to books or awards. Google receives a Person graph.

## Direction
Page 100 is a 40×24 Mode 7 screen: mosaic portrait left, stacked facts right, HOLD subpages, REVEAL for Malayalam. Fastext 100/200/300/400. Never Google chrome. Never cream poet brochure.

Memorable moment: typing three digits to change pages; REVEAL flipping English titles to Malayalam.

## Inventory
- Header / HOLD / digit buffer: semantic HTML+JS
- Mosaic portrait: SVG/CSS cells (stand-in, not a photograph)
- Double-height name, fact stack, REVEAL, footer: semantic
- No client photo or book covers on hand

## Unresolved
Domain, contact, birth date, real photographs. English Wikipedia not created from this repo (COI).
