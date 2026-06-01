import { useState } from 'react';
import { Icon } from './Icon.jsx';

const WEEKLY_PRIZES = {
  1: {
    image: '/prize/IPC Prizes_Week 1.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between."
      },
      {
        name: 'Canoly C16 Cold Press Juicer',
        winners: '5 winners',
        desc: 'Slow-press juicer with quiet operation and maximum nutrient retention. Fresh juice at home, on tap.'
      },
      {
        name: 'Arctic Zone Titan Deep Freeze Rolling Cooler',
        winners: '5 winners',
        desc: 'A rolling cooler with deep-freeze insulation that keeps ice cold for days. Built for tailgates, beach days, and backyard hangs.'
      },
      {
        name: 'Kasa Smart Plug Mini 15A',
        winners: '5 winners',
        desc: 'Turn any outlet into a smart outlet. Control devices from your phone — works with Alexa and Google Home.'
      }
    ]
  },
  2: {
    image: '/prize/IPC Prizes_Week 2.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between."
      },
      {
        name: 'Sole Swagger 5 Custom Intel-Branded E-Scooter',
        winners: '5 winners',
        desc: 'Custom Intel-branded electric scooter with the range and power for the daily commute or weekend cruise.'
      },
      {
        name: 'Bestier Music Sync RGB Corner Computer Desk with Monitor Stand',
        winners: '5 winners',
        desc: 'L-shaped corner gaming desk with music-sync RGB lighting and a built-in monitor stand. Level up your setup.'
      },
      {
        name: 'Indoor Hydroponics Growing System',
        winners: '5 winners',
        desc: 'Grow fresh herbs and vegetables year-round, right in your kitchen. Soil-free, water-efficient, easier than you\'d think.'
      }
    ]
  },
  3: {
    image: '/prize/IPC Prizes_Week 3.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between."
      },
      {
        name: 'EGO POWER+ Cordless Electric Leaf Blower',
        winners: '5 winners',
        desc: '670 CFM of cordless power with a 56V battery and charger included. Clear the yard faster, quieter, and gas-free.'
      },
      {
        name: 'BlendJet 2 Personal Blender',
        winners: '5 winners',
        desc: 'Take smoothies anywhere. Rechargeable, USB-powered, and powerful enough to crush ice.'
      }
    ]
  },
  4: {
    image: '/prize/IPC Prizes_Week 4.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between"
      },
      {
        name: 'SteelSeries Arctis Nova Pro White Gaming Headset',
        winners: '5 winners',
        desc: 'Premium wired gaming headset with high-res audio, active noise cancellation, and a retractable mic. Hear every detail.'
      },
      {
        name: 'Logitech C930e Business Webcam',
        winners: '5 winners',
        desc: '1080p HD webcam with a wide-angle lens. Built for video calls that actually look good.'
      }
    ]
  },
  5: {
    image: '/prize/IPC Prizes_Week 5.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between."
      },
      {
        name: 'SanDisk Extreme 2TB Portable SSD',
        winners: '5 winners',
        desc: 'Rugged, palm-sized SSD with 2TB of storage and blazing-fast read speeds. Take your files anywhere.'
      }
    ]
  },
  6: {
    image: '/prize/IPC Prizes_Week 6.png',
    prizes: [
      {
        name: 'Intel® Core™ Ultra 9 Processor 285K',
        winners: '5 winners',
        desc: "Power up your build with Intel's flagship desktop processor. 24 cores, up to 3.70 GHz, with AI-accelerated performance for gamers, creators, and everything in between."
      },
      {
        name: 'Epson PowerLite 1781W Wireless WXGA LCD Projector',
        winners: '5 winners',
        desc: 'Wide-format LCD projector with built-in wireless connectivity. Movie nights, presentations, and everything in between.'
      }
    ]
  }
};

const WEEKLY_DRAWING_LABELS = {
  1: 'Week 1 Drawing',
  2: 'Week 2 Drawing',
  3: 'Week 3 Drawing',
  4: 'Week 4 Drawing',
  5: 'Week 5 Drawing',
  6: 'Week 6 Drawing'
};

