"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./body/Hero";
import Services from "./body/Services";
import Contact from "./body/Contact";
import Projects from "./body/Projects";

const Body = () => {
  return (
    <Box w={"100%"}>
      <Hero />
      <Flex mx={"30px"} mt={"30px"} flexDirection={"column"} gap={10}>
        <Services />
        <Projects />
        <Contact />
      </Flex>
    </Box>
  );
};

export default Body;
