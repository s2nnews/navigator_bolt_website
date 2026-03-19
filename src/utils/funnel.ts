import { supabase } from '../lib/supabase';
import { getSessionId, captureUtmParams } from './session';
import { getVariantId } from './experiments';

export type FunnelEvent =
  | 'landing_view'
  | 'free_cta_click'
  | 'free_form_submit_start'
  | 'free_form_submit_success'
  | 'download_click'
  | 'install_guide_view'
  | 'pricing_view'
  | 'upgrade_cta_click';

const EXPERIMENT_NAME = 'free_page_headline';

export async function trackFunnelEvent(
  eventName: FunnelEvent,
  page: string,
  metadata?: Record<string, unknown>
) {
  const sessionId = getSessionId();
  const utm = captureUtmParams();
  const variant = getVariantId(EXPERIMENT_NAME);

  try {
    await supabase.from('funnel_events').insert({
      session_id: sessionId,
      event_name: eventName,
      page,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_term: utm.utm_term,
      utm_content: utm.utm_content,
      referrer: utm.referrer,
      variant,
      metadata: metadata ?? null,
    });
  } catch {
    // silent fail — analytics should never break UX
  }
}

export function getLeadAttribution() {
  const utm = captureUtmParams();
  const sessionId = getSessionId();
  const variant = getVariantId(EXPERIMENT_NAME);
  return { ...utm, session_id: sessionId, variant };
}
