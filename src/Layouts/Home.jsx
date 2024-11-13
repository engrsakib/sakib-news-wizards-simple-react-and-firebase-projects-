import React from 'react';
import Header from '../assets/Componenrs/Header';
import LetestNews from '../assets/Componenrs/LetestNews';
import NavBar from '../assets/Componenrs/NavBar';

const Home = () => {
    return (
      <>
        <header>
          <Header></Header>
          <section className='w-11/12 mx-auto'>
            <LetestNews></LetestNews>
          </section>
          {/* navBar */}
          <section className='w-11/12 mx-auto'>
            <NavBar></NavBar>
          </section>
        </header>
      </>
    );
};

export default Home;