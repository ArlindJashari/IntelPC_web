import { useState } from 'react';
import { Hero } from './components/Hero.jsx';
import { InfoBar } from './components/InfoBar.jsx';
import { Tabs } from './components/Tabs.jsx';
import { OverviewPanel } from './components/OverviewPanel.jsx';
import { TrainingsPanel } from './components/TrainingsPanel.jsx';
import { PrizesPanel } from './components/PrizesPanel.jsx';
import { ChallengesPanel } from './components/ChallengesPanel.jsx';
import { PhotoWallPanel } from './components/PhotoWallPanel.jsx';
import { UploadModal } from './components/UploadModal.jsx';
import ShapeGrid from './components/ShapeGrid.jsx';

function ActivePanel({ activeTab, onUpload }) {
  switch (activeTab) {
    case 'overview':
      return <OverviewPanel />;
    case 'trainings':
      return <TrainingsPanel />;
    case 'prizes':
      return <PrizesPanel />;
    case 'photowall':
      return <PhotoWallPanel />;
    case 'challenges':
    default:
      return <ChallengesPanel onUpload={onUpload} />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('challenges');
  const [uploadChallenge, setUploadChallenge] = useState(null);

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

        <Hero />
        <InfoBar />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ActivePanel activeTab={activeTab} onUpload={setUploadChallenge} />
      </main>

      <UploadModal challengeName={uploadChallenge} onClose={() => setUploadChallenge(null)} />
    </div>
  );
}
