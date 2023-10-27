"use client";

import Nav from "@/app/components/nav/Nav";
import Contact from "@/app/components/home/Contact";
import { ProjectDataProps, projectsData, reviews } from "@/app/utils/constants";
import {
  Box,
  // Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CgScreen } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { HiBadgeCheck, HiCode } from "react-icons/hi";
import CoverImage from "@/app/utils/CoverImage";
import Carousel from "@/app/utils/Carousel";
import ReviewCard from "@/app/utils/ReviewCard";
import Button from "@/app/utils/Button";

const Project = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Nav>
        <>
          {projectsData.map((item) => {
            if (id === item.id) {
              return (
                <Flex key={item.id}>
                  <Box>
                    <CoverImage backgroundImg="collaborate" back={true}>
                      <Box p={{ base: "15px", md: "30px" }} h={"full"}>
                        <Box>
                          <Heading fontSize={"22px"} mb={"30px"}>
                            {item.title}
                          </Heading>
                          <Carousel
                            //  width={[35, 50, 330, 870]}
                            width={[35, 150, 450, 990]}
                          >
                            {item.img.map((img, i) => (
                              <Image
                                key={i}
                                src={img}
                                alt="item.id"
                                width={500}
                                height={500}
                                style={{
                                  objectPosition: "top",
                                  marginRight: 5,
                                  width: "100%",
                                }}
                              />
                            ))}
                          </Carousel>
                        </Box>
                      </Box>
                    </CoverImage>
                    <Box p={{ base: "0", md: "30px" }}>
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
                            bg={colorMode === "light" ? "white" : "brand.700"}
                            p={"30px"}
                            gap={"30px"}
                            boxShadow={"md"}
                          >
                            <Heading fontSize={"16px"}>Description</Heading>
                            <Text
                              color={
                                colorMode === "light"
                                  ? "brand.280"
                                  : "brand.780"
                              }
                            >
                              {item.details}
                            </Text>

                            <HStack
                              spacing={5}
                              fontSize={"12px"}
                              flexDir={{ base: "column", xs: "row" }}
                              justify={"center"}
                            >
                              <Button
                                as={Link}
                                href={item.code}
                                target="_blank"
                                px={4}
                                py={"3px"}
                              >
                                <HStack>
                                  <Icon as={HiCode} />
                                  <Text>CODE</Text>
                                </HStack>
                              </Button>
                              <Button
                                as={Link}
                                href={item.live}
                                target="_blank"
                                px={5}
                                py={"3px"}
                              >
                                <HStack>
                                  <Icon as={CgScreen} />
                                  <Text>LIVE</Text>
                                </HStack>
                              </Button>
                            </HStack>
                          </Stack>
                          <Stack
                            flex={0.6}
                            bg={colorMode === "light" ? "white" : "brand.700"}
                            p={"30px"}
                            boxShadow={"md"}
                          >
                            <Heading fontSize={"16px"} mb={"20px"}>
                              Features
                            </Heading>
                            <List
                              color={
                                colorMode === "light"
                                  ? "brand.280"
                                  : "brand.780"
                              }
                            >
                              <Flex flexDir={"column"} gap={1}>
                                {item.features.map((feature) => (
                                  <HStack key={feature} align={"flex-start"}>
                                    <Icon
                                      mt={2}
                                      as={FaCheck}
                                      boxSize={"10px"}
                                      color={
                                        colorMode === "light"
                                          ? "brand.420"
                                          : "brand.400"
                                      }
                                    />
                                    <Text>{feature}</Text>
                                  </HStack>
                                ))}
                              </Flex>
                            </List>
                            <HStack mt={3} gap={5} flexWrap={"wrap"}>
                              {item.stack.map((st) => (
                                <HStack
                                  key={st}
                                  px={2}
                                  color={
                                    colorMode === "light"
                                      ? "brand.420"
                                      : "brand.400"
                                  }
                                  bg={
                                    colorMode === "light"
                                      ? "#f7faff"
                                      : "#333336"
                                  }
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
                      {/* </CoverImage> */}
                    </Box>
                  </Box>
                </Flex>
              );
            }
          })}
        </>
        <Box mx={{ base: 0, md: "30px" }}>
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
                color={"white"}
              >
                Ready to Build your project?
              </Heading>
              <Text color={"white"}>Let&apos;s work together!</Text>
              <Center mt={"28px"}>
                <Button onClick={onOpen} fontSize="12px" px={5} py={2}>
                  CONTACT ME
                </Button>
              </Center>
            </Center>
          </Center>
          <Flex
            justify={"center"}
            bg={colorMode === "light" ? "white" : "brand.680"}
            p={"28px"}
            my={"30px"}
            boxShadow={"md"}
          >
            <HStack
              fontSize={"12px"}
              fontWeight={600}
              color={colorMode === "light" ? "brand.420" : "brand.400"}
            >
              <Link href={`/projects`}>
                <Text>ALL PROJECTS</Text>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Nav>
      <Box>
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"}>
          <ModalOverlay />
          <ModalContent bg={colorMode === "light" ? "white" : "brand.840"}>
            <ModalCloseButton />
            <ModalBody>
              <Spacer h={6} />
              <Contact onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Project;
