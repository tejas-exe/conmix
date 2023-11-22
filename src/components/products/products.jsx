import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Grid, Paper } from "@mui/material";
import s from "./style.module.css";
import { green } from "@mui/material/colors";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: "50px",
        height: "50px",
        borderRadius: "20px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "blue",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}
export default function Products() {
  const images = [
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: <SampleArrow />,
          prevArrow: <SampleArrow />,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnDotsHover: true,
          pauseOnHover: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={s.productPage}>
      <div className={s.proudct1}>
        <span className={s.productBtn}>Proudct Usage</span>
        <h1 className={s.productHeading}>Our Products</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={s.productcontainer}>
            <img
              src={image}
              alt={`Product ${index}`}
              className={s.productIMG}
              style={{
                height: "100%",
                maxWidth:
                  "100%" /* Ensure the image doesn't exceed the container's width */,
                maxHeight:
                  "100%" /* Ensure the image doesn't exceed the container's height */,
                display:
                  "block" /* Remove any extra spacing or alignment issues */,
                margin:
                  "0 auto" /* Center the image horizontally within the div */, // Set the width of the image to 100%
                borderRadius: "20px",
              }}
            ></img>
          </div>
        ))}
      </Slider>
    </div>
  );
}
