"use client";

import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Image } from "@chakra-ui/react";
// import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const Carousel = ({ pictures }: any) => {
  return (
    <Box w={"full"}>
      <Swiper
        // rewind={true}
        spaceBetween={5} // Adjust the spacing between slides as needed
        slidesPerView={2} // Display two slides at a time
        slidesPerGroup={1} // Display three pictures at a time
        loop={true} // Enable continuous loop
        // navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {pictures.map((picture: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={picture}
              alt={`Slide ${index + 1}`}
              w={"690px"}
              h={"277px"}
              // width={400}
              // height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
