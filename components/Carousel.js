import Image from "next/image";
import React, { useEffect, useState } from "react";
// import userOneImg from "../public/images/1.png";
// import userTwoImg from "../public/images/2.png";
// import userThreeImg from "../public/images/3.png";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoPlay: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
};

export default function Carousel() {
  const urls = ["./images/1.png", "./images/2.png", "./images/3.png"];
  return (
    <Slider {...settings}>
      {urls.map((url) => (
        <div>
          <img
            className="object-cover mx-auto object-center w-3/4 mb-10 h-[300px] g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src={url}
          />
        </div>
      ))}
    </Slider>
  );
}
