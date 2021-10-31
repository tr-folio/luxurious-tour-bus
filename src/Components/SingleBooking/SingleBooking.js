import React from 'react';
import './SingleBooking.css';

const SingleBooking = (props) => {
    let booking = props.booking;

    const handleDelete = (id) => {
        const deleteFlag = window.confirm('Do you want cancel tour?');
        if (!deleteFlag) {
            return;
        }
        const url = `https://desolate-savannah-73314.herokuapp.com/deletebooking/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Deleted successfully');
        })
    }

    return (
        <div className="single-booking bg-light">
            <h3>{booking.tourType}</h3>
            <p>{booking._id}</p>
            <p>Ticket NO: {booking.ticketNO}</p>
            <p>Bus Time: {booking.busTime}am</p>
            <p>Address: {booking.address}</p>
            <p>Phone: {booking.phone}</p>
            <p>Email: {booking.userEmail}</p>
            <p><button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Cancel Tour</button></p>
        </div>
    );
}

export default SingleBooking;