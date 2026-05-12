import { trainingWeeks } from '../data/campaignData.js';
import trainingThumb1 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_35 PM (1).png';
import trainingThumb2 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (2).png';
import trainingThumb3 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (3).png';
import trainingThumb4 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (4).png';
import trainingThumb5 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_39 PM (5).png';
import trainingThumb6 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_39 PM (6).png';
import trainingThumb7 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_40 PM (7).png';
import trainingThumb8 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_40 PM (8).png';
import trainingThumb9 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_41 PM (9).png';
import trainingThumb10 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_41 PM (10).png';

const TRAINING_THUMBS = [
  trainingThumb1,
  trainingThumb2,
  trainingThumb3,
  trainingThumb4,
  trainingThumb5,
  trainingThumb6,
  trainingThumb7,
  trainingThumb8,
  trainingThumb9,
  trainingThumb10
];

export function TrainingsPanel() {
  let thumbnailIndex = 0;

  return (
    <section className="panel-body">
      <h2 className="panel-title">Trainings</h2>

      <div className="training-weeks">
        {trainingWeeks.map((week) => (
          <section className="training-week" key={week.title}>
            <h3 className={`training-week-title ${week.current ? 'current' : ''}`}>{week.title}</h3>
            <div className="training-grid">
              {week.trainings.map((training) => {
                const thumb = TRAINING_THUMBS[thumbnailIndex % TRAINING_THUMBS.length];
                thumbnailIndex += 1;
                return (
                <article className="training-card" key={training.name}>
                  <div className={`training-thumb ${training.complete ? 'complete' : ''}`}>
                    <img className="training-thumb-image" src={thumb} alt="" aria-hidden="true" />
                  </div>
                  <div className="training-name">{training.name}</div>
                </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
