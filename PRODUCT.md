# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js (App Router). Chosen after the client asked to leave the static Astro experiments and ship a real literary site in Next.js.

## Users

Primary: English-speaking literary readers, journalists, translators, and festival programmers who search “O.P. Suresh” and need to confirm who he is, what he has published, and why he is notable.

Secondary (same site, not a separate product): Malayalam readers who already know the work and want an official English-language identity they can share.

## Product Purpose

The official website of O.P. Suresh, Malayalam poet, songwriter, and translator. It is the canonical public profile: a Knowledge-Panel-like identity surface plus pages for works, awards, and contact. Success is (1) a visitor can state who he is and name a book and an award within seconds, and (2) search engines receive a consistent Person graph (schema.org + Wikidata + Wikipedia) so a real Google Knowledge Panel can form.

## Positioning

This is not a blog and not a fake Google results page. It is the missing official node in his public graph: Malayalam Wikipedia exists, Wikidata item Q110120248 exists but is almost empty, English Wikipedia does not, and there is no official site. The site is the English-language source of truth that those other nodes can point at.

## Operating Context

Visitors arrive from search, press mentions, or a shared link. They scan identity (name, role, place), proof (Akademi, Cherukad, books), then leave to a book, a published poem, or a contact path. Editors and the client will later drop in photographs, covers, and a contact address. Google Search Console and Wikidata edits happen off-site after launch.

## Capabilities and Constraints

- Home leads with the work and the weather of Kerala (photograph, Malayalam title, English name). Person schema still ships for search. Google chrome is not cloned.
- Visual: clean, artistically rich poet’s site. Teletext and sparse Knowledge-Panel skins were rejected.
- English-first. Malayalam appears for titles, poems, and his written name (ഒ.പി. സുരേഷ്).
- Person JSON-LD, `sameAs` to Wikidata Q110120248 and Malayalam Wikipedia, Open Graph, and a crawlable sitemap.
- Poems are not republished unless rights are granted; the site links to published appearances (e.g. Truecopy Think).
- Birth date, age, email, phone, and photographs are unknown until the client supplies them; those fields stay labeled placeholders and are omitted from schema until confirmed.
- English Wikipedia will not be created from this repo (conflict of interest). Wikidata enrichment is prepared as sourced statements; live Wikidata edits require a human account.
- Undecided: domain name, hosting, and whether a Malayalam locale ships in v1 (default: English-only v1).

## Brand Commitments

- Subject name: **O.P. Suresh** / **ഒ.പി. സുരേഷ്**.
- Role line: Malayalam poet, songwriter, and translator. Based in Kerala, India. From Cheekode, Malappuram.
- Visual/IA pin from the client: a website for a poet that is clean and artistically rich. Earlier Knowledge Panel structure and teletext experiments were rejected.
- Voice: factual, literary, unsensational. No invented reviews, blurbs, or sales claims.

## Evidence on Hand

Confirmed from public sources (do not fabricate beyond these):

- Malayalam Wikipedia: https://ml.wikipedia.org/wiki/ഒ.പി._സുരേഷ്
- Wikidata: https://www.wikidata.org/wiki/Q110120248 (Malayalam label only; no English label, description, or claims as of 2022-08-03)
- Poet, songwriter, translator. Poems translated into Hindi, Tamil, Bengali, Assamese, and English (Wikipedia).
- Born in Cheekode, Malappuram district. Worked as teacher, media journalist, management consultant; reported as Deshabhimani Kozhikode unit manager (2018 press). Wikipedia also states he currently works as a Deshabhimani unit head — treat as last-known, not independently re-verified.
- Farook College alumnus; Malayalam department honoured him on 25 March 2022 for the Akademi award.
- Books (titles confirmed; years/publishers only where sourced):
  - *Tajmahal* (*താജ്മഹൽ*) — 35 poems, 2015–2018; Cherukad Award 2018; Kerala Sahitya Akademi Award for Poetry 2020 (announced 17 August 2021). Poems first appeared in *Mathrubhumi* weekly.
  - *Palakalangalil Oru Poovu* (*പലകാലങ്ങളിൽ ഒരു പൂവ്*) — DC Books, 2010, ISBN 978-81-264-2007-0
  - *Verutheyirikkuvin* (*വെറുതെയിരിക്കുവിൻ*)
  - *Ekakikalude Aalkkoottam* (*ഏകാകികളുടെ ആൾക്കൂട്ടം*)
  - *Pachilayude Jeevacharithram* (*പച്ചിലയുടെ ജീവചരിത്രം*)
  - Editor: *Chelavoor Venu*
- Awards: Kerala Sahitya Akademi Award for Poetry 2020 (*Tajmahal*); Cherukad Award 2018 (*Tajmahal*); Dr. Rajan Memorial Award 2018; Brennan Manimallika Sahitya Puraskaram 2024; Alif Meem Kavitha Award 2025 (last two from Wikipedia only — mark as Wikipedia-sourced until a second citation).
- Press: The Hindu (Cherukad, 17 Oct 2018; Akademi, 17 Aug 2021); New Indian Express (17 Aug 2021); MediaOne; Indian Express Malayalam; Truecopy Think contributor page with published poems.

Absent — do not invent: official photographs, book-cover files, birth date/age, contact details, domain, English Wikipedia article, Google Knowledge Panel (does not exist yet), client-approved bio essay.

## Product Principles

1. Every biographical claim is sourced or labeled as awaiting confirmation.
2. The site is the English canonical URL for a person graph, not a mood piece about poetry.
3. Malayalam is the language of the work; English is the language of discovery.
4. Placeholders are honest; they never look like finished facts.
5. Help Google without impersonating Google.

## Accessibility & Inclusion

English-first public site with Malayalam names and titles in their own script. Target WCAG 2.2 AA. Do not rely on color alone for fact-card meaning. Provide `lang` and `hreflang` correctly when Malayalam strings appear inside English pages.
