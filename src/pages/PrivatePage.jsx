import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivatePage = () => {
    return (
        <div>
            <h1>private route</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default PrivatePage;