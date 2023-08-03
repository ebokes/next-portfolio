import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { keyframes } from "@emotion/react";

const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const PulsatingCircle = () => {
  return (
    <Tooltip
      label="I am open to work"
      placement="right"
      arrowSize={15}
      bg={"#2a2a31"}
      color={"#9d9da0"}
    >
      <Box
        w="13px"
        h="13px"
        bg="#ffc107"
        borderRadius="50%"
        animation={`${pulsateAnimation} 1.5s infinite`}
      />
    </Tooltip>
  );
};

export default PulsatingCircle;
