import CircuitBackground from './CircuitBackground.jsx';
import heroLogo from '../../assets_tab/logo/logo_2026 (1).png';

export function Hero({ retailer, onRetailerChange }) {
  return (
    <header className="hero-panel">
      <span className="panel-screw panel-screw-tl" />
      <span className="panel-screw panel-screw-tr" />
      <div className="hero-plasma-layer" aria-hidden="true">
        <CircuitBackground />
      </div>
      <div className="hero-gridline" />
      <div className="hero-vignette" />
      <div className="hero-logo-stage">
        <img className="hero-logo" src={heroLogo} alt="PC Champions 2026 logo" />
      </div>

      <div className="retailer-selector-container">
        <span className="selector-label">Access Mode</span>
        <div className="retailer-selector">
          <button 
            type="button" 
            className={`selector-btn ${retailer === 'bestbuy' ? 'active' : ''}`}
            onClick={() => onRetailerChange('bestbuy')}
          >
            Best Buy USA
          </button>
          <button 
            type="button" 
            className={`selector-btn ${retailer === 'other' ? 'active' : ''}`}
            onClick={() => onRetailerChange('other')}
          >
            Other Retailer
          </button>
        </div>
      </div>
    </header>
  );
}
