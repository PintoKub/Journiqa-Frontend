import React from 'react';
import { CloseIcon, BellIcon, MedalIcon, StopCircleIcon } from '../../components/icon.jsx';
import './questPage.css';

export default function QuestMenu({ isOpen, isClosing, onClose, quests = [] }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="quest-popup-overlay" onClick={onClose}>
      <div className={`quest-popup-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="quest-close-btn" onClick={onClose}>
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="quest-title">This trip quests</h2>
        
        <div className="quest-item">
          <BellIcon className="quest-item-icon" />
          <div className="quest-item-details">
            <p>Walk in Ratchaparob 8, for 3 km</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '50%' }}></div>
            </div>
            <div className="progress-labels">
              <span>1.5</span>
              <span>3</span>
            </div>
          </div>
        </div>

        <div className="quest-item">
          <BellIcon className="quest-item-icon" />
          <div className="quest-item-details">
            <p>Walk in Samyan Market for 30 minutes</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '50%' }}></div>
            </div>
            <div className="progress-labels">
              <span>15</span>
              <span>30</span>
            </div>
          </div>
        </div>

        <div className="reward-section">
          <h3>Reward</h3>
          <div className="reward-items">
            <div className="reward-item">
              <MedalIcon className="reward-icon" />
              <span>50 Points</span>
            </div>
            <div className="reward-item">
              <StopCircleIcon className="reward-icon" />
              <span>Achievement Unlocked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
