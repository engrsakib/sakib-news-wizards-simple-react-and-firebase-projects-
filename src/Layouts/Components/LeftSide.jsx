import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        try {
            const allDataLoaded = async () => {
              const response = await fetch(
                " https://openapi.programming-hero.com/api/news/categories"
              );
              const data = await response.json();
              setData(data.data.news_category);
            };
            allDataLoaded();
        } catch (error) {
            console.log(error);
        }
    },[]);

    
    return (
      <>
        <div className="font-[600] text-[20px]">All Caterogy</div>
        <section className='flex flex-col gap-3 mt-3'>
          {data.map((ctg) => (
            <NavLink className='btn' key={ctg.category_id}>{ctg.category_name}</NavLink>
          ))}
        </section>
      </>
    );
};

export default LeftSide;