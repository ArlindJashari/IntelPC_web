import { useEffect } from 'react';
import ShapeGrid from './ShapeGrid.jsx';
import { termsBySlug, termsPages } from '../data/termsData.js';

function TermsIndex() {
  return (
    <section className="terms-index" aria-labelledby="terms-index-title">
      <p className="terms-kicker">Intel PC Champions 2026</p>
      <h1 id="terms-index-title">Terms and Conditions</h1>

      <div className="terms-card-grid">
        {termsPages.map((page) => (
          <a className="terms-card" href={`/terms/${page.slug}`} key={page.slug}>
            <span className="terms-card-title">{page.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function TermsDocument({ page }) {
  return (
    <iframe
      className="terms-iframe terms-iframe-direct"
      src={page.documentPath}
      title={page.title}
    />
  );
}

export function TermsPage({ slug }) {
  const page = slug ? termsBySlug.get(slug) : null;

  useEffect(() => {
    document.title = page ? `${page.title} | Intel PC Champions 2026` : 'Terms and Conditions | Intel PC Champions 2026';
  }, [page]);

  if (page) {
    return <TermsDocument page={page} />;
  }

  return (
    <div className="app-shell terms-shell">
      <div className="app-shapegrid-bg" aria-hidden="true">
        <ShapeGrid
          speed={0.18}
          squareSize={22}
          direction="diagonal"
          borderColor="#3A3444"
          hoverFillColor="#1B1822"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <main className="terms-chassis">
        <span className="page-screw screw-one" />
        <span className="page-screw screw-two" />
        <span className="page-screw screw-three" />
        <span className="page-screw screw-four" />
        <TermsIndex />
      </main>
    </div>
  );
}
