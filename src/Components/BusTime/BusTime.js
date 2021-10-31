import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './BusTime.css';

const BusTime = () => {
    const user = useAuth();
    const userName = user.user.displayName;
    const userEmail = user.user.email;
    const addressRef = useRef();
    const phoneRef = useRef();
    let ticketNO = Math.random()*20;
    ticketNO = parseInt(ticketNO);
    let busTime = Math.random()*(11-7)+7;
    busTime = parseInt(busTime);

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const newBooking = {userName, userEmail, ticketNO, busTime, address, phone};
    }

    return (
        <div className="bus-time-container">
            <div className="bus-time">
                <h1 className="text-info py-3">Name: {userName}</h1>
                <p className="text-warning">Email: {userEmail}</p>
                <h3>Ticket NO: {ticketNO}.</h3>
                <h3>Bus Time: {busTime}am.</h3>
                <form onSubmit={handleSubmit}>
                    Address: <br/>
                    <input ref={addressRef} type="text" placeholder="Enter address" required/>
                    <br/> <br/>
                    Phone (+880): <br/>
                    <input ref={phoneRef} type="text" placeholder="Enter phone" required/>
                    <br/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p className="pt-1"><button className="btn btn-primary"><Link to="/home">Go to Home</Link></button></p>
            </div>
        </div>
    );
}

export default BusTime;