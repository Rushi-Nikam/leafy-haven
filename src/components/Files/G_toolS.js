import React from "react";
import { NavLink } from "react-router-dom";
import tools from "../../images/Lmain/G_tools.png";
const G_toolS = () => {
  return (
    <>
      <div className="flex mx-24 my-12 font-serif text-2xl">
        <span>
          <NavLink to="/">Home</NavLink>
        </span>
        /<h2>Gardening Tools</h2>
      </div>
      <div>
        <img src={tools}></img>
      </div>
      <div>
        <h1 className="my-12 mx-24 text-6xl">Gardening Tools </h1>
      </div>
    </>
  );
};

export default G_toolS;
