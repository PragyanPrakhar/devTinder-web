import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);
    const getFeed = async () => {
        if (feed) {
            return;
        }
        try {
            const res = await axios.get(BASE_URL + "/feed", {
                withCredentials: true,
            });
            console.log("Response Data for Feed:- ", res.data);
            dispatch(addFeed(res.data));
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getFeed();
    }, []);
    if (!feed) {
        return;
    }
    if (feed.length <= 0) {
        return <h1 className="justify-center my-10">No new Users Found</h1>;
    }
    return (
        feed && (
            <div className="flex flex-wrap gap-4 my-10 justify-center">
                {feed?.data?.users.map((user) => {
                    return <UserCard key={user._id} user={user} />;
                })}
            </div>
        )
    );
};

export default Feed;
