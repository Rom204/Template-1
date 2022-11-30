import axios from "axios";
import { useForm } from "react-hook-form";
import SomethingModel from "../../../Models/somethingModel";
import "./Login.css";

let renderCount = 0;
function Login(): JSX.Element {
    const { 
        register,
        handleSubmit,
        formState : { errors },
    } = useForm<SomethingModel>({
        defaultValues : 
        {
            firstName : "",
            id : 0
        }
    });
    
    renderCount++;
    const checkValid  = async (data : SomethingModel) : Promise<SomethingModel> => {
        return await axios.post("http://localhost:3000/send/something", data);
    }

    return (
        
        <div className="Login">
            <div><p>renderCount: {renderCount}</p></div>
		
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
            checkValid(data)
        })}>
            <input {...register("firstName", { required: "required"})} placeholder={"First Name"} />
            <p>{ errors.firstName?.message}</p>

            <input {...register("id", { required: "required"})} placeholder={"id"} />
            <p>{ errors.id?.message}</p>

            <input type="submit" />
            
        </form>

        </div>
    );
}

export default Login;
