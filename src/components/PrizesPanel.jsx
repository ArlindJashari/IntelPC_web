import { Icon } from './Icon.jsx';
import { Annotation } from './Annotation.jsx';

export function PrizesPanel() {
  return (
    <section className="panel-body">
      <h2 className="panel-title">Prizes</h2>

      <Annotation aria-label="Prizes introduction">
        <p>
          Tons of rewards are up for grabs on your journey to become an Intel PC Champion.
        </p>
      </Annotation>

      <h3 className="section-title">Weekly Drawings</h3>
      <section className="content-card">
        <h4 className="content-heading"><Icon name="calendar" className="content-heading-icon" />Weekly Drawing Pool</h4>
        <p>
          Complete trainings in the week they are posted to the promotion Trainings page to earn
          drawing entries into the Weekly Drawings.
        </p>
        <p className="content-copy">
          Current featured prize:
          <strong className="content-inline-strong"> Week 1 Drawing — Item Name Here (5 winners)</strong>
        </p>
        <p className="content-copy">Item Description.</p>
      </section>

      <h3 className="section-title">Individual Grand Prize</h3>
      <section className="content-card">
        <h4 className="content-heading"><Icon name="trophy" className="content-heading-icon" />Prize Name (5 winners)</h4>
        <p>
          Complete all promotional trainings within the promotion timeframe to be automatically entered to win.
        </p>
        <p>This includes the following:</p>
        <ul className="content-list">
          <li>Item Name Here</li>
          <li>Info Bullet 1</li>
          <li>Info Bullet 2</li>
        </ul>
      </section>

      <h3 className="section-title">Store Grand Prize</h3>
      <section className="content-card">
        <h4 className="content-heading"><Icon name="store" className="content-heading-icon" />Prize Name (5 winners)</h4>
        <p>
          Stores that complete the required promotion criteria within the promotion timeframe are
          automatically entered to win.
        </p>
        <p>This includes the following:</p>
        <ul className="content-list">
          <li>Item Name Here</li>
          <li>Info Bullet 1</li>
          <li>Info Bullet 2</li>
        </ul>
      </section>

      <section className="content-actions">
        <a href="#" className="panel-link"><Icon name="link" className="panel-link-icon" />View Terms and Conditions</a>
      </section>
    </section>
  );
}
