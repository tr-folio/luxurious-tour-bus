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
    const loginData = {
        email: "",
        password: ""
    }

    const handleInputData = (event) => {
        loginData[event.target.name] = event.target.value;
    }

    const handleLogin = (event) => {
        event.preventDefault(); // prevent reloading on form submit
    }

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
                <h3>Please, login</h3>
                <div>
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            <legend>Your Email:</legend>
                            <input onBlur={handleInputData} type="email" name="email" placeholder="Enter your email address" required/>
                        </fieldset>
                        <fieldset>
                            <legend>Enter Password:</legend>
                            <input onBlur={handleInputData} type="password" name="password" placeholder="Enter password" required/>
                        </fieldset> <br/>
                        <fieldset>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </fieldset>
                    </form>
                </div> <br/>
                <p>Do not have an account? <Link to="/signup">Sign-up here</Link></p>
                <h3>Google Login</h3>
                <div>
                    <button className="btn btn-primary" onClick={handleGoogleLogin}>Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;