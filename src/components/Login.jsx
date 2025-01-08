import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("abcd@gmail.com");
    const [password, setPassword] = useState("Pass@123");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/login",
                {
                    email: emailId,
                    password: password,
                },
                { withCredentials: true }
            );
            console.log(res.data);
            dispatch(addUser(res.data));
            toast.success("User Logged In Successfully !");
            navigate("/");
        } catch (error) {
            setError(error?.response?.data || "Something Went Wrong !");
        }
    };
    const handleSignUp=async()=>{
        try {
            const res = await axios.post(
                BASE_URL + "/signup",
                {
                    email: emailId,
                    password: password,
                    firstName:firstName,
                    lastName:lastName
                },
                { withCredentials: true }
            );
            console.log(res.data);
            dispatch(addUser(res.data));
            toast.success("User Signed Up Successfully !");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log("Error in signing Up :-> ",error)
            setError(error?.response?.data || "Something Went Wrong !");
        }
    }
    return (
        <div className="flex justify-center my-10">
            <div className="card m-4 bg-base-300 w-96 rounded-lg shadow-xl">
                <div className="card-body">
                    <h2 className="flex items-center underline justify-center card-title">
                        {isLoginForm ? "Login" : "Sign Up"}
                    </h2>
                    <div>
                        {!isLoginForm && (
                            <>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">
                                            First Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        placeholder="John"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">
                                            Last Name
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        placeholder="Enter Your Password Here"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>
                            </>
                        )}
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Email Id</span>
                            </div>
                            <input
                                type="text"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                placeholder="john@gmail.com"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your Password Here"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center m-2">
                        <button
                            className="btn btn-primary"
                            onClick={isLoginForm ? handleLogin : handleSignUp}
                        >
                            {isLoginForm ? "Login" : "Sign Up"}
                        </button>
                    </div>
                    <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLoginForm(value=>!value)}>{isLoginForm ?"New User ? SignUp here":"Already a user? Login here"}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
