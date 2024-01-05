import Button from "@/app/utils/Button";
import { TechStack, TechStack2 } from "@/app/utils/constants";
import {
  Avatar,
  Box,
  Center,
  Divider,
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
  ModalOverlay,
  Progress,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { CgMaximize } from "react-icons/cg";
import {
  FaCheck,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import PulsatingCircle from "../../utils/PulsatingCircle";
import { MdClose } from "react-icons/md";

interface ProgressBarProps {
  value?: number;
  label?: string;
  title?: string;
  onOpen?: () => void;
  onClose?: () => void;
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
      />
    </Box>
  );
};

interface LeftbarProps {
  onClose?: () => void;
  onOpen?: () => void;
  h?: string;
}

const LeftContent = ({ onClose, h }: LeftbarProps) => {
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const { isOpen: popIsOpen, onOpen, onClose: popOnClose } = useDisclosure();

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  return (
    <>
      <Box
        bg={colorMode === "light" ? "brand.220" : "brand.620"}
        boxShadow={"xl"}
        position={"relative"}
      >
        <IconButton
          display={{ base: "flex", lg: "none" }}
          variant={"ghost"}
          _hover={{ background: "transparent" }}
          aria-label="close btn"
          icon={<MdClose />}
          onClick={onClose}
          position={"absolute"}
          right={"10px"}
          top={"10px"}
        />
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
          <Center gap={4} w={"full"}>
            <Link href="https://linkedin.com/in/chibuokemegbuchulam" isExternal>
              <Icon as={FaLinkedin} boxSize={"17px"} />
            </Link>
            <Link href="https://github.com/ebokes" isExternal>
              <Icon as={FaGithub} boxSize={"17px"} />
            </Link>
            <Link href="https://twitter.com/Chibu_91" isExternal>
              <Icon as={FaTwitter} boxSize={"17px"} />
            </Link>
          </Center>
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
          </Box>
        </Box>

        <Center
          gap={4}
          py={2}
          position={"sticky"}
          bottom={"15px"}
          w={"full"}
          boxShadow={"lg"}
          bg={colorMode === "light" ? "white" : "brand.680"}
        >
          <Link
            href="https://www.canva.com/design/DAFifIG9KsU/gRNEJIJacPKod90hfNADvg/view?utm_content=DAFifIG9KsU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noopener noreferrer"
            color={colorMode === "light" ? "brand.420" : "brand.400"}
            _hover={{
              textDecoration: "none",
              bg: colorMode === "light" ? "brand.420" : "brand.400",
              color: colorMode === "light" ? "white" : "brand.620",
            }}
          >
            <HStack py={2} px={"1rem"}>
              <Text>Download CV</Text>
              <Icon as={FaDownload} />
            </HStack>
          </Link>
        </Center>
      </Box>
      {/* Avatar Popup */}
      <Modal isOpen={popIsOpen} onClose={popOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bgImage={"linear(to-l, #000000e, #00000013)"}>
            <Image
              src="/images/chibu-avatar.webp"
              alt="avatar image"
              height={800}
              width={800}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftContent;
