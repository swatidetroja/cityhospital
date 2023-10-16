import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

function PrivateRoute(props) {
    let auth = true;
    return (
       auth ? <Outlet/> : <Navigate  to ={"/auth"}/>
    );
}

export default PrivateRoute;