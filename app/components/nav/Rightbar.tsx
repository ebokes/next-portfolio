"use client";

import {
  Box,
  Center,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
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
import { usePathname } from "next/navigation";
// import { Link as SLink } from "react-scroll";
// import ScrollLink from "./ScrollLink";
// import * as Scroll from 'react-scroll';

const Rightbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const path = usePathname();

  return (
    <Box position={{ base: "fixed", xl: "static" }} right={"15px"} zIndex={5}>
      <Flex bg={"#252530"} justify={isOpen ? "flex-start" : "center"}>
        <IconButton
          size={"lg"}
          variant={"ghost"}
          aria-label="Menu"
          onClick={handleToggle}
          icon={isOpen ? <MdClose /> : <MdMenu />}
          my={"10px"}
          // mx={"auto"}
          color={"#8c8c8e"}
          cursor={"pointer"}
          _hover={{ bg: "none" }}
        />
      </Flex>
      <Box
        overflowX={"hidden"}
        transition={"all 0.4s ease-out"}
        minW={isOpen ? "200px" : "70px"}
        bg={"#20202a"}
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        boxShadow={"xl"}
        h={"90vh"}
      >
        <Flex
          flexDir={"column"}
          my={5}
          gap={isOpen ? 4 : 2}
          align={isOpen ? "flex-start" : "center"}
          color={"#8c8c8e"}
        >
          <Link href={path.includes("/projects") ? "/" : "#home"}>
            <HStack _hover={{ color: "#ffc107" }}>
              <Box hidden={isOpen}>
                <Tooltip label="Home" placement="left">
                  <IconButton
                    aria-label="Home"
                    variant={"ghost"}
                    icon={<GoHomeFill />}
                    _hover={{ color: "#ffc107" }}
                    color={"#8c8c8e"}
                  />
                </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                HOME
              </Text>
            </HStack>
          </Link>
          <Link href="#about-me">
            <HStack _hover={{ color: "#ffc107" }}>
              <Box hidden={isOpen}>
                <Tooltip label="About Me" placement="left">
                  <IconButton
                    color={"#8c8c8e"}
                    aria-label="About Me"
                    variant={"ghost"}
                    icon={<BsPersonFill />}
                    _hover={{ color: "#ffc107" }}
                  />
                </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                ABOUT ME
              </Text>
            </HStack>
          </Link>
          <Link href="#services">
            <HStack _hover={{ color: "#ffc107" }}>
              <Box hidden={isOpen}>
                <Tooltip label="Services" placement="left">
                  <IconButton
                    color={"#8c8c8e"}
                    aria-label="Services"
                    variant={"ghost"}
                    icon={<MdOutlineMiscellaneousServices />}
                    _hover={{ color: "#ffc107" }}
                  />
                </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                SERVICES
              </Text>
            </HStack>
          </Link>
          {/* <ScrollLink href="#projects">
            <HStack  _hover={{ color: "#ffc107" }}>
            <Box hi dden={isOpen} >
              <Tooltip  label="Projects" placement="left">
                <IconButton
                  color={"#8c8c8e"}
                  aria-label="Projects"
                  variant={"ghost"}
                  icon={<IoIosBriefcase />}
                  _hover={{ color: "#ffc107" }}
                />
              </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                PROJECTS
              </Text>
            </HStack>
          </ScrollLink> */}
          <Link href="#projects">
            <HStack _hover={{ color: "#ffc107" }}>
              <Box hidden={isOpen}>
                <Tooltip label="Projects" placement="left">
                  <IconButton
                    color={"#8c8c8e"}
                    aria-label="Projects"
                    variant={"ghost"}
                    icon={<IoIosBriefcase />}
                    _hover={{ color: "#ffc107" }}
                  />
                </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                PROJECTS
              </Text>
            </HStack>
          </Link>
          <Link href="#contact-me">
            <HStack _hover={{ color: "#ffc107" }}>
              <Box hidden={isOpen}>
                <Tooltip label="Contact Me" placement="left">
                  <IconButton
                    color={"#8c8c8e"}
                    aria-label="Contact Me"
                    variant={"ghost"}
                    icon={<BiSolidMessage />}
                    _hover={{ color: "#ffc107" }}
                  />
                </Tooltip>
              </Box>
              <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                CONTACT ME
              </Text>
            </HStack>
          </Link>
        </Flex>
        <Flex
          gap={2}
          align={"center"}
          justify={isOpen ? "flex-start" : "center"}
          overflowX={"hidden"}
          ml={2}
        >
          <IconButton
            color={"#8c8c8e"}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            variant={"ghost"}
            _hover={{ variant: "ghost" }}
            icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          />
          {/* <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen} color={"#8c8c8e"}>
          {colorMode === "light" ? " LIGHT MODE" : " DARK MODE"}
        </Text> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Rightbar;
