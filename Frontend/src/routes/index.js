import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Login from "../views/Login";
import Home from "../views/Home";

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props => isAuthenticated() ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{ pathname: "/home", state:{ from:props.location}}}   />
    )}
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;