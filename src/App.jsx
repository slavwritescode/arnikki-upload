import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Constants from './components/Constants';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Navbar from './components/Navbar';

const App = () => {
  const [userId, setUserId] = useState('');
  function getElement(path) {

    switch (path) {
      case "/":
        return <span>Blank...</span>;
      case "/login":
        return <LoginPage setUserId={setUserId} />;
      case "/registration-form":
        return <RegistrationPage />;
      default:
        return null;
    }
  }

  return <div id="mainApplication">
    {<Navbar
      // setUserId={setUserId}
      // showStats={showStats}
      // setShowStats={setShowStats}
      // showStats2={showStats2}
      // setShowStats2={setShowStats2}
      // showDeviceStats={showDeviceStats}
      // setShowDeviceStats={setShowDeviceStats}
      // showLog={showLog}
      // setShowLog={setShowLog}
    />}
    <Routes>
      <Route path="/" element={getElement("/registration-form")} />
      <Route path="/registration-form" element={getElement("/registration-form")} />
      <Route path="/login" element={(userId && Object.keys(userInfo || {}).length > 0) ? getElement("/qa-tool") : getElement("/login")} />
      <Route path="/review-video" element={(userId && Object.keys(userInfo || {}).length > 0) ? getElement("/participants") : getElement("/login")} />
    </Routes>
    
  </div>
}

export default App;