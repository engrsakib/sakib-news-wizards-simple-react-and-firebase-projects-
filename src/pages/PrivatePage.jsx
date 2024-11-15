import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../assets/Componenrs/NavBar';

const PrivatePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default PrivatePage;