import { useEffect, useState } from 'react';
import { Hero } from './components/Hero.jsx';
import { MobileSectionSwitcher } from './components/MobileSectionSwitcher.jsx';
import { InfoBar } from './components/InfoBar.jsx';
import { Tabs } from './components/Tabs.jsx';
import { OverviewPanel } from './components/OverviewPanel.jsx';
import { TrainingsPanel } from './components/TrainingsPanel.jsx';
import { PrizesPanel } from './components/PrizesPanel.jsx';
import { ChallengesPanel } from './components/ChallengesPanel.jsx';
import { PhotoWallPanel } from './components/PhotoWallPanel.jsx';
import { UploadModal } from './components/UploadModal.jsx';
import { PushNotifications } from './components/PushNotifications.jsx';
import { TermsPage } from './components/TermsPage.jsx';
import { Icon } from './components/Icon.jsx';
import ShapeGrid from './components/ShapeGrid.jsx';
import { tabs } from './data/campaignData.js';

const DEFAULT_TAB = 'challenges';
const TAB_IDS = new Set(tabs.map((tab) => tab.id));
const TERMS_PATH = '/terms';

function getTabFromHash() {
  const hashTab = window.location.hash.replace('#', '');
  return TAB_IDS.has(hashTab) ? hashTab : DEFAULT_TAB;
}

function getTermsSlugFromPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === TERMS_PATH) return '';
  if (path.startsWith(`${TERMS_PATH}/`)) {
    return path.slice(TERMS_PATH.length + 1).split('/')[0];
  }

  return null;
}

function ActivePanel({ activeTab, onUpload, retailer }) {
  switch (activeTab) {
    case 'overview':
      return <OverviewPanel retailer={retailer} />;
    case 'trainings':
      return <TrainingsPanel />;
    case 'prizes':
      return <PrizesPanel retailer={retailer} />;
    case 'photowall':
      return <PhotoWallPanel />;
    case 'challenges':
    default:
      return <ChallengesPanel onUpload={onUpload} retailer={retailer} />;
  }
}

export default function App() {
  const termsSlug = getTermsSlugFromPath();
  const [activeTab, setActiveTab] = useState(getTabFromHash);
  const [uploadChallenge, setUploadChallenge] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [retailer, setRetailer] = useState(() => {
    return localStorage.getItem('ipc_retailer') || 'bestbuy';
  });

  const handleRetailerChange = (newRetailer) => {
    setRetailer(newRetailer);
    localStorage.setItem('ipc_retailer', newRetailer);
  };

  useEffect(() => {
    const syncFromHash = () => {
      setActiveTab(getTabFromHash());
    };

    window.addEventListener('hashchange', syncFromHash);
    if (!window.location.hash || !TAB_IDS.has(window.location.hash.replace('#', ''))) {
      window.history.replaceState(null, '', `#${DEFAULT_TAB}`);
    }

    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const setActiveTabWithLink = (tabId) => {
    if (!TAB_IDS.has(tabId)) return;
    setActiveTab(tabId);
    if (window.location.hash !== `#${tabId}`) {
      window.location.hash = tabId;
    }
  };

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUploadSubmit = ({ challengeName, caption }) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const title = 'Submission Received';
    const message = caption
      ? `${challengeName} uploaded. Caption: "${caption}".`
      : `${challengeName} uploaded and sent for review.`;

    setNotifications((prev) => [...prev, { id, title, message, tone: 'success' }]);

    window.setTimeout(() => {
      dismissNotification(id);
    }, 4200);
  };

  if (termsSlug !== null) {
    return <TermsPage slug={termsSlug} />;
  }

  return (
    <div className="app-shell">
      <div className="app-shapegrid-bg" aria-hidden="true">
        <ShapeGrid
          speed={0.18}
          squareSize={22}
          direction="diagonal"
          borderColor="#3A3444"
          hoverFillColor="#1B1822"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <main className="page-chassis">
        <span className="page-screw screw-one" />
        <span className="page-screw screw-two" />
        <span className="page-screw screw-three" />
        <span className="page-screw screw-four" />

        <Hero retailer={retailer} onRetailerChange={handleRetailerChange} />
        <MobileSectionSwitcher activeTab={activeTab} setActiveTab={setActiveTabWithLink} />
        <InfoBar retailer={retailer} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTabWithLink} />
        <ActivePanel activeTab={activeTab} onUpload={setUploadChallenge} retailer={retailer} />
      </main>

      <footer className="site-footer">
        <a className="site-footer-link" href="/terms">
          <Icon name="star" className="site-footer-link-icon" />
          <span>Terms and Conditions</span>
        </a>
      </footer>

      <UploadModal
        challengeName={uploadChallenge}
        onClose={() => setUploadChallenge(null)}
        onSubmit={handleUploadSubmit}
      />
      <PushNotifications notifications={notifications} onDismiss={dismissNotification} />
    </div>
  );
}
