"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaCheck,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TechStack, TechStack2 } from "../../utils/constants";
import PulsatingCircle from "../elements/PulsatingCircle";
import Image from "next/image";
import { CgMaximize } from "react-icons/cg";
import { useState } from "react";
// import PulsatingCircle from "../PulsatingCircle";

interface ProgressBarProps {
  value: number;
  label: string;
  title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, title }) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box>
        <Flex justify={"space-between"} mb={1}>
          <Text fontSize={"13px"}>{title}</Text>
          <Text
            fontSize={"13px"}
            color={colorMode === "light" ? "brand.320" : "brand.800"}
          >
            {label}
          </Text>
        </Flex>
      </Box>
      <Progress
        value={value}
        size={"xs"}
        isAnimated
        bg={colorMode === "light" ? "brand.200" : "brand.600"}
        colorScheme="orange"
        // bg={colorMode === "light" ? "brand.50" : "brand.950"}
      />
    </Box>
  );
};

interface LeftbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Leftbar: React.FC<LeftbarProps> = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  const { isOpen: popIsOpen, onOpen, onClose: popOnClose } = useDisclosure();
  return (
    <>
      {/* Mobile Leftbar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Box zIndex={5}>
            <Box
              // bg={"#20202a"}
              bg={colorMode === "light" ? "brand.220" : "brand.620"}
              boxShadow={"xl"}
              position={"relative"}
              h={"95vh"}
            >
              <CloseButton
                position={"absolute"}
                right={1}
                top={1}
                onClick={onClose}
                display={{ base: "flex", lg: "none" }}
              />
              <Center
                flexDir={"column"}
                p={"30px"}
                gap={2}
                boxShadow={"lg"}
                bgImage={
                  colorMode === "light"
                    ? "linear(159deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.95) 100%)"
                    : "linear(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)"
                }
              >
                <Box position={"relative"} onClick={onOpen}>
                  <Avatar
                    src="/images/chibu-avatar.webp"
                    name="Chibuokem Egbuchulam"
                    size={"xl"}
                  />
                  <Box position={"absolute"} right={"6px"} bottom={"6px"}>
                    <PulsatingCircle />
                  </Box>
                </Box>
                <Heading
                  fontSize={"16px"}
                  // color={"#fafafc"}
                  _hover={{
                    color: colorMode === "light" ? "brand.420" : "brand.400",
                  }}
                  w={"230px"}
                  textAlign={"center"}
                >
                  Chibuokem Egbuchulam
                </Heading>
                <Text
                  fontSize={"13px"}
                  color={colorMode === "light" ? "brand.280" : "brand.780"}
                >
                  Frontend Developer
                </Text>
              </Center>
              <Box overflowY={"scroll"} h={"60vh"}>
                <Box p={"30px"} minW={"230px"}>
                  {/* Bio & Circular progressbar sent to drop */}
                  <Flex flexDir={"column"} gap={2}>
                    {TechStack.map((tech) => (
                      <ProgressBar
                        key={tech.title}
                        value={tech.value}
                        label={`${tech.value}%`}
                        title={tech.title}
                      />
                    ))}
                  </Flex>
                  <Divider
                    my={"30px"}
                    borderColor={
                      colorMode === "light" ? "brand.260" : "brand.760"
                    }
                  />
                  <Box>
                    {TechStack2.map((item) => (
                      <HStack key={item}>
                        <Icon
                          as={FaCheck}
                          boxSize={"10px"}
                          color={
                            colorMode === "light" ? "brand.420" : "brand.400"
                          }
                        />
                        <Text
                          fontSize={"14px"}
                          color={
                            colorMode === "light" ? "brand.280" : "brand.780"
                          }
                        >
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </Box>
                  <Divider
                    my={"30px"}
                    borderColor={
                      colorMode === "light" ? "brand.260" : "brand.760"
                    }
                  />
                  <Center>
                    <Button
                      as={Link}
                      fontSize={"14px"}
                      color={colorMode === "light" ? "brand.280" : "brand.780"}
                      fontWeight={600}
                      _hover={{
                        transform: "translateY(-1px)",
                        boxShadow: "lg",
                        textDecoration: "none",
                      }}
                      href="https://www.canva.com/design/DAFifIG9KsU/gRNEJIJacPKod90hfNADvg/view?utm_content=DAFifIG9KsU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                      rightIcon={<FaDownload />}
                      target={"blank"}
                      borderRadius={"none"}
                      boxShadow={"md"}
                    >
                      Download CV
                    </Button>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <DrawerFooterp={0} boxShadow={"md"} bg={"#252531"}> */}
          <Center
            zIndex={11}
            position={"sticky"}
            bottom={0}
            w={"full"}
            bg={colorMode === "light" ? "white" : "brand.680"}
            gap={4}
            py={4}
            boxShadow={"lg"}
          >
            <Icon as={FaLinkedin} boxSize={"17px"} />
            <Icon as={FaGithub} boxSize={"17px"} />
            <Icon as={FaTwitter} boxSize={"17px"} />
          </Center>
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      {/* Desktop Leftbar */}
      <Box display={{ base: "none", lg: "block" }} zIndex={5}>
        <Box
          bg={colorMode === "light" ? "brand.220" : "brand.620"}
          boxShadow={"xl"}
          position={"relative"}
        >
          {/* ID Card */}
          <Center
            flexDir={"column"}
            p={"30px"}
            gap={2}
            boxShadow={"lg"}
            bgImage={
              colorMode === "light"
                ? "linear(159deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.95) 100%)"
                : "linear(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)"
            }
          >
            <Box
              position={"relative"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              borderRadius={"50%"}
            >
              <Avatar
                src="/images/chibu-avatar.webp"
                name="Chibuokem Egbuchulam"
                size={"xl"}
              />
              {show && (
                <IconButton
                  aria-label="expand"
                  icon={<CgMaximize />}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  variant={"ghost"}
                  zIndex={20}
                  transform={"translate(-50%, -50%)"}
                  onClick={onOpen}
                  _hover={{
                    background: "transparent",
                  }}
                />
              )}
              <Box position={"absolute"} right={"6px"} bottom={"6px"}>
                <PulsatingCircle />
              </Box>
            </Box>
            <Heading
              fontSize={"16px"}
              _hover={{
                color: colorMode === "light" ? "brand.420" : "brand.400",
              }}
              w={"230px"}
              textAlign={"center"}
            >
              Chibuokem Egbuchulam
            </Heading>
            <Text
              fontSize={"13px"}
              color={colorMode === "light" ? "brand.280" : "brand.780"}
            >
              Frontend Developer
            </Text>
          </Center>
          <Box overflowY={"scroll"} h={"70vh"}>
            <Box p={"30px"} minW={"230px"}>
              {/* Bio & Circular progressbar sent to drop */}
              <Flex flexDir={"column"} gap={2}>
                {TechStack.map((tech) => (
                  <ProgressBar
                    key={tech.title}
                    value={tech.value}
                    label={`${tech.value}%`}
                    title={tech.title}
                  />
                ))}
              </Flex>
              <Divider
                my={"30px"}
                borderColor={colorMode === "light" ? "brand.260" : "brand.760"}
              />
              <Box>
                {TechStack2.map((item) => (
                  <HStack key={item}>
                    <Icon
                      as={FaCheck}
                      boxSize={"10px"}
                      color={colorMode === "light" ? "brand.420" : "brand.400"}
                    />
                    <Text
                      fontSize={"14px"}
                      color={colorMode === "light" ? "brand.280" : "brand.780"}
                    >
                      {item}
                    </Text>
                  </HStack>
                ))}
              </Box>
              <Divider
                my={"30px"}
                borderColor={colorMode === "light" ? "brand.260" : "brand.760"}
              />
              <Center>
                <Button
                  as={Link}
                  fontSize={"14px"}
                  // color={colorMode === "light" ? "brand.280" : "brand.780"}
                  color={colorMode === "light" ? "white" : "brand.620"}
                  fontWeight={600}
                  _hover={{
                    transform: "translateY(-1px)",
                    boxShadow: "lg",
                    textDecoration: "none",
                  }}
                  href="https://www.canva.com/design/DAFifIG9KsU/gRNEJIJacPKod90hfNADvg/view?utm_content=DAFifIG9KsU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  rightIcon={<FaDownload />}
                  target={"blank"}
                  borderRadius={"none"}
                  boxShadow={"md"}
                  bg={colorMode === "light" ? "brand.420" : "brand.400"}
                >
                  Download CV
                </Button>
              </Center>
            </Box>
          </Box>
          <Center
            // bg={"#252531"}
            bg={colorMode === "light" ? "white" : "brand.680"}
            gap={4}
            py={4}
            position={"sticky"}
            bottom={"15px"}
            w={"full"}
            boxShadow={"lg"}
          >
            <Icon as={FaLinkedin} boxSize={"17px"} />
            <Icon as={FaGithub} boxSize={"17px"} />
            <Icon as={FaTwitter} boxSize={"17px"} />
          </Center>
        </Box>
      </Box>

      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={popIsOpen} onClose={popOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bgImage={"linear(to-l, #000000e, #00000013)"}>
            <Image
              src="/images/chibu-avatar.webp"
              alt="avatar image"
              height={500}
              width={500}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Leftbar;
