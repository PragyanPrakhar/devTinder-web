import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("abcd@gmail.com");
    const [password, setPassword] = useState("Pass@123");
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
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex justify-center my-10">
            <div className="card m-4 bg-base-300 w-96 rounded-lg shadow-xl">
                <div className="card-body">
                    <h2 className="flex items-center underline justify-center card-title">
                        Login
                    </h2>
                    <div>
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
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your Password Here"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                    </div>
                    <div className="card-actions justify-center m-2">
                        <button
                            className="btn btn-primary"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
