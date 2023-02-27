import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            alert("Welcome");
            navigate("/home");
        }
        catch (err: any) {
            alert("Error: " + err.message)
        }
    }

    return (
        <div className="Register Box">

            <form onSubmit={handleSubmit(send)} >

                <h2>Register</h2>

                <label>First Name: </label>
                <input type="text" {...register("firstName")} />

                <label>Last Name: </label>
                <input type="text" {...register("lastName")} />

                <label>Username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Register</button>

            </form>

        </div>
    );
}

export default Register;
