# Google Knowledge Panel — what this repo can and cannot do

Google does not let a website draw a Knowledge Panel. The panel in your
screenshot (K. Satchidanandan) comes from Google's graph: Wikipedia,
Wikidata, books, and news. O.P. Suresh already has:

- Malayalam Wikipedia
- Wikidata Q110120248 (almost empty: English label missing, no occupation, no awards)
- No English Wikipedia
- No official website (this project)
- No confirmed birth date or photograph in our sources

## Do this in order

1. Ship this site on a real domain. Add the domain to Wikidata P856 and to the JSON-LD `url`.
2. Run `wikidata-quickstatements.qs` while logged into Wikidata.
3. Verify Person schema with Google's Rich Results Test.
4. Add the domain to Google Search Console and request indexing.
5. If a panel appears, claim it with [Google's knowledge-panel tools](https://support.google.com/knowledgepanel/answer/7534842).
6. Photographs: a Wikimedia Commons portrait (free license) helps more than a site-only image.

## Do not

- Clone Google's search chrome on the public site (this site is teletext on purpose).
- Create an English Wikipedia article from the subject's own team without following Wikipedia's conflict-of-interest rules. Independent editors with The Hindu / Akademi sources can do that later.
- Put birth date, email, or a real photograph into schema until the author supplies them.
