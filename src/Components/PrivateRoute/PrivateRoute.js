import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const {user} = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
}

export default PrivateRoute;