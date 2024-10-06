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
                BASE_URL+"/login",
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

// import axios from "axios";
// import React, { useState } from "react";

// const Login = () => {
//     const [emailId, setEmailId] = useState("abcd@gmail.com");
//     const [password, setPassword] = useState("Pass@123");

//     const handleLogin = async () => {
//         try {
//             const res = await axios.post(
//                 "http://localhost:3000/login",
//                 {
//                     email: emailId,
//                     password: password,
//                 },
//                 { withCredentials: true }
//             );
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black">
//             <div className="bg-gray-800 mb-32 p-8 rounded-2xl shadow-lg w-96">
//                 <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">
//                     Welcome Back
//                 </h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-400 font-medium mb-2">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         placeholder="Enter your email"
//                         className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-400 font-medium mb-2">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                     />
//                 </div>
//                 <div className="text-center">
//                     <button
//                         className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
//                         onClick={handleLogin}
//                     >
//                         Login
//                     </button>
//                 </div>
//                 <div className="mt-4 text-center">
//                     <a href="#" className="text-sm text-purple-400 hover:text-purple-500">
//                         Forgot password?
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

// import axios from "axios";
// import React, { useState } from "react";

// const Login = () => {
//     const [emailId, setEmailId] = useState("abcd@gmail.com");
//     const [password, setPassword] = useState("Pass@123");

//     const handleLogin = async () => {
//         try {
//             const res = await axios.post(
//                 "http://localhost:3000/login",
//                 {
//                     email: emailId,
//                     password: password,
//                 },
//                 { withCredentials: true }
//             );
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 sm:px-6 lg:px-8">
//             <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg">
//                 <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">
//                     Welcome Back
//                 </h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-400 font-medium mb-2">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         placeholder="Enter your email"
//                         className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-400 font-medium mb-2">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                     />
//                 </div>
//                 <div className="text-center">
//                     <button
//                         className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
//                         onClick={handleLogin}
//                     >
//                         Login
//                     </button>
//                 </div>
//                 <div className="mt-4 text-center">
//                     <a href="#" className="text-sm text-purple-400 hover:text-purple-500">
//                         Forgot password?
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
