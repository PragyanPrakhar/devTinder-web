import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) return;
        try {
            const user = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
            });
            dispatch(addUser(user.data));
        } catch (error) {
            if (error.status === 401) {
                navigate("/login");
            }
            console.error(error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};
export default Body;
