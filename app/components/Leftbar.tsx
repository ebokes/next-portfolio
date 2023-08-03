"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Progress,
  Text,
} from "@chakra-ui/react";
import {
  FaCheck,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TechStack, TechStack2 } from "../utils/constants";
import PulsatingCircle from "./PulsatingCircle";

interface ProgressBarProps {
  value: number;
  label: string;
  title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, title }) => {
  // const { colorMode } = useColorMode();
  return (
    <Box>
      <Box>
        <Flex justify={"space-between"} mb={1}>
          <Text fontSize={"13px"} color={"#cacace"}>
            {title}
          </Text>
          <Text fontSize={"13px"} color={"#cacace"}>
            {label}
          </Text>
        </Flex>
      </Box>
      <Progress
        value={value}
        size={"xs"}
        isAnimated
        bg={"#191923"}
        colorScheme="orange"
        // bg={colorMode === "light" ? "brand.50" : "brand.950"}
      />
    </Box>
  );
};

interface LeftbarProps {
  isOpen: boolean;
  toggleLeftbar: () => void;
}

const Leftbar: React.FC<LeftbarProps> = ({ isOpen, toggleLeftbar }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", lg: "block" }} zIndex={5}>
      <Box
        bg={"#20202a"}
        // display={{ base: "none", lg: "block" }}
        boxShadow={"xl"}
        position={"relative"}
      >
        <CloseButton
          position={"absolute"}
          right={1}
          top={1}
          onClick={toggleLeftbar}
          display={{ base: "flex", lg: "none" }}
        />
        <Center
          flexDir={"column"}
          bg={"#252530"}
          p={"30px"}
          gap={2}
          boxShadow={"lg"}
        >
          <Box position={"relative"}>
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
            color={"#fafafc"}
            _hover={{ color: "#ffc107" }}
            w={"230px"}
            textAlign={"center"}
          >
            Chibuokem Egbuchulam
          </Heading>
          <Text fontSize={"13px"} color={"#8c8c8e"}>
            Frontend Developer
          </Text>
        </Center>
        <Box overflowY={"scroll"} h={"100vh"}>
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
            <Divider my={"30px"} bg={"#404049"} />
            <Box>
              {TechStack2.map((item) => (
                <HStack key={item}>
                  <Icon as={FaCheck} boxSize={"10px"} color={"#ffc107"} />
                  <Text fontSize={"14px"} color={"#8c8c8e"}>
                    {item}
                  </Text>
                </HStack>
              ))}
            </Box>
            <Divider my={"30px"} bg={"#404049"} />
            <Center>
              <Button
                as={Link}
                fontSize={"14px"}
                color={"#8c8c8e"}
                fontWeight={600}
                _hover={{ color: "#eee", textDecoration: "none" }}
                href="https://www.canva.com/design/DAFifIG9KsU/gRNEJIJacPKod90hfNADvg/view?utm_content=DAFifIG9KsU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                rightIcon={<FaDownload />}
                target={"blank"}
                borderRadius={"none"}
              >
                Download CV
              </Button>
            </Center>
          </Box>
        </Box>
        <Center
          bg={"#252531"}
          gap={4}
          py={4}
          position={"sticky"}
          bottom={"15px"}
          w={"full"}
          boxShadow={"md"}
        >
          <Icon as={FaLinkedin} boxSize={"17px"} />
          <Icon as={FaGithub} boxSize={"17px"} />
          <Icon as={FaTwitter} boxSize={"17px"} />
        </Center>
      </Box>
    </Box>
  );
};

export default Leftbar;
