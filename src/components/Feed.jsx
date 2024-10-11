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
    return (
        feed && (
            <div className="flex flex-wrap gap-4 my-10 justify-center">
                {/* <h1 className="text-3xl">FEED</h1> */}
                {/* {console.log(feed)} */}
                {feed?.data?.users.map((user) => {
                    return <UserCard key={user._id} user={user} />;
                })}
                {/* <UserCard user={feed?.data?.users[0]} /> */}
            </div>
        )
    );
};

export default Feed;
