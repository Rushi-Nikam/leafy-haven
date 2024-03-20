import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const SliderImage = [
  {
    url: "./../images/Flowerings/flowering_plants.jpg",
    contion: "data",
  },
  {
    url: "./../images/Flowerings/flowering_plants.jpg",
  },
  {
    url: "./../images/Flowerings/flowering_plants.jpg",
  },
];
const divStyle = {
  display: "flex",
  alignItems: "center",
  JustifyContent: "center",
  height: "400px",
  backgroundSize: "cover",
};
const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
};
const ImageSlider = () => {
  return (
    <>
      <div className="Slider-container">
        <Slide>
          {SliderImage.map((image, index) => {
            <div key={index}>
              <div
                style={{ ...divStyle, backgraundImage: `url(${image.url})` }}
              >
                {/* {console.log(image)} */}
                <span style={spanStyle}>{image.caption}</span>
              </div>
            </div>;
          })}
        </Slide>
      </div>
    </>
  );
};

export default ImageSlider;
