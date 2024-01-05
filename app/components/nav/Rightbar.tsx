"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import { BsMoonStarsFill, BsPersonFill, BsSun } from "react-icons/bs";
import { GoCodeReview, GoHomeFill } from "react-icons/go";
import { IoIosBriefcase } from "react-icons/io";
import {
  MdClose,
  MdMenu,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiStackFill } from "react-icons/ri";

const Rightbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const path = usePathname();

  return (
    <>
      {/* Desktop */}
      <Box
        // position={{ base: "fixed", xl: "static" }}
        display={{ base: "none", lg: "block" }}
        right={"15px"}
        zIndex={5}
        h={"100vh"}
        bg={colorMode === "light" ? "brand.220" : "brand.620"}
      >
        {/* <Flex
          bg={colorMode === "light" ? "white" : "brand.680"}
          justify={"center"}
        ></Flex> */}
        <Box
          overflowX={"hidden"}
          // transition={"all 0.4s ease-out"}
          minW={"70px"}
          bg={colorMode === "light" ? "brand.220" : "brand.620"}
          // display={{ base: isOpen ? "block" : "none", md: "block" }}
          boxShadow={"xl"}
          h={"100vh"}
        >
          <Flex
            flexDir={"column"}
            my={5}
            gap={2}
            align={"center"}
            // color={colorMode === "light" ? "brand.280" : "brand.780"}
          >
            <Box>
              <Link
                textDecoration={"none"}
                href={path.includes("/project") ? "/" : "#home"}
              >
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="Home" placement="left">
                      <IconButton
                        aria-label="Home"
                        variant={"ghost"}
                        icon={<GoHomeFill />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>

            <Box display={path === "/" ? "block" : "none"}>
              <Link href="#about-me">
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="About Me" placement="left">
                      <IconButton
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                        aria-label="About Me"
                        variant={"ghost"}
                        icon={<BsPersonFill />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>
            <Box display={path === "/" ? "block" : "none"}>
              <Link href="#services">
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="Services" placement="left">
                      <IconButton
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                        aria-label="Services"
                        variant={"ghost"}
                        icon={<MdOutlineMiscellaneousServices />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>
            <Box display={path === "/" ? "block" : "none"}>
              <Link href="#tech-stack">
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="Techstack" placement="left">
                      <IconButton
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                        aria-label="Techstack"
                        variant={"ghost"}
                        icon={<RiStackFill />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>
            <Box display={path === "/" ? "block" : "none"}>
              <Link href="#recommendations">
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="recommendations" placement="left">
                      <IconButton
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                        aria-label="recommendations"
                        variant={"ghost"}
                        icon={<GoCodeReview />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>

            <Box display={path === "/" ? "block" : "none"}>
              <Link href="#projects">
                <HStack
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                >
                  <Box>
                    <Tooltip label="Projects" placement="left">
                      <IconButton
                        color={
                          colorMode === "light" ? "brand.280" : "brand.780"
                        }
                        aria-label="Projects"
                        variant={"ghost"}
                        icon={<IoIosBriefcase />}
                        _hover={{
                          color:
                            colorMode === "light" ? "brand.420" : "brand.400",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </HStack>
              </Link>
            </Box>
            <Link
              href={path.includes("/project") ? "/#contact-me" : "#contact-me"}
            >
              <HStack
                _hover={{
                  color: colorMode === "light" ? "brand.420" : "brand.400",
                }}
              >
                <Box>
                  <Tooltip label="Contact Me" placement="left">
                    <IconButton
                      color={colorMode === "light" ? "brand.280" : "brand.780"}
                      aria-label="Contact Me"
                      variant={"ghost"}
                      icon={<BiSolidMessage />}
                      _hover={{
                        color:
                          colorMode === "light" ? "brand.420" : "brand.400",
                      }}
                    />
                  </Tooltip>
                </Box>
              </HStack>
            </Link>
          </Flex>
          <Flex
            gap={2}
            align={"center"}
            justify={"center"}
            overflowX={"hidden"}
            ml={0}
          >
            <IconButton
              mt={5}
              color={colorMode === "light" ? "brand.280" : "brand.780"}
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              variant={"ghost"}
              _hover={{
                color: colorMode === "light" ? "brand.420" : "brand.400",
              }}
              icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Rightbar;
