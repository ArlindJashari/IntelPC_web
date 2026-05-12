import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

export function MobileSectionSwitcher({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const menuToggleRef = useRef(null);
  const activeLabel = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.label || 'Sections',
    [activeTab]
  );

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event) => {
      const panel = menuPanelRef.current;
      const toggle = menuToggleRef.current;
      const target = event.target;

      if (panel && panel.contains(target)) return;
      if (toggle && toggle.contains(target)) return;
      setMenuOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setMenuOpen(false);
  };

  const menuOverlay = (
    <div id="hero-mobile-menu" className={`hero-menu-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
      <div className="hero-menu-modal" ref={menuPanelRef}>
        <div className="hero-menu-modal-head">
          <span>{activeLabel}</span>
          <button type="button" className="hero-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="hero-mobile-tabs" aria-label="Mobile sections">
          {tabs.map((tab) => (
            <button
              key={`hero-tab-${tab.id}`}
              className={`hero-mobile-tab ${activeTab === tab.id ? 'active' : ''}`}
              type="button"
              onClick={() => selectTab(tab.id)}
              aria-label={tab.label}
            >
              <span className="hero-mobile-tab-surface">
                <img className="tab-image" src={TAB_IMAGES[tab.id]} alt="" aria-hidden="true" />
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <div className="mobile-section-switcher">
        <button
          ref={menuToggleRef}
          type="button"
          className={`hero-menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="hero-mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span>{activeLabel}</span>
          <span aria-hidden="true">☰</span>
        </button>
      </div>
      {createPortal(menuOverlay, document.body)}
    </>
  );
}
