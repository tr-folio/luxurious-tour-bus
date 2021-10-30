import React from "react";
import "./NotFound.css";
import notFoundImg from "../../Images/not-found.png";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFoundImg}/>
        </div>
    );
}

export default NotFound;