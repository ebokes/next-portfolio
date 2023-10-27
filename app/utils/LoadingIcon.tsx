"use client";

import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image
        src="/images/bounce.svg"
        height={70}
        width={70}
        alt="project loader"
      />
      {/* <MotionBox
        variants={loaderVariants}
        animate="animationOne"
        w={"30px"}
        h={"30px"}
        bg={"brand.400"}
        borderRadius={"50%"}
      ></MotionBox> */}
    </Center>
  );
};

export default LoadingIcon;
