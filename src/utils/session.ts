const SESSION_KEY = 's2n_session_id';
const UTM_KEY = 's2n_utm';

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = generateId();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export interface UtmParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  referrer: string | null;
}

export function captureUtmParams(): UtmParams {
  const stored = sessionStorage.getItem(UTM_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  const url = new URL(window.location.href);
  const params: UtmParams = {
    utm_source: url.searchParams.get('utm_source'),
    utm_medium: url.searchParams.get('utm_medium'),
    utm_campaign: url.searchParams.get('utm_campaign'),
    utm_term: url.searchParams.get('utm_term'),
    utm_content: url.searchParams.get('utm_content'),
    referrer: document.referrer || null,
  };

  sessionStorage.setItem(UTM_KEY, JSON.stringify(params));
  return params;
}
