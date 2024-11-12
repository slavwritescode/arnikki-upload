import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import BeatLoader from "react-spinners/ClipLoader";
import { useState } from "react";

import './index.css';
import {backend, realtimeDb} from '../../firebase/config';

//the error messages can come from constants....
const RegistrationPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const writeUserDataToDb = async (uid, name, role) => {
        const userData = await realtimeDb.ref('/users/' + uid).set({name: name, role: role});
        console.log(userData);
        return userData;
    }
    //watch is not used right now but it CAN be used to monitor value, instead of console.logs...
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const handleRegistration = (data) => {
       
        const register = async()=>{
           setIsRegistering(true);
           const res = await backend('registerNewUser', {email: data.email, name: data.name, role: data.role});
           
           if(res.data.message){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                footer: res.data.message
            });
           }else if(res.data.uid){
                const newUid = res.data.uid;
                const name = res.data.name;
                const role = res.data.role;
                const write = await writeUserDataToDb(newUid, name, role);
                setIsRegistering(false);
                return write;
           }    
        }
        register();
    }
    

    return <div id="registrationPage">
                <div id="registrationContainer">
                    <h3>Please enter your information to register for our program</h3>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <input 
                            type="text"
                            placeholder="email"
                            {...register("email", { required: true, pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format"
                            } })} 
                        />
                        {/*We could potentially fire swal here as well... */}
                        {errors.email && <span>The email field is mandatory</span>}
                        <input 
                            type="text"
                            placeholder="name"
                            {...register("name", { required: true })} 
                        />
                        {errors.name && <span>The name field is mandatory</span>}
                        <select {...register("role", {required: true})} defaultValue="">
                            <option value="" disabled>Please select an option</option>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                        </select>
                        {errors.role && <span>The role dropdown is mandatory</span>}
                        <input 
                            type="password"
                            placeholder="password"
                            {...register("password", { required: true })} 
                        />
                        {errors.password && <span>The password field is mandatory</span>}
                        {isRegistering ? <BeatLoader size={10}/> : <button type="submit" id="registerButton">Register</button>}
                    </form>
                </div>
            </div>
}

export default RegistrationPage;