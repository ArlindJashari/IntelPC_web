import { infoStats } from '../data/campaignData.js';
import { Icon } from './Icon.jsx';

const iconByStat = {
  trainings: 'star',
  challenges: 'checkBox',
  store: 'store'
};

export function InfoBar({ retailer }) {
  const filteredStats = infoStats.filter((stat) => {
    if (stat.id === 'store') return retailer === 'bestbuy';
    return true;
  });

  return (
    <section
      className="info-bar"
      data-count={filteredStats.length}
      aria-label="Persistent campaign stats"
    >
      {filteredStats.map((stat) => (
        <article className="stat-card" key={stat.id}>
          <Icon name={iconByStat[stat.id]} className="stat-icon" />
          <div className="stat-content">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-values">
              <strong>{stat.value}</strong>
              {stat.secondaryValue && <strong>{stat.secondaryValue}</strong>}
              {stat.qualifier && <em>{stat.qualifier}</em>}
            </span>
            <span className="stat-meter" aria-hidden="true">
              <i className="stat-meter-fill" style={{ '--progress-target': `${stat.progress}%` }} />
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
