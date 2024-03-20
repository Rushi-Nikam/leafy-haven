import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import indoor from "../../images/Indoors/data.jpg";
function Card() {
  return (
    <div className="addCart">
      <div className="card">
        <img src={indoor} className="card-img-top" alt="..." />
        <h5 className=" title flex justify-center">Twisted Hoya</h5>
        <Link to="/Pro/" className="btn">
          View product
        </Link>
      </div>
    </div>
  );
}

export default Card;
