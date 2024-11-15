import React from "react";
import LeftSide from "../Layouts/Components/LeftSide";
import RightSide from "../Layouts/Components/RightSide";
import { Outlet } from "react-router-dom";

const ManiPage = () => {
  return (
    <>
      {/* left side */}
      <aside className="float-start col-span-3 max-sm:col-span-12">
        <LeftSide></LeftSide>
      </aside>
      <section className="col-span-6 max-sm:col-span-12">
        <Outlet></Outlet>
      </section>
      <aside className="float-start col-span-3 max-sm:col-span-12">
        <RightSide></RightSide>
      </aside>
    </>
  );
};

export default ManiPage;
