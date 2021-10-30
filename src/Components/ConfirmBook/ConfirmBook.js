import React from "react";
import { Link } from "react-router-dom";
import './ConfirmBook.css';

const ConfirmVisit = (props) => {
    let i = 0;
    const id = props.id;
    const services = props.services;
    console.log('from confirm visit page', services);
    let selectedService = [];
    // debugging
    for (i = 0; i < services.length; i++)
    {
        if (services[i].id == id) {
            // console.log(services[i]);
            selectedService = services[i];
            console.log(selectedService);
        }
    }
    return (
        <div className="service-detail">
            <div className="selected-service-info border bg-light">
                <h3 className="bg-dark text-light text-center py-3 mb-0">Confirm Visit</h3>
                <p className="service-detail-image">
                    <img src={selectedService.img}/>
                </p>
                <h3 className="px-2">{selectedService.servicename}</h3>
                <p className="px-2 text-secondary">{selectedService.description}</p>
                <p className="px-2"><button className="confirm-visit-btn bg-dark px-5 py-2"><Link to="/busTime">Confirm Visit</Link></button></p>
            </div>
        </div>
    );
}

export default ConfirmVisit;