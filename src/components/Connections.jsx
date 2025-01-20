import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
    const fetchConnections = async () => {
        try {
            const response = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            console.log(response.data.data);
            dispatch(addConnections(response.data.data));
        } catch (error) {
            console.error(error);
            throw new Error("Error Occured while fetching the connections !!");
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);
    if (!connections) return;
    if (connections.length == 0) {
        return (
            <div className="text-center my-10">
                <h1 className="font-bold text-xl">No Connections Found</h1>
            </div>
        );
    }
    return (
        // TODO :-> Added the overflow auto to make the connections scrollable.
        <div className="text-center my-10 overflow-auto">
            <h1 className="text-white font-bold text-3xl">Connections</h1>
            {connections.map((connection) => {
                const { firstName, lastName, photoUrl, age, gender, about } =
                    connection;
                return (
                    <div
                        key={connection._id}
                        className="flex  mx-auto m-4 p-4 rounded-lg bg-base-300 w-1/2 "
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
                        <Link to={"/chat/" + connection._id}>
                            <button className="btn btn-primary">Chat</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Connections;
