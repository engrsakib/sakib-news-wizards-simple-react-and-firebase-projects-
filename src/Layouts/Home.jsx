import React from 'react';
import Header from '../assets/Componenrs/Header';
import LetestNews from '../assets/Componenrs/LetestNews';
import NavBar from '../assets/Componenrs/NavBar';
import { Helmet } from 'react-helmet';
import LeftSide from './Components/LeftSide';

const Home = () => {
    return (
      <>
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto">
            <LetestNews></LetestNews>
          </section>
          {/* navBar */}
          <section className="w-11/12 mx-auto">
            <NavBar></NavBar>
          </section>
        </header>
        <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        {/* left side */}
          <aside className="float-start col-span-3">
          <LeftSide></LeftSide>
          </aside>
          <section className="col-span-6">news</section>
          <aside className="float-start col-span-3">right side</aside>
        </main>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="icon" type="image/svg+xml" href="/home.png" />
        </Helmet>
      </>
    );
};

export default Home;