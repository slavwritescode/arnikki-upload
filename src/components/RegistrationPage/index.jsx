import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import './index.css';
import {backend, realtimeDb} from '../../firebase/config';

const RegistrationPage = () => {
    
    const writeUserDataToDb = async (uid, name) => {
        const userData = await realtimeDb.ref('/users/' + uid).set({uid: {name: name}});
        console.log(userData);
        return userData;
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const handleRegistration = (data) => {
        console.log(data);
        console.log(data.email);
        const register = async()=>{
           const res = await backend('registerNewUser', {email: data.email, password: data.password});
           console.log('is the res', res);
           if(res.data.message){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                footer: res.data.message
            });
           }else if(res.data.uid){
                const newUid = res.data.uid;
                const name = res.data.name
                const write = await writeUserDataToDb(newUid, name);
                console.log(write, 'is write')
                return write;
           }    
        }
        register();
    }
    console.log(watch("example"));

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
                            type="password"
                            placeholder="password"
                            {...register("password", { required: true })} 
                        />
                        {errors.password && <span>The password field is mandatory</span>}
                        <button type="submit" id="registerButton">Register</button>
                    </form>
                </div>
            </div>
}

export default RegistrationPage;