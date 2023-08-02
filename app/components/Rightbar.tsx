"use client";

import {
  Box,
  Center,
  IconButton,
  Tooltip,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsMoonStarsFill, BsPersonFill, BsSun } from "react-icons/bs";
import {
  MdClose,
  MdMenu,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessage } from "react-icons/bi";
import { IoIosBriefcase } from "react-icons/io";

const Rightbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      minW={"70px"}
      bg={"#20202a"}
      // h={"96vh"}
      display={{ base: "none", lg: "block" }}
      boxShadow={"xl"}
    >
      <Center bg={"#252530"}>
        <IconButton
          size={"lg"}
          variant={"ghost"}
          aria-label="Menu"
          onClick={handleToggle}
          icon={isOpen ? <MdClose /> : <MdMenu />}
          my={"10px"}
          mx={"auto"}
          cursor={"pointer"}
          _hover={{ bg: "none" }}
        />
      </Center>
      <VStack my={5} gap={2}>
        <Tooltip label="Home" placement="left">
          <IconButton
            aria-label="Home"
            variant={"ghost"}
            icon={<GoHomeFill />}
            _hover={{ color: "#ffc107" }}
          />
        </Tooltip>
        <Tooltip label="About Me" placement="left">
          <IconButton
            aria-label="About Me"
            variant={"ghost"}
            icon={<BsPersonFill />}
            _hover={{ color: "#ffc107" }}
          />
        </Tooltip>
        <Tooltip label="Services" placement="left">
          <IconButton
            aria-label="Services"
            variant={"ghost"}
            icon={<MdOutlineMiscellaneousServices />}
            _hover={{ color: "#ffc107" }}
          />
        </Tooltip>
        <Tooltip label="Projects" placement="left">
          <IconButton
            aria-label="Projects"
            variant={"ghost"}
            icon={<IoIosBriefcase />}
            _hover={{ color: "#ffc107" }}
          />
        </Tooltip>
        <Tooltip label="Contact Me" placement="left">
          <IconButton
            aria-label="Contact Me"
            variant={"ghost"}
            icon={<BiSolidMessage />}
            _hover={{ color: "#ffc107" }}
          />
        </Tooltip>
      </VStack>
      <Center>
        <IconButton
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          variant={"ghost"}
          _hover={{ variant: "ghost" }}
          icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        />
      </Center>
    </Box>
  );
};

export default Rightbar;
