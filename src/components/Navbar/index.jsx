import { useState } from 'react';
import { getAuth } from 'firebase/auth'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './index.css';

const Navbar = ({ setUserId, showStats, setShowStats, showStats2, setShowStats2, showDeviceStats, setShowDeviceStats, showLog, setShowLog }) => {
    const auth = getAuth();
    const userRole = userInfo['role'];
    const admin = userRole === 'admin';
    const appleS1 = userRole === 'apple';
    const appleS2 = userRole === 'apple2';
    const appleS1S2 = userRole === 'apple12';

    
    const handleLogout = async () => {
        try {
            await signOut(auth).then(() => {
                setUserId('');
                navigate("/login");
                dispatch(updateUserInfo({}));
            });
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return <nav id="navbar">
        <span id="projectName">| Silverheels</span>
        <span id="navbarTitle" />
        {admin && <a href="/participants" onClick={(e) => { e.preventDefault(); navigate("/participants"); }}>Participants</a>}
        {admin && <a href="/scheduler" onClick={(e) => { e.preventDefault(); navigate("/scheduler"); }}>Scheduler</a>}
        {(admin || appleS2 || appleS1S2) && <a href="/external-report" onClick={(e) => { e.preventDefault(); navigate("/external-report"); }}>External report {(admin || appleS1S2) ? 'S2' : ''}</a>}
        {(admin || appleS1 || appleS1S2) && <a href="/overview" onClick={(e) => { e.preventDefault(); navigate("/overview"); }}>Overview {(admin || appleS1S2) ? 'S1' : ''}</a>}
        {(admin || appleS2 || appleS1S2) && <a href="/overview2" onClick={(e) => { e.preventDefault(); navigate("/overview2"); }}>Overview  {(admin || appleS1S2) ? 'S2' : ''}</a>}
        {(admin || appleS1 || appleS1S2) && <a href="/stats" onClick={(e) => { e.preventDefault(); setShowStats(true); }}>Stats {(admin || appleS1S2) ? 'S1' : ''}</a>}
        {(admin || appleS2 || appleS1S2) && <a href="/stats2" onClick={(e) => { e.preventDefault(); setShowStats2(true); }}>Stats  {(admin || appleS1S2) ? 'S2' : ''}</a>}
        {(admin || appleS1 || appleS1S2) && <a href="/device-stats" onClick={(e) => { e.preventDefault(); setShowDeviceStats(true); }}>Device stats</a>}
        {admin && <a href="/inventory" onClick={(e) => { e.preventDefault(); navigate("/inventory"); }}>Inventory</a>}
        {admin && <a href="/log" onClick={(e) => { e.preventDefault(); setShowLog({ 'show': true }); }}>Log</a>}
        <a href="/" onClick={(e) => { e.preventDefault(); handleLogout(); navigate("/"); }}>Logout</a>
    </nav>
}

export default Navbar;