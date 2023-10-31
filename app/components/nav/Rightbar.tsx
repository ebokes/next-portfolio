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
import React from "react";
import { BiSolidMessage } from "react-icons/bi";
import { BsMoonStarsFill, BsPersonFill, BsSun } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoIosBriefcase } from "react-icons/io";
import {
  MdClose,
  MdMenu,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

const Rightbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const path = usePathname();
  // const { isOpen: open, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Desktop */}
      <Box
        position={{ base: "fixed", xl: "static" }}
        right={"15px"}
        zIndex={5}
        h={"100vh"}
      >
        <Flex
          bg={colorMode === "light" ? "white" : "brand.680"}
          justify={isOpen ? "flex-start" : "center"}
        >
          <IconButton
            size={"lg"}
            variant={"ghost"}
            aria-label="Menu"
            onClick={handleToggle}
            icon={isOpen ? <MdClose /> : <MdMenu />}
            my={"10px"}
            cursor={"pointer"}
            // _hover={{ bg: "none" }}
            _hover={{
              color: colorMode === "light" ? "brand.420" : "brand.400",
            }}
          />
        </Flex>
        <Box
          overflowX={"hidden"}
          transition={"all 0.4s ease-out"}
          minW={isOpen ? "200px" : "70px"}
          bg={colorMode === "light" ? "brand.220" : "brand.620"}
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          boxShadow={"xl"}
          h={"100vh"}
        >
          <Flex
            flexDir={"column"}
            my={5}
            gap={isOpen ? 4 : 2}
            align={isOpen ? "flex-start" : "center"}
            color={colorMode === "light" ? "brand.280" : "brand.780"}
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
                  <Box hidden={isOpen}>
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
                  <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                    HOME
                  </Text>
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
                  <Box hidden={isOpen}>
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
                  <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                    ABOUT ME
                  </Text>
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
                  <Box hidden={isOpen}>
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
                  <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                    SERVICES
                  </Text>
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
                  <Box hidden={isOpen}>
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
                  <Text ml={5} w={"150px"} fontSize={"14px"} hidden={!isOpen}>
                    PROJECTS
                  </Text>
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
                <Box hidden={isOpen}>
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
            ml={isOpen ? 2 : 0}
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
