import { useMemo, useState } from 'react';
import { filters, photoWallItems } from '../data/campaignData.js';
import { Icon } from './Icon.jsx';
import photo007 from '../../assets_tab/photos/image-007-C322igWj.jpg';
import photo008 from '../../assets_tab/photos/image-008-y6Ww2tcC.jpg';
import photo009 from '../../assets_tab/photos/image-009-goGkZdn0.jpg';
import photo010 from '../../assets_tab/photos/image-010-Cd9VTll6.jpg';
import photo011 from '../../assets_tab/photos/image-011-BODJt6lv.jpg';
import photo012 from '../../assets_tab/photos/image-012-p-Xa-zth.jpg';
import photo013 from '../../assets_tab/photos/image-013-CRPFoYZH.jpg';
import photo014 from '../../assets_tab/photos/image-014-Wy7J439X.jpg';

const PHOTO_MAP = {
  'team-1': photo007,
  'lenovo-1': photo008,
  'acer-1': photo009,
  'norton-1': photo010,
  'team-2': photo011,
  'lenovo-2': photo012,
  'acer-2': photo013,
  'team-3': photo014
};

function PhotoCard({ item }) {
  const [liked, setLiked] = useState(false);
  const count = item.hearts + (liked ? 1 : 0);

  return (
    <article className="photo-card" data-type={item.type}>
      <div className={`photo-image photo-${item.type}`}>
        <img
          className="photo-thumb"
          src={PHOTO_MAP[item.id]}
          alt={item.title || `${item.type} photo`}
          loading="lazy"
        />
      </div>
      <div className="photo-body">
        {item.title && <h3 className="photo-title">{item.title}</h3>}
        <p className="photo-uploader">{item.uploader}</p>
        <div className="photo-actions">
          <button className={`heart-btn ${liked ? 'active' : ''}`} type="button" onClick={() => setLiked(!liked)}>
            <Icon name="heart" className="heart-icon" />
            <span>{count}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export function PhotoWallPanel() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return photoWallItems;
    return photoWallItems.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="panel-body">
      <h2 className="panel-title">Photo Wall</h2>

      <div className="filter-chips">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`chip ${activeFilter === filter.id ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {visibleItems.map((item) => <PhotoCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
