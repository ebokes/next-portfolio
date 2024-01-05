"use client";

import RightbarDrawer from "@/app/utils/RightbarDrawer";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

interface NavbarProps {
  onOpen: () => void;
  // rightOnOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen: rightOnOpen, onClose } = useDisclosure();
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
      justify={"space-between"}
    >
      {/* <Box position={"relative"}> */}
      <Button
        px={0}
        onClick={onOpen}
        display={{ base: "block", lg: "none" }}
        zIndex={150}
      >
        <Avatar
          size={"xs"}
          name="Chibuokem Egbuchulam"
          src="/images/chibu-avatar.webp"
        />
      </Button>
      <Flex>
        <IconButton
          color={colorMode === "light" ? "brand.280" : "brand.780"}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          variant={"ghost"}
          _hover={{
            color: colorMode === "light" ? "brand.420" : "brand.400",
          }}
          icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        />
        <IconButton
          aria-label="Menu"
          icon={<MdMenu />}
          variant={"ghost"}
          onClick={rightOnOpen}
          color={colorMode === "light" ? "brand.280" : "brand.780"}
          fontSize={"25px"}
        />
        <RightbarDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
