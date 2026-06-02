import { useEffect } from 'react';
import ShapeGrid from './ShapeGrid.jsx';
import { termsBySlug, termsPages } from '../data/termsData.js';

function TermsIndex() {
  return (
    <section className="terms-index" aria-labelledby="terms-index-title">
      <p className="terms-kicker">Intel PC Champions 2026</p>
      <h1 id="terms-index-title">Terms and Conditions</h1>
      <p className="terms-intro">
        Four Official Rules versions are implemented. Backend audience logic can route users to the matching page.
      </p>

      <div className="terms-card-grid">
        {termsPages.map((page) => (
          <a className="terms-card" href={`/terms/${page.slug}`} key={page.slug}>
            <span className="terms-card-title">{page.title}</span>
            <span className="terms-card-audience">{page.audience}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function TermsDocument({ page }) {
  return (
    <section className="terms-document" aria-labelledby="terms-document-title">
      <div className="terms-document-head">
        <div>
          <p className="terms-kicker">Terms and Conditions</p>
          <h1 id="terms-document-title">{page.title}</h1>
          <p className="terms-audience">{page.audience}</p>
        </div>
        <a className="terms-back-link" href="/terms">All Terms</a>
      </div>

      <iframe
        className="terms-iframe"
        src={page.documentPath}
        title={page.title}
      />
    </section>
  );
}

export function TermsPage({ slug }) {
  const page = slug ? termsBySlug.get(slug) : null;

  useEffect(() => {
    document.title = page ? `${page.title} | Intel PC Champions 2026` : 'Terms and Conditions | Intel PC Champions 2026';
  }, [page]);

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
        {page ? <TermsDocument page={page} /> : <TermsIndex />}
      </main>
    </div>
  );
}
