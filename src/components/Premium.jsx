import React from "react";

const Premium = () => {
    return (
        <div className="m-10">
            <div className="flex w-full">
                <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
                    <h1 className="text-3xl">Silver Membership</h1>
                    <ul>
                        <li>- Chat with other people</li>
                        <li>- 100 connections per day</li>
                        <li>- Blue Tick</li>
                        <li>- 3 months</li>
                    </ul>
                    <button className="btn btn-secondary">Buy Silver</button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
                    <h1 className="text-3xl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ">Gold Membership</h1>
                    <ul>
                        <li>- Chat with other people</li>
                        <li>- 300 connections per day</li>
                        <li>- Blue Tick</li>
                        <li>- 6 months</li>
                    </ul>
                    <button className="btn btn-primary">Buy Gold</button>
                </div>
            </div>
        </div>
    );
};

export default Premium;
