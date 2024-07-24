import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Results from '../Pages/HomePage/Results';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='/' element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='results' element={<Results />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
};





export default Routing;
