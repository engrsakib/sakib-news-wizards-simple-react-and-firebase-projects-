import moment from 'moment';
import React from 'react';

const Header = () => {
    const logo =
      "https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/assets/logo.png?raw=true";
    return (
      <>
        <div>
          <div className="w-80% mt-11">
            <img className="mx-auto" src={logo} alt="" />
          </div>
          <h1 className='text-center text-gray-300'>Think today's grow tomoorow</h1>
          <p className='text-center text-gray-400'>{moment().format('dddd, MMMM Do YYYY h:mm:ss a')}</p>
        </div>
      </>
    );
};

export default Header;