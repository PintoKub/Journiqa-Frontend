import { Routes, Route } from 'react-router-dom';
import AuthScreen from './pages/authPage/authPage.jsx';
import LandingPage from './pages/landingPage/landingPage.jsx';
import ForgotPassword from './pages/forgotPassword/ForgotPassword.jsx';
import WalkPage from './pages/travelPage/walkPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/walk" element={<WalkPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
