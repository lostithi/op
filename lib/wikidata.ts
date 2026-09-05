import { PERSON } from './suresh';

export type WikidataSnapshot = {
  id: string;
  url: string;
  englishLabel: string | null;
  malayalamLabel: string | null;
  englishDescription: string | null;
  malayalamWiki: string | null;
  claimCount: number;
  claimIds: string[];
  fetchedAt: string;
  error?: string;
};

type Entity = {
  id: string;
  labels?: Record<string, { value: string }>;
  descriptions?: Record<string, { value: string }>;
  claims?: Record<string, unknown[]>;
  sitelinks?: Record<string, { title: string; url?: string }>;
};

export async function fetchWikidataPerson(): Promise<WikidataSnapshot> {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${PERSON.wikidataId}.json`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
        'User-Agent': 'OPSureshOfficialSite/1.0 (https://www.wikidata.org/wiki/Q110120248)',
      },
    });
    if (!res.ok) {
      return emptySnapshot(`Wikidata returned ${res.status}`);
    }
    const data = (await res.json()) as { entities?: Record<string, Entity> };
    const entity = data.entities?.[PERSON.wikidataId];
    if (!entity) return emptySnapshot('Entity missing from response');
    const claims = entity.claims ?? {};
    const ml = entity.sitelinks?.mlwiki;
    return {
      id: entity.id,
      url: PERSON.wikidata,
      englishLabel: entity.labels?.en?.value ?? null,
      malayalamLabel: entity.labels?.ml?.value ?? null,
      englishDescription: entity.descriptions?.en?.value ?? null,
      malayalamWiki: ml
        ? `https://ml.wikipedia.org/wiki/${encodeURIComponent(ml.title)}`
        : PERSON.wikipediaMl,
      claimCount: Object.values(claims).reduce((n, arr) => n + arr.length, 0),
      claimIds: Object.keys(claims),
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    return emptySnapshot(err instanceof Error ? err.message : 'Network error');
  }
}

function emptySnapshot(error: string): WikidataSnapshot {
  return {
    id: PERSON.wikidataId,
    url: PERSON.wikidata,
    englishLabel: null,
    malayalamLabel: null,
    englishDescription: null,
    malayalamWiki: PERSON.wikipediaMl,
    claimCount: 0,
    claimIds: [],
    fetchedAt: new Date().toISOString(),
    error,
  };
}
