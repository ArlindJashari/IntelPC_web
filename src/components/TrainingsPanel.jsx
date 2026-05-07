import { trainingWeeks } from '../data/campaignData.js';
import { Annotation } from './Annotation.jsx';

export function TrainingsPanel() {
  return (
    <section className="panel-body">
      <h2 className="panel-title">Trainings</h2>
      <Annotation>
        <strong>Dev note:</strong> Current week displays first. Previous weeks stack below in reverse chronological order.
        Completed trainings show a green check overlay on the thumbnail. Each row accommodates up to four cards wide.
      </Annotation>

      <div className="training-weeks">
        {trainingWeeks.map((week) => (
          <section className="training-week" key={week.title}>
            <h3 className={`training-week-title ${week.current ? 'current' : ''}`}>{week.title}</h3>
            <div className="training-grid">
              {week.trainings.map((training) => (
                <article className="training-card" key={training.name}>
                  <div className={`training-thumb ${training.complete ? 'complete' : ''}`}>
                    <span>Training Thumbnail</span>
                  </div>
                  <div className="training-name">{training.name}</div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
