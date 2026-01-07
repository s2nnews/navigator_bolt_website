import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Affiliate } from './pages/Affiliate';
import { Testers } from './pages/Testers';
import { Integrations } from './pages/Integrations';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Refunds } from './pages/Refunds';
import { Disclaimer } from './pages/Disclaimer';
import { Success } from './pages/Success';
import { Trial } from './pages/Trial';
import { Learn } from './pages/Learn';
import { Docs } from './pages/Docs';
import { Strategies } from './pages/Strategies';
import { Videos } from './pages/Videos';
import { Blog } from './pages/Blog';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { trackPageView } from './utils/analytics';
import { loadConsentPreferences } from './utils/consent';

type Page = 'home' | 'pricing' | 'features' | 'about' | 'contact' | 'affiliate' | 'testers' | 'integrations' | 'terms' | 'privacy' | 'refunds' | 'disclaimer' | 'success' | 'trial' | 'learn' | 'docs' | 'strategies' | 'videos' | 'blog';

function App() {
  const getPageFromHash = (): Page => {
    const hash = window.location.hash.slice(1).split('?')[0].split('/')[0];
    const validPages: Page[] = ['home', 'pricing', 'features', 'about', 'contact', 'affiliate', 'testers', 'integrations', 'terms', 'privacy', 'refunds', 'disclaimer', 'success', 'trial', 'learn', 'docs', 'strategies', 'videos', 'blog'];
    return validPages.includes(hash as Page) ? (hash as Page) : 'home';
  };

  const handleNavigate = (page: string) => {
    const validPage = page.split('/')[0] as Page;
    if (validPage === 'learn' || validPage === 'docs' || validPage === 'strategies' || validPage === 'videos' || validPage === 'blog') {
      const subpath = page.split('/').slice(1).join('/');
      window.location.hash = `${validPage}${subpath ? '/' + subpath : ''}`;
      setCurrentPage(validPage);
    } else {
      window.location.hash = page;
      setCurrentPage(validPage);
    }
    window.scrollTo(0, 0);
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());

  useEffect(() => {
    loadConsentPreferences();
  }, []);

  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const hash = window.location.hash.slice(1);
    const [mainPage, ...subPaths] = hash.split('/');
    const fullPath = subPaths.join('/');

    switch (currentPage) {
      case 'pricing':
        return <Pricing />;
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'affiliate':
        return <Affiliate />;
      case 'testers':
        return <Testers />;
      case 'integrations':
        return <Integrations />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <Privacy />;
      case 'refunds':
        return <Refunds />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'success':
        return <Success />;
      case 'trial':
        return <Trial />;
      case 'learn':
        return <Learn key={hash} onNavigate={handleNavigate} initialPath={fullPath} />;
      case 'docs':
        return <Docs key={hash} onNavigate={handleNavigate} initialDoc={fullPath} />;
      case 'strategies':
        return <Strategies key={hash} onNavigate={handleNavigate} initialStrategy={fullPath} />;
      case 'videos':
        return <Videos key={hash} onNavigate={handleNavigate} selectedVideo={fullPath} />;
      case 'blog':
        return <Blog key={hash} onNavigate={handleNavigate} selectedPost={fullPath} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <CookieConsent />
    </div>
  );
}

export default App;
