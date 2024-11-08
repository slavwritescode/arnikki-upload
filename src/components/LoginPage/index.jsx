import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

import './index.css';

function LoginPage({ setUserId }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    const handleLogin = async (e, em, pw) => {
        // if (e) e.preventDefault();
        // if (!em) em = email;
        // if (!pw) pw = password;

        // try {
        //     if ((em || '').toString().endsWith('@telusinternational.com')) {
        //         await signInWithEmailAndPassword(auth, em, pw);
        //     } else {
        //         await setPersistence(auth, browserSessionPersistence).then(() => {
        //             return signInWithEmailAndPassword(auth, em, pw);
        //         });
        //     }
        // } catch (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Error Signing In',
        //         footer: error
        //     });
        // }
    }

    const resetPassword = () => {

        const auth = getAuth();
        sendPasswordResetEmail(auth, email).then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Check your inbox...',
                html: '<b>' + email + '</b>',
                footer: 'Password reset email sent'
            });
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                footer: error
            });
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserId(currentUser ? currentUser.uid : '');
        });
        return () => unsubscribe();
    }, []);

    return <div id="loginPage">
        {!hidden && <div id="loginContainer">
            <h2>Project Silverheels</h2>
            <form onSubmit={(e) => handleLogin(e)}>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="email"
                    autoFocus
                />
                <input
                    id="password"
                    type="password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="password"
                />
                <button id="loginButton" type="submit" className="log-in-button">Login</button>
                <button id="resetButton" className="pw-reset-button" onClick={(e) => { e.preventDefault(); resetPassword(); }}>Reset password</button>
            </form>
        </div>}
    </div>
}

export default LoginPage;