import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const FindsUs = () => {
    return (
      <>
        <div className="mt-8">
          <h1 className="subHeading">Find Us on</h1>

          <div className="mt-2 join flex join-vertical">
            <NavLink className="btn join-item">
              <FaFacebook /> Facebook
            </NavLink>
            <NavLink className="btn join-item">
              <FaLinkedin /> LinkdIn
            </NavLink>
            <NavLink className="btn join-item">
              <FaXTwitter /> Twitter
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default FindsUs;