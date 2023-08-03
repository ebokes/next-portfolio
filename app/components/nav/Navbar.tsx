"use client";

import { Avatar, Button, Flex } from "@chakra-ui/react";
import React from "react";

interface NavbarProps {
  toggleLeftbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleLeftbar }) => {
  return (
    <Flex
      h={"68px"}
      // w={"full"}
      bg={"#252530"}
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
      <Button
        px={0}
        onClick={toggleLeftbar}
        display={{ base: "block", lg: "none" }}
      >
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
