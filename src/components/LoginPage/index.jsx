import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../../firebase/config';
import './index.css';

function LoginPage({ setUserId }) {
    
    const [hidden, setHidden] = useState(false);

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

        // const auth = getAuth();
        // sendPasswordResetEmail(auth, email).then((result) => {
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Check your inbox...',
        //         html: '<b>' + email + '</b>',
        //         footer: 'Password reset email sent'
        //     });
        // }).catch(function (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         footer: error
        //     });
        // });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserId(currentUser ? currentUser.uid : '');
        });
        return () => unsubscribe();
    }, []);

    return <div id="loginPage">
        {!hidden && <div id="loginContainer">
           <form>
            </form>
        </div>}
    </div>
}

export default LoginPage;