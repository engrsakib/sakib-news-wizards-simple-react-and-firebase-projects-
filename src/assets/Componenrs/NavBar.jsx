import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const link = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/career'>Career</NavLink>
        <NavLink to='/about'>About</NavLink>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div>

            </div>
            <div className='space-x-3 m-3'>
            {
                link
            }
            </div>
            <div className='logIn'> 
                
            </div>
        </div>
    );
};

export default NavBar;