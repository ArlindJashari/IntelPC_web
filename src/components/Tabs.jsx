import { tabs } from '../data/campaignData.js';
import tabOverview from '../../assets_tab/a_clean_graphic_design_scene_a_dark_navy_blue_bac_1_batch_1_clean.png';
import tabTrainings from '../../assets_tab/a_clean_graphic_typography_image_a_wide_rectangul_2_batch_2_clean.png';
import tabPrizes from '../../assets_tab/a_clean_graphic_design_scene_a_dark_navy_blue_bac_3_batch_3_clean.png';
import tabChallenges from '../../assets_tab/a_clean_graphic_design_image_overall_scene_is_a_w_4_batch_4_clean.png';
import tabPhotoWall from '../../assets_tab/a_clean_graphic_logo_style_image_overall_scene_5_batch_5_clean.png';

const TAB_IMAGES = {
  overview: tabOverview,
  trainings: tabTrainings,
  prizes: tabPrizes,
  challenges: tabChallenges,
  photowall: tabPhotoWall
};

export function Tabs({ activeTab, setActiveTab }) {
  return (
    <nav className="tabs" aria-label="IPC 2026 sections">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          aria-pressed={activeTab === tab.id}
          aria-label={tab.label}
        >
          <img className="tab-image" src={TAB_IMAGES[tab.id]} alt="" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}
