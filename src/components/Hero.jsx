import PlasmaWave from './PlasmaWave.jsx';
import heroLogo from '../../assets_tab/logo/logo_2026 (1).png';

export function Hero() {
  return (
    <header className="hero-panel">
      <span className="panel-screw panel-screw-tl" />
      <span className="panel-screw panel-screw-tr" />
      <div className="hero-plasma-layer" aria-hidden="true">
        <PlasmaWave
          colors={['#A923F1', '#1E1EFF']}
          speed1={0.05}
          speed2={0.05}
          focalLength={1.32}
          bend1={1.1}
          bend2={0.6}
          dir2={1}
          rotationDeg={0}
        />
      </div>
      <div className="hero-gridline" />
      <div className="hero-vignette" />
      <div className="hero-logo-stage">
        <img className="hero-logo" src={heroLogo} alt="PC Champions 2026 logo" />
      </div>
    </header>
  );
}
