import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
    const {registerUser} = useAuth();
    const signUpData = {
        name: "",
        email: "",
        password1: "",
        password2: ""
    }

    // invoke handleInputData() onBlur i.e. when another
    // element is clicked
    const handleInputData = (event) => {
        signUpData[event.target.name] = event.target.value;
    }

    const handleSignUp = (event) => {
        event.preventDefault(); // prevent reloading on form submit
        if (signUpData.password1 !== signUpData.password2) {
            window.alert("Passwords are not matching");
        } else {
            registerUser(signUpData.email, signUpData.password1);
        }
    }

    return (
        <div className="signup-div">
            <h1>Please, create an account</h1>
            <div>
                <form onSubmit={handleSignUp}>
                    <fieldset>
                        <legend>Your Name:</legend>
                        <input onBlur={handleInputData} type="text" name="name" placeholder="Enter your name" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Your Email:</legend>
                        <input onBlur={handleInputData} type="email" name="email" placeholder="Enter your email address" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Create Password:</legend>
                        <input onBlur={handleInputData} type="password" name="password1" placeholder="Create a password" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Confirm Password:</legend>
                        <input onBlur={handleInputData} type="password" name="password2" placeholder="Confirm password" required/>
                    </fieldset> <br/>
                    <fieldset>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div> <br/>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    )
}

export default SignUp;