import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SocialLogIn = () => {
    return (
      <>
        <div className="w-full">
          <h1 className="subHeading">LogIn with</h1>
          <div className="space-y-2 mt-2 flex flex-col">
            <NavLink className="btn w-full">
              <FaGoogle /> Login with google
            </NavLink>
            <NavLink className="btn w-full">
              <FaGithub /> Login with github
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default SocialLogIn;