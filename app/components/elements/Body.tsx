"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Contact from "../home/Contact";
import Hero from "../home/Hero";
import Projects from "../home/Projects";
import Services from "../home/Services";

const Body = () => {
  return (
    <Box w={"100%"}>
      <Hero />
      <Flex
        mx={{ base: "15px", md: "30px" }}
        mt={"30px"}
        flexDirection={"column"}
        gap={10}
      >
        <Services />
        <Projects />
        <Contact />
      </Flex>
    </Box>
  );
};

export default Body;
