import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

const Carousel = ({ pictures }: any) => {
  return (
    <Swiper
      spaceBetween={2} // Adjust the spacing between slides as needed
      slidesPerView={2} // Display two slides at a time
      slidesPerGroup={3} // Display three pictures at a time
      loop={true} // Enable continuous loop
      navigation // Enable navigation arrows
      pagination={{ clickable: true }} // Enable pagination dots
    >
      {pictures.map((picture: any, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={picture}
            alt={`Slide ${index + 1}`}
            width={400}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
