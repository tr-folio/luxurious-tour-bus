import React, { useEffect, useState } from "react";

const useConfirmedBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://desolate-savannah-73314.herokuapp.com/confirmedbooking')
        .then(res => res.json())
        .then(data => setAllBookings(data));
    }, []);
    return allBookings;
}

export default useConfirmedBookings;