"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface CarouselProps {
  children: React.ReactNode;
}

const NextArrow = ({ onClick }: any) => {
  return (
    <Box
      cursor={"pointer"}
      onClick={onClick}
      position={"absolute"}
      bottom="-50px"
      right="0px"
    >
      <FaAngleRight />
    </Box>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <Box
      cursor={"pointer"}
      onClick={onClick}
      position={"absolute"}
      bottom="-50px"
      right="20px"
    >
      <FaAngleLeft />
    </Box>
  );
};

const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerPadding: 18,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box id="reviews">
      <Box display="block">
        <Slider {...settings}>{children}</Slider>
      </Box>
    </Box>
  );
};

export default Carousel;
