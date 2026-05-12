import { Icon } from './Icon.jsx';
import { Annotation } from './Annotation.jsx';

export function OverviewPanel() {
  const weeklyDeadlines = [
    { week: 'Week 1', deadline: 'June 10 at 11 a.m. CT' },
    { week: 'Week 2', deadline: 'June 17 at 11 a.m. CT' },
    { week: 'Week 3', deadline: 'June 24 at 11 a.m. CT' },
    { week: 'Week 4', deadline: 'July 1 at 11 a.m. CT' },
    { week: 'Week 5', deadline: 'July 8 at 11 a.m. CT' },
    { week: 'Week 6', deadline: 'July 15 at 11 a.m. CT' }
  ];

  return (
    <section className="panel-body">
      <h2 className="panel-title">Overview</h2>

      <Annotation aria-label="Campaign summary">
        <p>
          <strong>How this promotion works</strong>{' '}
          You&apos;ve set out on an expedition into uncharted territory, where Rewards lie hidden.
          Use your knowledge to chart your path forward.
        </p>
        <p>Over six weeks, take trainings, complete challenges, and earn drawing entries.</p>
      </Annotation>

      <h3 className="section-title">How to Earn Entries</h3>
      <section className="content-grid">
        <article className="content-card">
          <h4 className="content-heading"><Icon name="checkBox" className="content-heading-icon" />Trainings</h4>
          <p>
            Each week, three promotion trainings are posted. Complete all three within the same
            week to be automatically entered into that week&apos;s Weekly Drawing.
          </p>
          <p>
            At the end of the promotion, participants who complete all promotional trainings at
            any time during the promotion timeframe are entered into the Individual Grand Prize Drawing.
          </p>
          <a href="#trainings" className="panel-link">Track training completion on the Trainings page</a>
        </article>

        <article className="content-card">
          <h4 className="content-heading"><Icon name="star" className="content-heading-icon" />Individual Challenges</h4>
          <p>
            During the promotion, there are 7 individual challenges to complete for additional
            participation opportunities.
          </p>
        </article>

        <article className="content-card">
          <h4 className="content-heading"><Icon name="store" className="content-heading-icon" />Store Challenges</h4>
          <p>
            During the promotion, there are 2 store challenges. Stores that complete both
            criteria are entered into the Store Grand Prize Drawing.
          </p>
          <a href="#challenges" className="panel-link">Track challenge completion on the Challenges page</a>
        </article>
      </section>

      <h3 className="section-title">Weekly Drawing Schedule</h3>
      <section className="timeline-list">
        {weeklyDeadlines.map((item) => (
          <article className="timeline-row" key={item.week}>
            <h4><Icon name="calendar" className="timeline-icon" />{item.week} Drawing</h4>
            <p>Complete the {item.week} trainings by {item.deadline} to be entered.</p>
          </article>
        ))}
      </section>

      <Annotation aria-label="Weekly drawing timing">
        <p>
          You must complete all trainings within the week they are posted to the promotion
          Trainings page to be entered into that week&apos;s Weekly Drawing.
        </p>
      </Annotation>

      <h3 className="section-title">Grand Prize Drawings</h3>
      <section className="content-grid">
        <article className="content-card">
          <h4 className="content-heading"><Icon name="trophy" className="content-heading-icon" />Individual Grand Prize Drawing</h4>
          <p>
            At the end of the promotion, winners are selected from participants who completed all
            promotion trainings during the promotion timeframe.
          </p>
        </article>
        <article className="content-card">
          <h4 className="content-heading"><Icon name="trophy" className="content-heading-icon" />Store Grand Prize Drawing</h4>
          <p>
            At the end of the promotion, winners are selected from stores that met the store
            challenge requirements during the promotion timeframe.
          </p>
        </article>
      </section>

      <section className="content-actions">
        <a href="#prizes" className="panel-link"><Icon name="link" className="panel-link-icon" />Visit the Prizes page for full details</a>
        <a href="#" className="panel-link"><Icon name="link" className="panel-link-icon" />View Terms and Conditions</a>
      </section>
    </section>
  );
}
