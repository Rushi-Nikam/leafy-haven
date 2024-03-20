import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import background from "../../images/Plant/plants.png";
import { createClient } from "pexels";
import "./Plant.css";

const client = createClient(
  "FS3RTp9Te5Hu8UGFDpjpYozbapyfwHeu3N6pJG6D2qf1teRixrPHBXRG"
);

const Plant = () => {
  console.log(client.photos.random);

  return (
    <>
      <div className="flex mx-24 my-12 font-serif text-2xl">
        <span>
          <Link to="/">Home</Link>
        </span>
        /<h2>plants</h2>
      </div>

      <img className="size" src={background} alt="plant img" />
      <h1 className=" my-12 mx-24 text-6xl">Plant</h1>
      <p className=" my-12 mx-24  text-3xl">
        Plants are great for keeping you company at home. They come in all kinds
        of types and look good with any style you have. LeafyHeaven has lots of
        different plants for you to pick from. You can buy them online without
        leaving your house!
      </p>
      <div className=" scroll-container my-10 mx-20 overflow-y-auto">
        <div className="  flex justify-center my-10">
          {/* Add your Card components here */}
        </div>
      </div>
      <div className=" scroll-container my-10 mx-20 overflow-y-auto overflow-xauto ">
        <div className="  flex justify-center my-10">
          {/* {plantsData && plantsData.map((plant) => (
            <Card
              image={plant.img}
              alt={plant.name}
              title={plant.name}
              link={plant.url}
            />
          ))} */}

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
        <div className=" flex justify-center my-10">
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
            link=""
          />
          <Card
            image="Twisted Hoya.jpg"
            alt="Twisted Hoya"
            title="Twisted Hoya"
            link="#"
          />
        </div>
        <div className=" flex justify-center my-15">
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
        <hr />
      </div>
      <br />
      <br />
    </>
  );
};

export default Plant;
