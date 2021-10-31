import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './ConfirmBook.css';

const ConfirmVisit = (props) => {
    const user = useAuth();
    const userName = user.user.displayName;
    const userEmail = user.user.email;
    const addressRef = useRef();
    const phoneRef = useRef();
    let ticketNO = Math.random()*20;
    ticketNO = parseInt(ticketNO);
    let busTime = Math.random()*(11-7)+7;
    busTime = parseInt(busTime);
    let i = 0;
    const id = props.id;
    const services = props.services;
    console.log('from confirm visit page', services);
    let selectedService = [];

    // find selected service
    for (i = 0; i < services.length; i++)
    {
        if (services[i].id == id) {
            // console.log(services[i]);
            selectedService = services[i];
            console.log(selectedService);
        }
    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const tourType = selectedService.servicename;
        const newBooking = {
            userName: userName,
            userEmail: userEmail,
            tourType: tourType,
            ticketNO: ticketNO,
            busTime: busTime,
            address: address,
            phone: phone
        };
        console.log(newBooking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(error => console.log(error.message))
    }

    return (
        <div className="service-detail">
            <div className="selected-service-info border bg-light">
                <h3 className="bg-dark text-light text-center py-3 mb-0">Confirm Book</h3>
                <p className="service-detail-image">
                    <img src={selectedService.img}/>
                </p>
                <h3 className="px-2">{selectedService.servicename}</h3>
                <p className="px-2 text-secondary">{selectedService.description}</p>
                <h3 className="text-primary px-2">Name: {userName}</h3>
                <p className="text-primary px-2">Email: {userEmail}</p>
                <h3 className="px-2">Ticket NO: {ticketNO}.</h3>
                <h3 className="px-2">Bus Time: {busTime}am.</h3>
                <form onSubmit={handleSubmit} className="px-2">
                    Address: <br/>
                    <input ref={addressRef} type="text" placeholder="Enter address" required/>
                    <br/> <br/>
                    Phone (+880): <br/>
                    <input ref={phoneRef} type="text" placeholder="Enter phone" required/>
                    <br/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p className="px-2"><button className="confirm-visit-btn bg-dark px-5 py-2"><Link to="/busTime">Confirm Book</Link></button></p>
            </div>
        </div>
    );
}

export default ConfirmVisit;