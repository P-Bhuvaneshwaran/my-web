import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
// import React, {useEffect} from 'react';
import auth from '../Config';
function Home(){

    return (
        <>
            <h2>Home</h2>
        </>
    )
}

export default Home;