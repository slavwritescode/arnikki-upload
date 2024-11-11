import { useForm } from "react-hook-form"

import './index.css';

const RegistrationPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const handleRegistration = (data) => {
        console.log(data);
    }
    console.log(watch("example"));

    return <div id="registrationPage">
                <div id="registrationContainer">
                    <p>Please enter your information to register for our program</p>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <input 
                            type="text"
                            placeholder="email"
                            {...register("email", { required: true })} 
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            {...register("password", { required: true })} 
                        />
                        {errors.email && <span>The email field is mandatory</span>}
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
}

export default RegistrationPage;