import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [age, setAge] = useState(user?.age || "");
    const [gender, setGender] = useState(user?.gender || "");
    const [about, setAbout] = useState(user?.about || "");
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const saveProfile = async () => {
        //clear the errors
        setError("");
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    photoUrl,
                    age,
                    gender,
                    about,
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data));
            toast.success("Profile has been edited successfully !!");
            console.log(
                "Profile is Updated Successfully from the frontend too."
            );
        } catch (error) {
            setError(error.response.data);
        }
    };
    return (
        <div className="flex justify-center my-10">
            <div className="flex justify-center mx-10 ">
                <div className="card mb-12 bg-base-300 w-96 rounded-lg shadow-xl">
                    <div className="card-body">
                        <h2 className="flex items-center underline justify-center card-title">
                            Edit Profile
                        </h2>
                        <div>
                            {/* <div className="flex gap-2"> */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">
                                        First Name:
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    placeholder="Enter Your New First Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">
                                        Last Name:
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    placeholder="Enter Your New Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Age:</span>
                                </div>
                                <input
                                    type="text"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Enter Your Age Here:-"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">
                                        Photo URL:
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    value={photoUrl}
                                    onChange={(e) =>
                                        setPhotoUrl(e.target.value)
                                    }
                                    placeholder="Enter Your New Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">About:</span>
                                </div>
                                <input
                                    type="text"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="Enter Your New Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Gender:</span>
                                </div>
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    placeholder="Enter Your New Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="card-actions justify-center m-2">
                            <button
                                className="btn btn-primary"
                                onClick={saveProfile}
                            >
                                Save Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <UserCard
                user={{ firstName, lastName, age, gender, about, photoUrl }}
            />
        </div>
    );
};

export default EditProfile;
//30 minutes left
