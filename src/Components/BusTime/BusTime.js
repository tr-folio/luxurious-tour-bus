import React from "react";
import { Link } from "react-router-dom";
import './BusTime.css';

const BusTime = () => {
    let ticketNO = Math.random()*20;
    ticketNO = parseInt(ticketNO);
    let busTime = Math.random()*(11-7)+7;
    busTime = parseInt(busTime);
    return (
        <div className="visit-time-container">
            <div className="visit-time">
                <h1 className="text-info py-3">Ticket Booking Successful</h1>
                <h3>Your ticket NO is {ticketNO}.</h3>
                <h3>Your bus time is {busTime}am.</h3>
                <p className="pt-1"><button className="btn btn-primary"><Link to="/home">Go to Home</Link></button></p>
            </div>
        </div>
    );
}

export default BusTime;