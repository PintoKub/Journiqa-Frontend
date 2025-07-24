import React, { useState, useEffect } from 'react';
import { CloseIcon, MapPinIcon, CalendarIcon, ClockIcon, UploadCloudIcon } from '../../components/icon.jsx';
import './memoPage.css'; // Import the dedicated CSS file

export default function MemoPage({ isOpen, isClosing, onClose }) {
  // State to hold the form inputs
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // This effect runs when the popup opens to set the current date and time
  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      // Format date as YYYY-MM-DD for the date input
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      setDate(`${year}-${month}-${day}`);

      // Format time as HH:MM for the time input
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    }
  }, [isOpen]); // Re-run only when the `isOpen` prop changes

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving place with date and time:", { date, time });
    onClose(); // Close the popup after saving
  };

  if (!isOpen) {
    return null;
  }

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
            <input type="text" placeholder="Your Place" className="memo-input" />
          </div>

          <div className="memo-form-row">
            <div className="memo-form-group">
              <CalendarIcon className="memo-input-icon" />
              {/* This is a usable date input */}
              <input 
                type="date" 
                className="memo-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="memo-form-group">
              <ClockIcon className="memo-input-icon" />
              {/* This is a usable time input */}
              <input 
                type="time" 
                className="memo-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
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
