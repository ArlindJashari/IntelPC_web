import { useEffect, useRef, useState } from 'react';

export function ProgressBar({ percent = 0, complete = false }) {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = barRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className={`progress-bar ${isVisible ? 'is-visible' : ''}`} aria-hidden="true">
      <i
        className={`progress-fill ${complete ? 'complete' : ''}`}
        style={{ '--progress-target': `${percent}%` }}
      />
    </div>
  );
}
