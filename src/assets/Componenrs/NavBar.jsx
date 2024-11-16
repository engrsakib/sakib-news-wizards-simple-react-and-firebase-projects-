import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { authContex } from '../../provider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(authContex);

    const link = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/career'>Career</NavLink>
        <NavLink to='/about'>About</NavLink>
    </>
    return (
      <div className="flex justify-between items-center mt-4">
        <div>
          <h1>{user && user.displayName}</h1>
        </div>
        <div className="space-x-3 m-3">{link}</div>
        <div className="logIn flex items-center gap-2">
          <div className="">
            {user ? (
              <img
                className="w-[60px] h-[60px] rounded-full shadow-sm border bottom-1"
                src={user.photoURL}
              ></img>
            ) : (
              <FaUserAlt className="text-4xl border border-gray-500 rounded-full" />
            )}
          </div>
          {!user ? (
            <Link to="/auth/logIn" className="btn btn-secondary">
              LogIn
            </Link>
          ) : (
            <button onClick={logOut} className="btn btn-secondary">
              LogOut
            </button>
          )}
        </div>
      </div>
    );
};

export default NavBar;