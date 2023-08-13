"use client";

import { Box, Flex } from "@chakra-ui/react";
import Contact from "../home/Contact";
import Hero from "../home/Hero";
import Projects from "../home/Projects";
import Services from "../home/Services";
import TechStacks from "../home/TechStack";
import Reviews from "../home/Reviews";

const Body = () => {
  return (
    <Box w={"100%"}>
      <Hero />
      <Flex
        mx={{ base: 0, md: "30px" }}
        mt={"30px"}
        flexDirection={"column"}
        gap={10}
      >
        <Services />
        <TechStacks />
        <Reviews />
        <Projects />
        <Contact />
      </Flex>
    </Box>
  );
};

export default Body;
