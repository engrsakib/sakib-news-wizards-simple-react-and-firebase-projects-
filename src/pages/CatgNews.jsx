import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Ct from "./Ct";

const CatgNews = () => {
  const { data } = useLoaderData();
 
  return (
    <>
      <div className="mt-10 m-4 space-y-2">
        {data.map((ct, i) => (
          <Ct key={i} ct={ct}></Ct>
        ))}
      </div>
    </>
  );
};

export default CatgNews;
