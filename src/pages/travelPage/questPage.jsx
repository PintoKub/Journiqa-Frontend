// import React from 'react';
// import { CloseIcon, BellIcon, MedalIcon, StopCircleIcon } from '../../components/icon.jsx';

// // Note: We've moved all the Quest Menu logic and JSX into this separate file.
// // It receives `isOpen` and `onClose` as props to control its visibility.
// // The `export default` is crucial for it to be imported correctly.

// export default function QuestMenu({ isOpen, onClose }) {
//   // If the menu isn't open, we render nothing.
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     // The overlay is the semi-transparent background. Clicking it closes the menu.
//     <div className="quest-popup-overlay" onClick={onClose}>
//       {/* This stops a click inside the menu from closing it. */}
//       <div className="quest-popup-content" onClick={(e) => e.stopPropagation()}>
//         <button className="quest-close-btn" onClick={onClose}>
//           <CloseIcon className="w-6 h-6" />
//         </button>
        
//         <h2 className="quest-title">This trip quests</h2>
        
//         <div className="quest-item">
//           <BellIcon className="quest-item-icon" />
//           <div className="quest-item-details">
//             <p>Walk in Ratchaparob 8, for 3 km</p>
//             <div className="progress-bar">
//               <div className="progress-fill" style={{ width: '50%' }}></div>
//             </div>
//             <div className="progress-labels">
//               <span>1.5</span>
//               <span>3</span>
//             </div>
//           </div>
//         </div>

//         <div className="quest-item">
//           <BellIcon className="quest-item-icon" />
//           <div className="quest-item-details">
//             <p>Walk in Samyan Market for 30 minutes</p>
//             <div className="progress-bar">
//               <div className="progress-fill" style={{ width: '50%' }}></div>
//             </div>
//             <div className="progress-labels">
//               <span>15</span>
//               <span>30</span>
//             </div>
//           </div>
//         </div>

//         <div className="reward-section">
//           <h3>Reward</h3>
//           <div className="reward-items">
//             <div className="reward-item">
//               <div className="reward-icon-bg">
//                 <StopCircleIcon className="w-8 h-8" />
//               </div>
//               <span>200 XP</span>
//             </div>
//             <div className="reward-item">
//               <div className="reward-icon-bg">
//                 <MedalIcon className="w-8 h-8" />
//               </div>
//               <span>Quest Killer</span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };
import React from 'react';
import { CloseIcon, BellIcon, MedalIcon, StopCircleIcon } from '../../components/icon.jsx';
import './questPage.css';
// The component now accepts a 'quests' prop. We default it to an empty array
// to prevent errors if no quests are passed.
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
        
        {/* We now map over the 'quests' array to dynamically create the list. */}
        {/* This makes the component reusable and ready for backend data. */}
        {quests.map(quest => (
          <div key={quest.id} className="quest-item">
            <BellIcon className="quest-item-icon" />
            <div className="quest-item-details">
              <p>{quest.title}</p>
              <div className="progress-bar">
                {/* The progress bar width is now calculated dynamically. */}
                <div className="progress-fill" style={{ width: `${(quest.currentProgress / quest.goal) * 100}%` }}></div>
              </div>
              <div className="progress-labels">
                <span>{quest.currentProgress}</span>
                <span>{quest.goal}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="reward-section">
          <h3>Reward</h3>
          <div className="reward-items">
            <div className="reward-item">
              <div className="reward-icon-bg">
                <StopCircleIcon className="w-8 h-8" />
              </div>
              <span>200 XP</span>
            </div>
            <div className="reward-item">
              <div className="reward-icon-bg">
                <MedalIcon className="w-8 h-8" />
              </div>
              <span>Quest Killer</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
