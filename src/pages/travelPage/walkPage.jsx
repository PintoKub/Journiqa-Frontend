import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component Imports
import QuestMenu from './questPage.jsx';
import MemoPage from './memoPage.jsx';

// Style and Icon Imports
import './walkPage.css';
import { LeafIcon, MapPinIcon, HomeIcon, CameraIcon } from '../../components/icon.jsx';

// Mock Data - In the future, this will come from your backend
const mockQuests = [
  { id: 1, title: 'Walk in Ratchaparob 8, for 3 km', currentProgress: 1.5, goal: 3 },
  { id: 2, title: 'Walk in Samyan Market for 30 minutes', currentProgress: 15, goal: 30 },
];

// The Main Page Component
export default function WalkPage() {
  // State for controlling the Quest Popup
  const [isQuestMenuOpen, setQuestMenuOpen] = useState(false);
  const [isQuestClosing, setIsQuestClosing] = useState(false);
  
  // State for controlling the Memo Popup
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [isMemoClosing, setIsMemoClosing] = useState(false);

  const navigate = useNavigate();

  // --- Popup Control Functions ---

  const openQuestLog = () => {
    setIsQuestClosing(false); // Reset closing animation state
    setQuestMenuOpen(true);
  };

  const closeQuestLog = () => {
    setIsQuestClosing(true); // Trigger closing animation
    setTimeout(() => {
      setQuestMenuOpen(false);
    }, 400); // Duration must match CSS animation
  };

  const openMemoPopup = () => {
    setIsMemoClosing(false); // Reset closing animation state
    setIsMemoOpen(true);
  };

  const closeMemoPopup = () => {
    setIsMemoClosing(true); // Trigger closing animation
    setTimeout(() => {
      setIsMemoOpen(false);
    }, 400); // Duration must match CSS animation
  };

  // --- Placeholder Navigation Functions ---
  const goToLocationPage = () => console.log("Navigate to Location Page");
  const goToHomePage = () => console.log("Navigate to Home Page");

  // This variable checks if any popup is open to apply the blur effect
  const isAnyPopupOpen = isQuestMenuOpen || isMemoOpen;

  return (
    <div className="walk-page-container">
      {/* The main content area that will be blurred */}
      <main className={`map-view-background ${isAnyPopupOpen ? 'blurred' : ''}`}>
        <svg width="100%" height="100%" className="map-svg">
          <defs>
            <filter id="rough-texture" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
              <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
                <feDistantLight azimuth="45" elevation="60"/>
              </feDiffuseLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#4ade80" />
          <rect width="100%" height="100%" fill="#a3e635" filter="url(#rough-texture)" opacity="0.15"/>
          <path className="map-path" d="M195,800 C195,700 345,650 295,550 C245,450 145,400 195,300 C245,200 345,150 245,50" />
        </svg>

        <button className="quest-button" onClick={openQuestLog}>
          <LeafIcon className="w-4 h-4" />
          <span>Quest</span>
        </button>

        <div className="player">
          <div className="player-head"></div>
          <div className="player-body"></div>
          <div className="player-legs"></div>
          <div className="player-shadow"></div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className={`footer-navigation ${isAnyPopupOpen ? 'blurred' : ''}`}>
        <button className="footer-btn" onClick={goToLocationPage}>
          <MapPinIcon className="w-8 h-8" />
        </button>
        <button className="footer-btn-center" onClick={goToHomePage}>
          <HomeIcon className="w-10 h-10" />
        </button>
        <button className="footer-btn" onClick={openMemoPopup}>
          <CameraIcon className="w-8 h-8" />
        </button>
      </footer>

      {/* Render Popups */}
      <QuestMenu 
        isOpen={isQuestMenuOpen} 
        isClosing={isQuestClosing} 
        onClose={closeQuestLog} 
        quests={mockQuests} 
      />
      
      <MemoPage 
        isOpen={isMemoOpen}
        isClosing={isMemoClosing}
        onClose={closeMemoPopup}
      />
    </div>
  );
}
