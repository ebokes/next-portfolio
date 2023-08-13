"use client";

import React from "react";
import Projects from "../components/home/Projects";
import BodyWrap from "../components/nav/Nav";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import BackButton from "../components/elements/BackButton";

const ProjectList = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={colorMode === "light" ? "brand.100" : "brand.600"}>
      <Flex
        justify={"space-between"}
        w={"full"}
        overflow={"hidden"}
        align={"flex-start"}
        maxW={"1440px"}
        mx={"auto"}
      >
        <BodyWrap>
          <Box maxW={"990px"} mx={{ base: "15px", md: "30px" }} my={6}>
            <BackButton />
            <Projects />
          </Box>
        </BodyWrap>
      </Flex>
    </Flex>
  );
};

export default ProjectList;
