import { Flex } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex w={"full"}>
      <Flex
        // position="absolute" // Position the gradient layer absolutely inside the parent
        // top="0"
        // left="0"
        // right="0"
        // bottom="0"
        bg="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" // Customize your gradient here
        w={"full"}
      >
        {/* <Flex backgroundImage={"images/backdrop.webp"} opacity={0.3}></Flex> */}

        <Flex
          backgroundImage={"images/backdrop.webp"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          h={"200px"}
          w={"full"}
          p={"30px"}
        >
          Background
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
