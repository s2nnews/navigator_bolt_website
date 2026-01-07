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

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.hash,
  });
};

export const trackCheckoutInitiated = (plan: string, price: string) => {
  trackEvent('begin_checkout', {
    currency: 'USD',
    value: parseFloat(price.replace(/[^0-9.]/g, '')),
    items: [
      {
        item_id: plan,
        item_name: plan,
        price: parseFloat(price.replace(/[^0-9.]/g, '')),
        quantity: 1,
      },
    ],
  });
};

export const trackTrialStarted = () => {
  trackEvent('trial_started', {
    event_category: 'engagement',
    event_label: 'Free Trial Form Viewed',
  });
};

export const trackTrialCompleted = (email: string) => {
  trackEvent('trial_completed', {
    event_category: 'conversion',
    event_label: 'Free Trial Signup Success',
  });

  trackEvent('generate_lead', {
    currency: 'USD',
    value: 990,
  });
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

export const trackTrialCreatedGTM = (email: string) => {
  pushToDataLayer({
    event: 's2n_trial_created',
    user_email: email,
    source: 'navigator_website',
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', {
    event_category: 'engagement',
    event_label: formName,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location,
  });
};
