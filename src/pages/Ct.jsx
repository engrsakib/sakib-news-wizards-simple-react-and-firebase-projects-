import React from "react";
import { Helmet } from "react-helmet";
import { BiShowAlt } from "react-icons/bi";
import { CgKey } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Ct = ({ ct }) => {
  const {
    author,
    category_id,
    total_view,
    _id,
    details,
    image_url,
    rating,
    thumbnail_url,
    others_info,
    title,
  } = ct;

  return (
    <>
      {
        <div className="border border-gray-200">
          <div className="bg-gray-200 rounded-md p-4 flex justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[50px] rounded-full"
                src={author.img}
                alt="author"
              />
              <div>
                <h1 className="text-[16px] font-[600]">{`${
                  author.name ? author.name : "Annonymas"
                }`}</h1>
                <p className="text-[16px] text-gray-400">
                  {author.published_date}
                </p>
              </div>
            </div>
            <div className="flex text-2xl *:cursor-pointer">
              <CiBookmark />
              <FaShareAlt />
            </div>
          </div>
          <div className="p-4">
            <h1 className="font-[700] text-[20px] text-black">{title}</h1>
            <img className="w-full h-80" src={thumbnail_url} alt="" />

            <p className="text-[16px] font-[600] p-2">
              {details} <br />
              <span className="text-rose-700">
                <Link to={`/news/${_id}`}>Read More..</Link>
              </span>
            </p>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {/* reating */}
                <div className="rating rating-lg rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-orange-400"
                  />
                </div>
                <h1 className="font-[500] text-[16px]">{rating.number}</h1>
              </div>
              <div className="flex items-center gap-2">
                <BiShowAlt className="text-2xl font-black" />
                <p>{total_view}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Ct;
