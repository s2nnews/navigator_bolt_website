import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('Analytics event tracked:', eventName, eventParams);
  } else {
    console.warn('gtag not available, event not tracked:', eventName);
  }
};

export const pushToDataLayer = (data: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
    console.log('DataLayer event pushed:', data);
  } else {
    console.warn('dataLayer not available');
  }
};

export const trackPageView = async (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.hash,
  });

  try {
    await supabase.from('page_views').insert({
      page_name: pageName,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null,
    });
  } catch (error) {
    console.error('Failed to track page view in database:', error);
  }
};

export const trackCheckoutInitiated = (plan: string, price: string) => {
  const value = parseFloat(price.replace(/[^0-9.]/g, ''));

  trackEvent('begin_checkout', {
    currency: 'USD',
    value: value,
    items: [
      {
        item_id: plan,
        item_name: plan,
        price: value,
        quantity: 1,
      },
    ],
  });

  pushToDataLayer({
    event: 'checkout_initiated',
    plan_name: plan,
    plan_price: value,
    currency: 'USD',
  });
};

export const trackFreeStarted = () => {
  trackEvent('free_started', {
    event_category: 'engagement',
    event_label: 'Free Form Viewed',
  });

  pushToDataLayer({
    event: 'free_page_viewed',
    page_type: 'free_signup',
  });
};

export const trackFreeCompleted = (email: string) => {
  trackEvent('free_completed', {
    event_category: 'conversion',
    event_label: 'Free Signup Success',
  });

  trackEvent('generate_lead', {
    currency: 'USD',
    value: 990,
  });

  pushToDataLayer({
    event: 'free_signup',
    user_email: email,
    lead_value: 990,
    conversion_type: 'free',
  });

  pushToDataLayer({
    event: 's2n_free_created',
    user_email: email,
    source: 'navigator_website',
  });
};

export const trackPurchaseCompleted = (
  licenseType: string,
  email: string,
  value: number,
  licenseKey: string,
  sessionId: string
) => {
  trackEvent('purchase', {
    transaction_id: sessionId,
    value: value,
    currency: 'USD',
    items: [
      {
        item_id: licenseType,
        item_name: `S2N Navigator - ${licenseType}`,
        price: value,
        quantity: 1,
      },
    ],
  });

  pushToDataLayer({
    event: 'purchase_completed',
    transaction_id: sessionId,
    user_email: email,
    license_type: licenseType,
    license_key: licenseKey,
    value: value,
    currency: 'USD',
  });

  pushToDataLayer({
    event: 'conversion',
    conversion_type: 'paid_subscription',
    conversion_value: value,
    license_type: licenseType,
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', {
    event_category: 'engagement',
    event_label: formName,
  });

  pushToDataLayer({
    event: 'form_submitted',
    form_name: formName,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location,
  });

  pushToDataLayer({
    event: 'button_clicked',
    button_name: buttonName,
    button_location: location,
  });
};
