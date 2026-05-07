import { challenges, storeChallenge } from '../data/campaignData.js';
import { Annotation } from './Annotation.jsx';
import { BrandMark } from './BrandMark.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { Icon } from './Icon.jsx';
import challengeThumb1 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_35 PM (1).png';
import challengeThumb2 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (2).png';
import challengeThumb3 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (3).png';
import challengeThumb4 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_36 PM (4).png';
import challengeThumb5 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_39 PM (5).png';
import challengeThumb6 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_39 PM (6).png';
import challengeThumb7 from '../../assets_tab/thumb/ChatGPT Image May 7, 2026, 04_06_40 PM (7).png';

const CHALLENGE_THUMBS = [
  challengeThumb1,
  challengeThumb2,
  challengeThumb3,
  challengeThumb4,
  challengeThumb5,
  challengeThumb6,
  challengeThumb7
];

function ChallengeCard({ challenge, onUpload, thumbnail }) {
  return (
    <article className={`challenge-card challenge-${challenge.statusTone}`}>
      {thumbnail && (
        <div className="challenge-thumb-wrap">
          <img className="challenge-thumb" src={thumbnail} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="challenge-header">
        <div className="challenge-identity">
          <BrandMark brand={challenge.brand} />
          <div>
            <h4>{challenge.name}</h4>
            <p>{challenge.type}</p>
          </div>
        </div>
        <StatusBadge tone={challenge.statusTone}>{challenge.status}</StatusBadge>
      </div>

      <p className="challenge-desc">{challenge.description}</p>

      {challenge.progress && (
        <div className="challenge-progress-block">
          <ProgressBar percent={challenge.progress.percent} complete={challenge.progress.percent === 100} />
          <span>{challenge.progress.current} of {challenge.progress.total}</span>
        </div>
      )}

      {challenge.denialReason && (
        <div className="denial-reason">
          <strong>Reason for denial:</strong>
          <span>{challenge.denialReason}</span>
        </div>
      )}

      {challenge.actionLabel && (
        <button className="btn btn-primary btn-full" type="button" onClick={() => onUpload(challenge.name)}>
          <Icon name="upload" className="btn-icon" />
          {challenge.actionLabel}
        </button>
      )}
    </article>
  );
}

function StoreChallenge() {
  return (
    <section className="store-challenge">
      <div className="store-status-banner">
        <Icon name="warning" className="store-warning-icon" />
        <div>
          <strong>{storeChallenge.status}</strong>
          <span> — {storeChallenge.message}</span>
        </div>
        <div className="store-radar" aria-hidden="true"><span /></div>
      </div>

      <div className="criteria-grid">
        {storeChallenge.criteria.map((criterion) => (
          <article className="criterion" key={criterion.id}>
            <div className="criterion-label">{criterion.label}</div>
            <div className="criterion-value">
              {criterion.value} <span>{criterion.target}</span>
            </div>
            <ProgressBar percent={criterion.progress} />
            <p>{criterion.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ChallengesPanel({ onUpload }) {
  return (
    <section className="panel-body">
      <h2 className="panel-title">Challenges</h2>

      <h3 className="section-title">Your Challenges</h3>
      <Annotation>
        <strong>Dev note:</strong> 7 individual challenges. OEM training-pair challenges auto-validate on completion of both trainings.
        Photo upload challenges require manual review. Challenge check awarded only on Approved status.
      </Annotation>

      <div className="challenge-grid">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onUpload={onUpload}
            thumbnail={CHALLENGE_THUMBS[index]}
          />
        ))}
      </div>

      <h3 className="section-title">Store Challenge</h3>
      <Annotation>
        <strong>Dev note:</strong> Not a user challenge — this is a store-level raffle eligibility tracker.
        Both criteria must be met for the store to enter the raffle. Data aggregates all IPC-participating reps at the same store.
      </Annotation>

      <StoreChallenge />
    </section>
  );
}
