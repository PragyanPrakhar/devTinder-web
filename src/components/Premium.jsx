import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
    const [isUserPremium, setIsUserPremium] = useState(false);
    useEffect(() => {
        verifyPremiumUsers();
    }, []);
    const verifyPremiumUsers = async () => {
        const result = await axios.get(BASE_URL + "/premium/verify", {
            withCredentials: true,
        });
        if (result.data.isPremium) {
            setIsUserPremium(true);
        }
    };
    const handleBuyClick = async (type) => {
        const order = await axios.post(
            BASE_URL + "/payment/create",
            {
                membershipType: type,
            },
            {
                withCredentials: true,
            }
        );
        //After getting the positive response , the razorpay dialog box should be opeaned.
        // This Razorpay will come from the script tag which has been added in the head tag of the index.html.
        const { amount, currency, keyId, notes, orderId } = order.data;
        const options = {
            //It is the same key id of the razorpay account , And It can be public so, we can keep it in the frontend code.
            key: keyId, // Replace with your Razorpay key_id
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name: "devTinder",
            description: "Connect to the other developers",
            order_id: orderId, // This is the order_id created in the backend
            prefill: {
                name: notes.firstName + " " + notes.lastName,
                email: notes.emailId,
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
            handler: verifyPremiumUsers,
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return isUserPremium ? (
        "You are already a premium User."
    ) : (
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
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleBuyClick("silver")}
                    >
                        Buy Silver
                    </button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
                    <h1 className="text-3xl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ">
                        Gold Membership
                    </h1>
                    <ul>
                        <li>- Chat with other people</li>
                        <li>- 300 connections per day</li>
                        <li>- Blue Tick</li>
                        <li>- 6 months</li>
                    </ul>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleBuyClick("gold")}
                    >
                        Buy Gold
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Premium;
