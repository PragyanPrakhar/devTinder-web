import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);
    const fetchRequests = async () => {
        try {
            const res = axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            dispatch(addRequest(res.data.data));
        } catch (error) {
            console.error(error);
            throw new Error("Error while fetching the connection Requests !!");
        }
    };
    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return;
    if (requests.length == 0) {
        return (
            <div className="text-center my-10">
                <h1 className="font-bold text-xl">No Requests Found</h1>
            </div>
        );
    }
    return (
        <div className="text-center my-10">
            <h1 className="text-white font-bold text-3xl">
                Connection Requests
            </h1>
            {requests.map((request) => {
                const { firstName, lastName, photoUrl, age, gender, about } =
                    request.fromUserId;
                return (
                    <div
                        key={request._id}
                        className="flex justify-between items-center mx-auto m-4 p-4 rounded-lg bg-base-300 w-2/3"
                    >
                        <div>
                            <img
                                alt="photo"
                                className="w-20 h-20 rounded-full"
                                src={photoUrl}
                            ></img>
                        </div>
                        <div className="text-left mx-4">
                            <h1 className="font-bold text-xl">
                                {firstName + " " + lastName}
                            </h1>
                            <p>{about}</p>
                            {age && gender && <p>{age + ", " + gender}</p>}
                        </div>
                        <div>
                            <button className="btn btn-primary mx-2">Reject</button>
                            <button className="btn btn-secondary mx-2">
                                Accept
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Requests;
