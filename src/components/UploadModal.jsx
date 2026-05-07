import { useState } from 'react';
import { Icon } from './Icon.jsx';

export function UploadModal({ challengeName, onClose, onSubmit }) {
  const [caption, setCaption] = useState('');

  if (!challengeName) return null;

  const handleSubmit = () => {
    const payload = {
      challengeName,
      caption: caption.trim()
    };
    onSubmit?.(payload);
    setCaption('');
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="upload-modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-kicker">Photo slot</p>
            <h2 id="upload-modal-title">Upload Photo</h2>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close upload modal">
            <Icon name="x" />
          </button>
        </div>

        <div className="modal-context">
          Uploading for: <strong>{challengeName}</strong>
        </div>

        <div className="drop-zone">
          <div className="drop-zone-icon">DROP</div>
          <p>Drag and drop files here</p>
          <span>or</span>
          <button className="btn btn-secondary" type="button">Browse Files</button>
        </div>

        <label className="caption-field" htmlFor="caption-input">
          <span>Add a caption <em>(optional)</em></span>
          <input
            id="caption-input"
            type="text"
            maxLength="100"
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="e.g., Best Buy 1234 — Full Team"
          />
        </label>
        <div className="caption-hint">
          <span>Displayed with your photo on the Photo Wall</span>
          <span>{caption.length} / 100</span>
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
