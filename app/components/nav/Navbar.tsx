"use client";

import { Avatar, Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

interface NavbarProps {
  onOpen: () => void;
  // rightOnOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      h={"68px"}
      bg={colorMode === "light" ? "white" : "brand.680"}
      align={"center"}
      px={"15px"}
      position={"fixed"}
      right={"15px"}
      left={"15px"}
      zIndex={1}
      top={"15px"}
      display={{ base: "flex", lg: "none" }}
      boxShadow={"lg"}
    >
      <Button px={0} onClick={onOpen} display={{ base: "block", lg: "none" }}>
        <Avatar
          size={"xs"}
          name="Chibuokem Egbuchulam"
          src="/images/chibu-avatar.webp"
        />
      </Button>
    </Flex>
  );
};

export default Navbar;
