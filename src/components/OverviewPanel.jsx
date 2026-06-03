import { Icon } from './Icon.jsx';

export function OverviewPanel({ retailer }) {
  return (
    <section className="panel-body">
      <h2 className="panel-title">Overview</h2>

      <div className="notion-callout info-callout">
        <span className="notion-callout-icon" aria-hidden="true">💡</span>
        <div className="notion-callout-content">
          The Competition is on! Back-to-school season is right around the corner so it’s time to get up-to-speed on the latest PCs from leading OEMs. Complete Trainings to build your product expertise, take on challenges to prove your skills, and if eligible*, earn entries into Drawings packed with exciting prizes.
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
            Each week during the Promotion Period, Trainings will be posted to the Training landing page. Pass the featured Trainings within the week they are posted to earn entries into the Weekly Prize Drawings.
          </p>
          <p>
            Complete all featured Trainings during the Promotion Period to be entered into the Individual Prize Drawing!
          </p>
          <p>
            Track your Training Completion(s) on the <a href="#trainings" className="blue-underlined">Trainings page</a>.
          </p>
        </article>

        <article className="content-card">
          <h4 className="content-heading">
            <Icon name="star" className="content-heading-icon" />
            Individual Challenges
          </h4>
          <p>
            During the Promotion, there are 7 Individual Challenges waiting to be conquered. Complete each one to earn additional entries into the Individual Grand Prize Drawing!*
          </p>
        </article>

        {retailer === 'bestbuy' && (
          <article className="content-card">
            <h4 className="content-heading">
              <Icon name="store" className="content-heading-icon" />
              Store Challenges
            </h4>
            <p>
              During the Promotion, there are two (2) Challenges that work together to put your store in the running for the Store Grand Prize Drawing*:
            </p>
            <ul className="overview-bullet-list">
              <li>Get 4 or more teammates from your store actively participating in the Promotion.</li>
              <li>Reach a combined total of 72 unique featured Intel PC Champion Training Completions across your store.</li>
            </ul>
            <p>
              Succeed at both and your Store earns its entry into the Store Grand Prize Drawing.
            </p>
            <p>
              Track your Challenge Completions on the <a href="#challenges" className="blue-underlined">Challenge page</a>.
            </p>
          </article>
        )}
      </section>

      <h3 className="section-title">Weekly Drawings</h3>
      <article className="overview-info-block">
        <p>
          Complete the featured Weekly Trainings within the week they are posted to earn Drawing entries.
        </p>
        <p>
          For each Weekly Training you successfully complete, you will earn one (1) entry into that week’s Drawing. Entries earned in a particular week apply only to that week’s Drawing and do not carry over to any subsequent week(s).
        </p>
        <p>
          Complete the featured Weekly Trainings by <strong>10:59am the following Wednesday</strong> to be entered into the Drawing for the week.
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
            Intel PC Champions (participants) from eligible Retail Chains who successfully complete all 18 featured Weekly Trainings unlock access to the Individual Grand Prize Drawing, earning one (1) entry.
          </p>
          <p>
            After meeting the Training qualifications to unlock access to the Individual Grand Prize Drawing, each Individual Challenge successfully completed earns one (1) additional entry into the Individual Grand Prize Drawing. Submission of photo-based Individual Challenges only earns an entry once the submission is set to “Approved” status. If you complete an Individual Challenge before the Qualification Requirement is met you will be credited retroactively once the Training Qualification Requirement is satisfied.
          </p>
        </article>

        {retailer === 'bestbuy' && (
          <article className="content-card">
            <h4 className="content-heading">
              <Icon name="trophy" className="content-heading-icon" />
              Best Buy Store Grand Prize Drawing
            </h4>
            <p>
              At the end of the Promotion, qualifying Best Buy Stores will be entered into a Drawing. All Stores with a minimum of four (4) participants and a minimum total of 72 successful Training Completions have earned one (1) Drawing entry into the Store Grand Prize. Up to ten (10) winning Stores will be recognized with a plaque, breakroom snacks, and multiple days of catering.
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
