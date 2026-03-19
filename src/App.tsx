import { useState, useEffect, lazy, Suspense } from 'react';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { trackPageView } from './utils/analytics';
import { loadConsentPreferences } from './utils/consent';
import { captureUtmParams } from './utils/session';

const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Features = lazy(() => import('./pages/Features').then(m => ({ default: m.Features })));
const AIOracle = lazy(() => import('./pages/AIOracle').then(m => ({ default: m.AIOracle })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Affiliate = lazy(() => import('./pages/Affiliate').then(m => ({ default: m.Affiliate })));
const Testers = lazy(() => import('./pages/Testers').then(m => ({ default: m.Testers })));
const Integrations = lazy(() => import('./pages/Integrations').then(m => ({ default: m.Integrations })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Refunds = lazy(() => import('./pages/Refunds').then(m => ({ default: m.Refunds })));
const Disclaimer = lazy(() => import('./pages/Disclaimer').then(m => ({ default: m.Disclaimer })));
const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
const Free = lazy(() => import('./pages/Free').then(m => ({ default: m.Free })));
const Learn = lazy(() => import('./pages/Learn').then(m => ({ default: m.Learn })));
const Docs = lazy(() => import('./pages/Docs').then(m => ({ default: m.Docs })));
const Strategies = lazy(() => import('./pages/Strategies').then(m => ({ default: m.Strategies })));
const Videos = lazy(() => import('./pages/Videos').then(m => ({ default: m.Videos })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const Downloads = lazy(() => import('./pages/Downloads').then(m => ({ default: m.Downloads })));

type Page = 'home' | 'pricing' | 'features' | 'ai-oracle' | 'about' | 'contact' | 'affiliate' | 'testers' | 'integrations' | 'terms' | 'privacy' | 'refunds' | 'disclaimer' | 'success' | 'free' | 'learn' | 'docs' | 'strategies' | 'videos' | 'blog' | 'downloads';

const validPages: Page[] = ['home', 'pricing', 'features', 'ai-oracle', 'about', 'contact', 'affiliate', 'testers', 'integrations', 'terms', 'privacy', 'refunds', 'disclaimer', 'success', 'free', 'learn', 'docs', 'strategies', 'videos', 'blog', 'downloads'];

function App() {
  const getPageFromHash = (hash: string): Page => {
    const pageName = hash.split('?')[0].split('/')[0];
    return validPages.includes(pageName as Page) ? (pageName as Page) : 'home';
  };

  const [currentHash, setCurrentHash] = useState<string>(window.location.hash.slice(1) || 'home');
  const currentPage = getPageFromHash(currentHash);

  const handleNavigate = (page: string) => {
    const validPage = page.split('/')[0] as Page;
    let newHash: string;
    if (validPage === 'learn' || validPage === 'docs' || validPage === 'strategies' || validPage === 'videos' || validPage === 'blog') {
      const subpath = page.split('/').slice(1).join('/');
      newHash = `${validPage}${subpath ? '/' + subpath : ''}`;
    } else {
      newHash = page;
    }
    window.location.hash = newHash;
    setCurrentHash(newHash);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    captureUtmParams();
    loadConsentPreferences();
  }, []);

  useEffect(() => {
    const promoteKitId = import.meta.env.VITE_PROMOTEKIT_ID;
    if (promoteKitId) {
      const script = document.createElement('script');
      script.src = 'https://cdn.promotekit.com/promotekit.js';
      script.async = true;
      script.setAttribute('data-promotekit', promoteKitId);
      document.body.appendChild(script);
    }
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

    switch (currentPage) {
      case 'pricing':
        return <Pricing />;
      case 'features':
        return <Features />;
      case 'ai-oracle':
        return <AIOracle />;
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
      case 'free':
        return <Free />;
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
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-pulse text-gray-400">Loading...</div>
          </div>
        }>
          {renderPage()}
        </Suspense>
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
