import { auth } from '../../firebase/config';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../redux/Features';

import './index.css';
import telusLogo from './telusLogo.png';

const Navbar = ({ setUserId }) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo.value) || {};
    const userRole = userInfo['role'];

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
        <img src={telusLogo} alt="Telus Digital" />
        <span id="projectName">| Tokoro</span>
        <span id="navbarTitle" />
        {/* {admin && <a href="/participants" onClick={(e) => { e.preventDefault(); navigate("/participants"); }}>Participants</a>} */}
        {<a href="/registration-form" onClick={(e) => { e.preventDefault(); navigate("/registration-form"); }}>Register new moderator</a>}
        {<a href="/video-tagging" onClick={(e) => { e.preventDefault(); navigate("/video-tagging"); }}>Video Tagging</a>}

        <a href="/" onClick={(e) => { e.preventDefault(); handleLogout(); navigate("/"); }}>Logout</a>
    </nav>
}

export default Navbar;