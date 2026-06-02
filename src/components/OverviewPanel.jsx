import { Icon } from './Icon.jsx';

export function OverviewPanel({ retailer }) {
  return (
    <section className="panel-body">
      <h2 className="panel-title">Overview</h2>

      <div className="notion-callout info-callout">
        <span className="notion-callout-icon" aria-hidden="true">💡</span>
        <div className="notion-callout-content">
          The competition is on! Back-to-school season right around the corner so it's time to get up to speed on the latest PCs from leading OEM. Complete trainings to build your product expertise, take on challenges to prove your skills, and if eligible*, earn entries into Drawings packed with exciting rewards.
        </div>
      </div>

      <h3 className="section-title">How to Participate</h3>
      <section className="content-grid">
        <article className="content-card">
          <h4 className="content-heading">
            <Icon name="checkBox" className="content-heading-icon" />
            Take Trainings, Complete Challenges, and Earn Drawing Entries
          </h4>
          <p>
            Each week during the promotion period trainings will be posted to the Trainings page.
            Pass the featured trainings within the week they are posted to earn entries into the Weekly Prize Drawings.
          </p>
          <p>
            Complete all featured trainings during the promotion period to be entered into the Individual Grand Prize Drawing!
          </p>
          <p>
            Track your training completion on the <a href="#trainings" className="blue-underlined">Trainings page</a>.
          </p>
        </article>

        <article className="content-card">
          <h4 className="content-heading">
            <Icon name="star" className="content-heading-icon" />
            Individual Challenges
          </h4>
          <p>
            During the promotion, there are 7 Individual Challenges waiting to be conquered. Complete each one to earn additional entries into the Individual Grand Prize Drawing!*
          </p>
        </article>

        {retailer === 'bestbuy' && (
          <article className="content-card">
            <h4 className="content-heading">
              <Icon name="store" className="content-heading-icon" />
              Store Challenges
            </h4>
            <p>
              During the promotion, there are 2 Store Challenges that work together to put your store in the running for the Store Grand Prize Drawing*:
            </p>
            <ul className="overview-bullet-list">
              <li>Get 4 or more teammates from your store actively participating in the promotion.</li>
              <li>Reach a combined total of 72 unique featured Intel PC Champion training completions across your store.</li>
            </ul>
            <p>
              Succeed at both and your store earns its entry into the Store Grand Prize Drawing.
            </p>
            <p>
              Track your Challenge completion on the <a href="#challenges" className="blue-underlined">Challenges page</a>.
            </p>
          </article>
        )}
      </section>

      <h3 className="section-title">Weekly Drawings</h3>
      <article className="overview-info-block">
        <p>
          Complete the featured weekly trainings within the week they are posted to earn drawing entries.
        </p>
        <p>
          For each Weekly Training you successfully complete you will earn one (1) entry into that week’s Drawing. Entries earned in a particular week apply only to that week’s Drawing and do not carry over to any subsequent weeks (if any).
        </p>
        <p>
          Complete the feature weekly trainings by <strong>10:59am on the following Wednesday</strong> to be entered into the drawing for the week.
        </p>

        <div className="prize-image-wrapper">
          <img 
            src="/prize/IPC Prizes Overview.png" 
            alt="Intel PC Champions Prizes Overview" 
            className="prize-overview-image" 
            loading="lazy"
          />
          <div className="image-overlay-glow" />
        </div>
      </article>

      <h3 className="section-title">Grand Prize Drawings</h3>
      <section className="content-grid">
        <article className="content-card">
          <h4 className="content-heading">
            <Icon name="trophy" className="content-heading-icon" />
            Individual Grand Prize Drawing
          </h4>
          <p>
            Intel PC Champions (participant) from eligible accounts who successfully completed all 18 featured weekly trainings will unlock access to the Individual Grand Prize Drawing, earning one (1) entry.
          </p>
          <p>
            After meeting the training qualification to unlock access to the Grand Prize Drawing, each Individual Challenge you successfully complete will earn you one (1) additional entry into the Individual Grand Prize Drawing. Submission of photo-based Individual Challenges only earn an entry once the submission is set to "Approved" status. If you complete an Individual Challenge before the Qualification Requirement is met you will be credited retroactively once the training Qualification Requirement is satisfied.
          </p>
        </article>

        {retailer === 'bestbuy' && (
          <article className="content-card">
            <h4 className="content-heading">
              <Icon name="trophy" className="content-heading-icon" />
              Best Buy Store Grand Prize Drawing
            </h4>
            <p>
              At the end of the promotion, qualifying Best Buy stores we will be entered into a Drawing. All stores with a minimum of four (4) participants and a minimum total of 72 successful training completions have earned one (1) Drawing entry into the Store Grand Prize. Up to 10 winning Stores will be recognized with a plaque, breakroom snacks, and multiple days of catering.
            </p>
            <p>
              Visit the <a href="#prizes" className="blue-underlined">Prizes page</a> for full details!
            </p>
          </article>
        )}
      </section>

    </section>
  );
}
