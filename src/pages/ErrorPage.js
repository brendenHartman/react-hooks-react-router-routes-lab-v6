import { useRouteError } from "react-router-dom";
import React from 'react';
import NavBar from "../components/NavBar";

function ErrorPage(){

    const error = useRouteError();
    console.error(error);
  
    return (
        <>
            <NavBar />
            <h1>Oops! Looks like something went wrong.</h1>
        </>
    );
}

export default ErrorPage;