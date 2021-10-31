import React, { useEffect, useState } from "react";

const useServicesDb = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-savannah-73314.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return services;
}

export default useServicesDb;