import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import './index.css';
import {backend} from '../../firebase/config';

const RegistrationPage = () => {
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
           console.log(res, 'this is the res');
           return res;
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