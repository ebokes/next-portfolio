"use client";

import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const Rightbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        variant={"ghost"}
        _hover={{ variant: "ghost" }}
        icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      />
    </Box>
  );
};

export default Rightbar;
