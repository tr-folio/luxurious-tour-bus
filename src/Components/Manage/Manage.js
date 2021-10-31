import React from "react";
import useAuth from "../../Hooks/useAuth";
import useConfirmedBookings from "../../Hooks/useConfirmedBookings";
import SingleBooking from "../SingleBooking/SingleBooking";
import './Manage.css';

const Manage = () => {
    const user = useAuth();
    const userEmail = user.user.email;
    const allBookings = useConfirmedBookings([]);
    let thisUserBookings = [];

    for (let i = 0; i < allBookings.length; i++)
    {
        if (allBookings[i].userEmail === userEmail) {
            thisUserBookings.push(allBookings[i]);
        }
    }

    return (
        <div className="manage-bookings">
            <div className="bookings-container">
                <h3>Manage Your Bookings {user.user.displayName}</h3>
                <div className="all-bookings">
                    {
                        thisUserBookings.map(booking => <SingleBooking
                            booking={booking}
                        ></SingleBooking>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Manage;