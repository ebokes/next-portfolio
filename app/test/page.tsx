"use client";

import React from "react";
import Carousel from "../components/Carousel";

const Test = () => {
  const pictures = [
    "/images/chitchat.webp",
    "/images/quizbee.webp",
    "/images/backdrop.webp",
    "/images/backdrop2.webp",
    "/images/backdrop3.webp",
  ];
  return (
    <>
      <Carousel pictures={pictures} />
    </>
  );
};

export default Test;
