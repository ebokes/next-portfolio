import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Title } from "@/app/utils/reuseables";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/app/utils/constants";

interface CarouselProps {
  children: React.ReactNode;
  width: number[];
}

const NextArrow = ({ onClick }: any) => {
  return (
    <Box onClick={onClick} position={"absolute"} bottom="-50px" right="0px">
      <FaAngleRight />
    </Box>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <Box onClick={onClick} position={"absolute"} bottom="-50px" right="20px">
      <FaAngleLeft />
    </Box>
  );
};

const Carousel = ({ children, width }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "8px",
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      //   {
      //     breakpoint: 1200,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   const width = [35, 150, 450, 990];

  return (
    <Box id="reviews">
      <Box
        display="block"
        maxW={{
          base: viewportWidth - width[0],
          md: viewportWidth - width[1],
          lg: viewportWidth - width[2],
          xl: width[3],
        }}
        // maxW={{
        //   base: viewportWidth - 35,
        //   md: viewportWidth - 150,
        //   lg: viewportWidth - 450,
        //   xl: 990,
        // }}
      >
        <Slider {...settings}>{children}</Slider>
      </Box>
    </Box>
  );
};

export default Carousel;
