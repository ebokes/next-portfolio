"use client";

import BodyWrap from "@/app/components/BodyWrap";
import Carousel from "@/app/components/Carousel";
import { projectsData } from "@/app/utils/constants";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { HiBadgeCheck, HiCode } from "react-icons/hi";

const Project = () => {
  const { id } = useParams();

  const pictures = [
    "/images/chitchat.webp",
    "/images/quizbee.webp",
    "/images/backdrop.webp",
    "/images/backdrop2.webp",
    "/images/backdrop3.webp",
  ];

  return (
    <Box>
      {projectsData.map((item) => {
        if (id === item.id) {
          return (
            <Flex key={item.id} bg={"#1e1e28"}>
              <BodyWrap>
                <Box w={"100%"}>
                  <Box
                    // border={"1px solid green"}
                    backgroundImage={"images/backdrop3.webp"}
                    backgroundPosition={"center"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                  >
                    <Box p={{ base: "15px", md: "30px" }} h={"full"}>
                      <Box
                      //   border={"1px solid red"}
                      >
                        <Heading fontSize={"22px"} mb={"30px"}>
                          {item.title}
                        </Heading>
                        <Image
                          src={item.img}
                          alt="item.id"
                          width={500}
                          height={400}
                        />
                        {/* <Carousel pictures={pictures} /> */}
                      </Box>
                    </Box>
                  </Box>
                  <Box p={{ base: "15px", md: "30px" }}>
                    <Box mt={"30px"}>
                      <Heading fontSize={"17px"} fontWeight={600} mb={"20px"}>
                        Project details
                      </Heading>
                      <Flex
                        w={"full"}
                        gap={6}
                        flexDir={{ base: "column", md: "row" }}
                      >
                        <Stack
                          flex={0.4}
                          bg={"#2a2a35"}
                          p={"30px"}
                          gap={"30px"}
                          boxShadow={"md"}
                        >
                          <Heading fontSize={"16px"}>Description</Heading>
                          <Text>{item.details}</Text>

                          <HStack
                            spacing={5}
                            fontSize={"12px"}
                            flexDir={{ base: "column", xs: "row" }}
                            // justify={{ base: "center", md: "flex-start" }}
                            justify={"center"}
                          >
                            <Link href={item.code} isExternal>
                              <HStack
                                bg={"#ffc107"}
                                px={5}
                                py={"3px"}
                                boxShadow={"lg"}
                                color={"#000"}
                                w={"90px"}
                                justify={"center"}
                                fontSize={"14px"}
                              >
                                <Icon as={HiCode} />
                                <Text>CODE</Text>
                              </HStack>
                            </Link>
                            <Link href={item.live} isExternal>
                              <HStack
                                bg={"#ffc107"}
                                px={5}
                                py={"3px"}
                                w={"90px"}
                                color={"#000"}
                                boxShadow={"lg"}
                                justify={"center"}
                                fontSize={"14px"}
                              >
                                <Icon as={CgScreen} />
                                <Text>LIVE</Text>
                              </HStack>
                            </Link>
                          </HStack>
                        </Stack>
                        <Stack
                          flex={0.6}
                          bg={"#2a2a35"}
                          p={"30px"}
                          boxShadow={"md"}
                        >
                          <Heading fontSize={"16px"} mb={"20px"}>
                            Features
                          </Heading>
                          <List>
                            <Flex flexDir={"column"} gap={1}>
                              {item.features.map((feature) => (
                                <HStack key={feature} align={"flex-start"}>
                                  <Icon
                                    mt={2}
                                    as={FaCheck}
                                    boxSize={"10px"}
                                    color={"#ffc107"}
                                  />
                                  <Text>{feature}</Text>
                                </HStack>
                              ))}
                            </Flex>
                          </List>
                          <HStack mt={3} gap={5} flexWrap={"wrap"}>
                            {item.stack.map((st) => (
                              <HStack
                                // border={"1px solid white"}
                                key={st}
                                px={2}
                                color={"#ffc107"}
                                bg={"#333336"}
                                boxShadow={"md"}
                                cursor={"pointer"}
                              >
                                <Icon as={HiBadgeCheck} />
                                <Text>{st}</Text>
                              </HStack>
                            ))}
                          </HStack>
                        </Stack>
                      </Flex>
                    </Box>
                    <Center
                      bgImage={"/images/collaborate.webp"}
                      backgroundPosition={"center"}
                      h={"287px"}
                      mt={"67px"}
                    >
                      <Center
                        w={"100%"}
                        flexDir={"column"}
                        gap={3}
                        bgGradient="linear(0deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)"
                        h={"full"}
                      >
                        <Heading
                          fontSize={{ base: "30px", md: "37px" }}
                          fontWeight={700}
                          textAlign={"center"}
                        >
                          Ready to Build your project?
                        </Heading>
                        <Text>Let&apos;s work together!</Text>
                        <Center bg={"#ffc107"} mt={"28px"} px={5} py={2}>
                          <Link href="/#contact-me">
                            <Text
                              color={"#20202a"}
                              fontSize={"12px"}
                              _hover={{ textDecoration: "none" }}
                            >
                              CONTACT ME
                            </Text>
                          </Link>
                        </Center>
                      </Center>
                    </Center>
                    <Flex
                      justify={"space-between"}
                      bg={"#252531"}
                      p={"28px"}
                      my={"30px"}
                      boxShadow={"md"}
                    >
                      <Link href={`/projects/${item.id}`}>
                        <HStack
                          color={"#ffc107"}
                          fontSize={"12px"}
                          fontWeight={600}
                        >
                          <BiChevronLeft size={"19px"} />
                          <Text display={{ base: "none", sm: "block" }}>
                            PREV PROJECT
                          </Text>
                        </HStack>
                      </Link>
                      <Link href={`/projects/${item.id}`}>
                        <HStack
                          color={"#8C8C8E"}
                          fontSize={"12px"}
                          fontWeight={600}
                        >
                          <Text>ALL PROJECTS</Text>
                        </HStack>
                      </Link>
                      <Link href={`/projects/${item.id}`}>
                        <HStack
                          color={"#ffc107"}
                          fontSize={"12px"}
                          fontWeight={600}
                        >
                          <Text display={{ base: "none", sm: "block" }}>
                            NEXT PROJECT
                          </Text>
                          <BiChevronRight size={"19px"} />
                        </HStack>
                      </Link>
                    </Flex>
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      bg={"#252531"}
                      p={"28px"}
                      color={"#8c8c8e"}
                      fontSize={"12px"}
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Text>© 2020 All Rights Reserved.</Text>
                      <Text>Chibuokem Egbuchulam</Text>
                    </Flex>
                  </Box>
                </Box>
              </BodyWrap>
            </Flex>
          );
        }
      })}
    </Box>
  );
};

export default Project;
