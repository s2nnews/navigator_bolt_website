declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export const loadConsentPreferences = () => {
  const consent = localStorage.getItem('cookie_consent');

  if (!consent) {
    console.log('No consent preference found, waiting for user choice');
    return;
  }

  const updateConsent = () => {
    if (typeof window.gtag !== 'function') {
      console.warn('gtag not loaded yet, retrying...');
      return;
    }

    if (consent === 'all') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
      console.log('Consent loaded: All cookies granted');
    } else if (consent === 'necessary' || consent === 'rejected') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      console.log('Consent loaded: Only necessary cookies');
    }
  };

  if (typeof window.gtag === 'function') {
    updateConsent();
  } else {
    setTimeout(updateConsent, 100);
  }
};

export const resetConsent = () => {
  localStorage.removeItem('cookie_consent');
  window.location.reload();
};
