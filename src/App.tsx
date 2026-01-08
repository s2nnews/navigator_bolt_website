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
import { Downloads } from './pages/Downloads';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { trackPageView } from './utils/analytics';
import { loadConsentPreferences } from './utils/consent';

type Page = 'home' | 'pricing' | 'features' | 'about' | 'contact' | 'affiliate' | 'testers' | 'integrations' | 'terms' | 'privacy' | 'refunds' | 'disclaimer' | 'success' | 'trial' | 'learn' | 'docs' | 'strategies' | 'videos' | 'blog' | 'downloads';

const validPages: Page[] = ['home', 'pricing', 'features', 'about', 'contact', 'affiliate', 'testers', 'integrations', 'terms', 'privacy', 'refunds', 'disclaimer', 'success', 'trial', 'learn', 'docs', 'strategies', 'videos', 'blog', 'downloads'];

function App() {
  const getPageFromHash = (hash: string): Page => {
    const pageName = hash.split('?')[0].split('/')[0];
    return validPages.includes(pageName as Page) ? (pageName as Page) : 'home';
  };

  const [currentHash, setCurrentHash] = useState<string>(window.location.hash.slice(1) || 'home');
  const currentPage = getPageFromHash(currentHash);

  const handleNavigate = (page: string) => {
    console.log('handleNavigate called with:', page);
    const validPage = page.split('/')[0] as Page;
    let newHash: string;
    if (validPage === 'learn' || validPage === 'docs' || validPage === 'strategies' || validPage === 'videos' || validPage === 'blog') {
      const subpath = page.split('/').slice(1).join('/');
      newHash = `${validPage}${subpath ? '/' + subpath : ''}`;
      console.log('Setting hash to:', newHash, 'subpath:', subpath);
    } else {
      newHash = page;
    }
    window.location.hash = newHash;
    setCurrentHash(newHash);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    loadConsentPreferences();
  }, []);

  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentHash(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const [mainPage, ...subPaths] = currentHash.split('/');
    const fullPath = subPaths.join('/');
    console.log('renderPage - currentHash:', currentHash, 'mainPage:', mainPage, 'fullPath:', fullPath, 'currentPage:', currentPage);

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
        return <Learn key={currentHash} onNavigate={handleNavigate} initialPath={fullPath} />;
      case 'docs':
        return <Docs key={currentHash} onNavigate={handleNavigate} initialDoc={fullPath} />;
      case 'strategies':
        return <Strategies key={currentHash} onNavigate={handleNavigate} initialStrategy={fullPath} />;
      case 'videos':
        return <Videos key={currentHash} onNavigate={handleNavigate} selectedVideo={fullPath} />;
      case 'blog':
        return <Blog key={currentHash} onNavigate={handleNavigate} selectedPost={fullPath} />;
      case 'downloads':
        return <Downloads />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={(page) => {
        window.location.hash = page;
        setCurrentHash(page);
      }} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={(page) => {
        window.location.hash = page;
        setCurrentHash(page);
      }} />
      <CookieConsent />
    </div>
  );
}

export default App;
