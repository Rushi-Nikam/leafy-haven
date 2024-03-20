import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
const Pro = (prop, params) => {
  // console.log(useParams("id"))
  return (
    <>
      <div className="flex mx-24 my-12 font-serif text-2xl">
        <span>
          <Link to="/">Home</Link>
        </span>
        /<Link to="/Plant">plants</Link>/{prop.items}
      </div>
      <div className="flex justify-around">
        <div>image</div>
        <div>description</div>
      </div>
    </>
  );
};

export default Pro;