export function PrizesPanel({ retailer }) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const weekData = WEEKLY_PRIZES[selectedWeek];

  return (
    <section className="panel-body">
      <h2 className="panel-title">Prizes</h2>

      <div className="notion-callout info-callout">
        <span className="notion-callout-icon" aria-hidden="true">🎁</span>
        <div className="notion-callout-content">
          Exciting Rewards are up for grabs on your journey to become an Intel PC Champion! Weekly Drawings, Individual Grand Prize bundles, and Store Grand Prize celebrations!
        </div>
      </div>

      <h3 className="section-title">Weekly Drawings</h3>
      <article className="prizes-section-card">
        <p className="prizes-section-intro">
          Successfully complete the featured trainings in the week they are posted to earn entries into the Weekly Drawings.
        </p>

        {/* Weekly Sub-Tabs */}
        <div className="weekly-tabs">
          {[1, 2, 3, 4, 5, 6].map((weekNum) => (
            <button
              key={weekNum}
              type="button"
              className={`weekly-tab-btn ${selectedWeek === weekNum ? 'active' : ''}`}
              onClick={() => setSelectedWeek(weekNum)}
              aria-label={WEEKLY_DRAWING_LABELS[weekNum]}
            >
              Week {weekNum}
            </button>
          ))}
        </div>

        {/* Weekly Draw View */}
        <div className="weekly-draw-showcase">
          <div className="weekly-draw-visual">
            <div className="prize-image-wrapper">
              <img
                src={weekData.image}
                alt={`Week ${selectedWeek} Prizes`}
                className="prize-week-image"
                key={selectedWeek}
              />
              <div className="image-overlay-glow" />
            </div>
          </div>

          <div className="weekly-draw-list">
            <h4 className="weekly-draw-heading">{WEEKLY_DRAWING_LABELS[selectedWeek]}</h4>
            <div className="weekly-prize-grid">
              {weekData.prizes.map((prize, idx) => (
                <div className="weekly-prize-card" key={idx}>
                  <div className="prize-card-header">
                    <strong className="prize-name">{prize.name}</strong>
                    <span className="prize-tag">{prize.winners}</span>
                  </div>
                  <p className="prize-desc">{prize.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <h3 className="section-title">Individual Grand Prize</h3>
      <article className="prizes-section-card">
        <p className="prizes-section-intro">
          Complete all featured trainings within the promotion period to be automatically entered to win an Individual Grand Prize bundle. Complete Individual Challenges to earn additional entries. <em className="eligibility-note">*Please see Terms & Conditions for eligibility</em>
        </p>

        <div className="grand-prize-showcase">
          <div className="grand-prize-header">
            <h4 className="grand-prize-title">
              <Icon name="trophy" className="grand-prize-icon" />
              Intel PC Champion Bundle
            </h4>
            <p className="grand-prize-subtitle">
              Fifteen (15) prize packages featuring a premium Series 3 Intel® Core™ Ultra-powered laptop and a SteelSeries gaming kits are up for grabs!
            </p>
          </div>

          <div className="grand-prize-layout">
            <div className="grand-prize-visual">
              <div className="prize-image-wrapper">
                <img
                  src="/prize/IPC Prize_Grand 1.png"
                  alt="Intel PC Champion Grand Prize Bundle"
                  className="prize-grand-image"
                  loading="lazy"
                />
                <div className="image-overlay-glow" />
              </div>
            </div>

            <div className="grand-prize-details">
              <h5 className="details-list-title">Bundle Includes</h5>
              <ul className="grand-prize-list">
                <li>
                  <strong className="bullet-strong">Series 3 Intel® Core™ Ultra-powered laptop</strong>
                </li>
                <li>
                  <strong className="bullet-strong">SteelSeries Arctis Nova Pro Wireless Headset (Black)</strong>
                  <span className="bullet-desc">Premium wireless gaming headset with active noise cancellation, Dual-battery system, retractable mic, and multi-platform support</span>
                </li>
                <li>
                  <strong className="bullet-strong">SteelSeries Aerox 5 Gaming Mouse</strong>
                  <span className="bullet-desc">Ultra-lightweight wired gaming mouse with 9 programmable buttons, optical sensor, and USB-C connectivity</span>
                </li>
                <li>
                  <strong className="bullet-strong">SteelSeries QcK Prism Mouse Pad</strong>
                  <span className="bullet-desc">RGB-lit gaming surface, Optimized for precision and speed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {retailer === 'bestbuy' && (
        <>
          <h3 className="section-title">Store Grand Prize</h3>
          <article className="prizes-section-card store-grand-prize-card">
            <h4 className="store-grand-prize-heading">
              <Icon name="store" className="store-grand-prize-icon" />
              Store Grand Prize Drawing
            </h4>
            <p className="store-grand-prize-desc">
              At the end of the promotion, qualifying Best Buy stores we will be entered into a Drawing. All stores with a minimum of four (4) participants and a minimum total of 72 successful training completions will have earned one (1) Drawing entry into the Store Grand Prize. Up to 10 winning Stores will be recognized with a store recognition plaque, individual recognition certificates, breakroom snacks, and multiple days of catering.
            </p>
          </article>
        </>
      )}

      <section className="content-actions-footer">
        <p className="terms-footnote">
          *View <a href="#" className="blue-underlined terms-link">Terms and Conditions</a>.
        </p>
      </section>
    </section>
  );
}
