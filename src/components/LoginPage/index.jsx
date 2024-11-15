import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useForm } from "react-hook-form"

import './index.css';

function LoginPage({ setUserId }) {
    // const auth = getAuth();
    const [hidden, setHidden] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        console.log(data, 'this is the data in login');
        // if (e) e.preventDefault();
        // if (!em) em = email;
        // if (!pw) pw = password;
        try {
            //in production perhaps this VV
            // if (data.email.toString().endsWith('@telusinternational.com'))
            if (data.email) {
                console.log('email', data.email);
                console.log('password', data.password);
                console.log('auth', auth);
                const respToLogin = await signInWithEmailAndPassword(auth, data.email, data.password);
                console.log('resp is', respToLogin);
            }
        } catch (error) {
            console.log(error, 'the error is')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error Signing In',
                footer: `${error.code} + ${error.message}`
            });
        }
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

    //would you like to have a reset pass function? I mean it would not hurt to have it...
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
            <h3>Login</h3>
            <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                <input
                    type="text"
                    placeholder="email"
                    {...register("email", { required: true })}
                />
                {/*We could potentially fire swal here as well... */}
                {errors.email && <span>The email field is mandatory</span>}
                <input
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                />
                {/*We could potentially fire swal here as well... */}
                {errors.email && <span>The email field is mandatory</span>}
                <button type="submit" id="loginButton">Login Now</button>
            </form>
        </div>}
    </div>
}

export default LoginPage;