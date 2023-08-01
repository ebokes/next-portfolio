"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./body/Hero";
import Services from "./body/Services";
import Contact from "./body/Contact";

const Body = () => {
  return (
    <Flex w={"full"} flexDirection={"column"}>
      <Flex
        w={"full"}
        m={"30px"}
        backgroundImage={"images/backdrop.webp"}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Flex w={"full"}>
          <Hero />
        </Flex>
      </Flex>
      <Flex m={"30px"} flexDirection={"column"} gap={10}>
        <Services />
        <Contact />
      </Flex>
    </Flex>
  );
};

export default Body;
