import React from 'react';
import { CloseIcon, MapPinIcon, CalendarIcon, ClockIcon, UploadCloudIcon } from '../../components/icon.jsx';
import './memoPage.css'; // Import the dedicated CSS file

export default function MemoPage({ isOpen, isClosing, onClose }) {
  if (!isOpen) {
    return null;
  }

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving place...");
    onClose(); // Close the popup after saving
  };

  return (
    <div className="memo-popup-overlay" onClick={onClose}>
      <div className={`memo-popup-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="memo-close-btn" onClick={onClose}>
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="memo-popup-title">Memory Your Place</h2>
        
        <form onSubmit={handleSave}>
          <div className="memo-form-group">
            <MapPinIcon className="memo-input-icon" />
            <input type="text" placeholder="Samyan Market" className="memo-input" />
          </div>

          <div className="memo-form-row">
            <div className="memo-form-group">
              <CalendarIcon className="memo-input-icon" />
              <input type="text" placeholder="17/06/2025" className="memo-input" />
            </div>
            <div className="memo-form-group">
              <ClockIcon className="memo-input-icon" />
              <input type="text" placeholder="12:56" className="memo-input" />
            </div>
          </div>

          <div className="memo-form-group-column">
            <label className="memo-label">About This Place</label>
            <textarea placeholder="Type Something....." className="memo-textarea"></textarea>
          </div>

          <div className="memo-upload-area">
            <UploadCloudIcon className="memo-upload-icon" />
            <p className="memo-upload-text">Upload your images</p>
            <p className="memo-upload-subtext">Only .png, .jpg, .heic</p>
          </div>

          <button type="submit" className="memo-save-btn">
            Save Place +
          </button>
        </form>

      </div>
    </div>
  );
};
