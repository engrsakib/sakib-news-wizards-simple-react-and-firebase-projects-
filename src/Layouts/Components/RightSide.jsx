import React from 'react';
import SocialLogIn from '../../assets/Componenrs/SocialLogIn';
import FindsUs from '../../assets/Componenrs/FindsUs';
import Qzone from './Qzone';

const RightSide = () => {
    return (
      <>
        <section className='space-y-3'>
          <SocialLogIn></SocialLogIn>
          <FindsUs></FindsUs>
          <Qzone></Qzone>
        </section>
      </>
    );
};

export default RightSide;