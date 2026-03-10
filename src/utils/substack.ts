export interface SubstackPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author: string;
  image: string | null;
  excerpt: string;
}

export interface SubstackFeed {
  posts: SubstackPost[];
  notesUrl: string;
  substackUrl: string;
  fetchedAt: string;
}

let cachedFeed: SubstackFeed | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 30 * 60 * 1000;

export async function fetchSubstackFeed(): Promise<SubstackFeed> {
  const now = Date.now();
  if (cachedFeed && now - cacheTimestamp < CACHE_DURATION) {
    return cachedFeed;
  }

  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-substack-feed`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Substack feed');
  }

  const data: SubstackFeed = await response.json();
  cachedFeed = data;
  cacheTimestamp = now;
  return data;
}

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
