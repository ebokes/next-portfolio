import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      backgroundImage={"images/backdrop.webp"}
      backgroundPosition={"top"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      h={"400px"}
    >
      Background
    </Flex>
  );
};

export default Hero;
