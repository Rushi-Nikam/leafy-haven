import React from "react";
import { Link } from "react-router-dom";
import seed from "../../images/Seeds/seeds.png";
import Card from "./Card";
import "./Seed.css";
const Seed = () => {
  return (
    <>
      <div className="flex mx-24 my-12 font-serif text-2xl">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <span className="color">/</span>Seed
      </div>
      <div className=" size flex justify-center ">
        <img className="" src={seed}></img>
      </div>

      <div className=" scroll-container my-10 mx-20 overflow-y-auto overflow-xauto ">
        <div className="  flex justify-center my-10">
          <Card 
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
        </div>
        <div className="  flex justify-center my-10">
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
        </div>
        <div className="  flex justify-center my-10">
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default Seed;
