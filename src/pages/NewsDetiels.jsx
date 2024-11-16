import React, { useEffect, useState } from "react";
import RightSide from "../Layouts/Components/RightSide";
import Header from "../assets/Componenrs/Header";
import NavBar from "../assets/Componenrs/NavBar";
import Footer from "../assets/Componenrs/Footer";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetiels = () => {
    const data = useLoaderData();
    const [news, setnews] = useState(null);
    useEffect(()=>{
        setnews(data.data[0]);
    },[]);
    // console.log(news)
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <main className="w-11/12 grid grid-cols-12 gap-5 mb-4">
        <section className="col-span-9">
          <h1 className="subHeading">Dragon News</h1>
          <div>
            <div className="card card-compact bg-base-100 w-full shadow-xl">
              <figure className="w-full">
                <img className="w-full" src={news?.thumbnail_url} alt="news" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{news?.title}</h2>
                <p>{news?.details}</p>
                <div className="card-actions">
                  <Link
                    to={`/category/${news?.category_id}`}
                    className="btn w-full btn-primary"
                  >
                    Go back{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
};

export default NewsDetiels;
