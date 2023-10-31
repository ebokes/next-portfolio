"use client";

import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { projectsData } from "./constants";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
// @ts-ignore
import { useSpringCarousel } from "react-spring-carousel";
// import { useTransitionCarousel } from "react-spring-carousel";

export function Slider() {
  const arr = [
    { id: 1, title: "title1", color: "red" },
    { id: 2, title: "title2", color: "green" },
    { id: 3, title: "title3", color: "blue" },
  ];
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 1,
      //   slideType: "fluid",
      slideAmount: 1000,
      gutter: 24,
      withLoop: true,
      items: arr.map((i) => ({
        id: i.id,
        renderItem: (
          <Box w={40} h={200} bg={i.color}>
            {i.title}
          </Box>
        ),
      })),
    });

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem();
    }, 3000);
    return () => {
      window.clearInterval(timer);
    };
    // You MUST add the slide methods to the dependency list useEffect!
  }, [slideToNextItem]);

  return (
    <Flex maxW={"870px"} overflow={"hidden"} border={"1px solid blue"}>
      <IconButton
        aria-label="prev"
        icon={<MdOutlineChevronLeft />}
        onClick={slideToPrevItem}
      />
      {carouselFragment}
      <IconButton
        aria-label="next"
        icon={<MdOutlineChevronRight />}
        onClick={slideToNextItem}
      />
    </Flex>
  );
}
