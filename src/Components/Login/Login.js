import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Login.css';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        })
        .catch(error => {
            setError(error.message);
            console.log(error.message);
        })
    }

    return (
        <div className="login-container d-flex justify-content-center">
            <div className="pt-5">
                <div className="text-danger">{error}</div>
                <h3>Google Login</h3>
                <div>
                    <button className="btn btn-primary" onClick={handleGoogleLogin}>Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;