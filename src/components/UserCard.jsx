import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";

const UserCard = ({ user }) => {
    // console.log(user);
    const { _id, firstName, lastName, age, photoUrl, gender, about } = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(
                BASE_URL + "/request/send/" + status + "/" + userId,
                {},
                {
                    withCredentials: true,
                }
            );
            dispatch(removeUserFromFeed(userId));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <div className="card bg-base-300 w-96 h-[32rem] shadow-xl">
                <figure className="mt-4 object-cover">
                    <img className="rounded-lg" src={photoUrl} alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender && <p>{age + " " + gender}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-between">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                handleSendRequest("ignored", _id);
                            }}
                        >
                            Ignore
                        </button>
                        <button className="btn btn-secondary" onClick={() => {handleSendRequest("interested", _id)}}>
                            Interested
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
