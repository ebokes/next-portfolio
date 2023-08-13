import { Box, Tooltip, useColorMode } from "@chakra-ui/react";
import React from "react";

const PulsatingCircle = () => {
  const { colorMode } = useColorMode();
  return (
    <Tooltip
      label="I am open to work"
      placement="right"
      arrowSize={15}
      bg={"#2a2a31"}
      color={"#9d9da0"}
    >
      <>
        <Box
          className="circle"
          w="13px"
          h="13px"
          borderRadius="50%"
          bgColor={colorMode === "light" ? "brand.420" : "brand.400"}
          position="relative"
          zIndex="9"
        />
        <Box
          className="wrap"
          w="13px"
          h="13px"
          borderRadius="50%"
          animation="pulse 1s infinite"
          bgColor={colorMode === "light" ? "black" : "white"}
          position="absolute"
          top="0px"
          left="0px"
          css={{
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                opacity: 0.8,
              },
              "100%": {
                transform: "scale(1.5)",
                opacity: 0,
              },
            },
          }}
        />
      </>
    </Tooltip>
  );
};

export default PulsatingCircle;
