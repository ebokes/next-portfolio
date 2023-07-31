"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  CheckboxIcon,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaDownload } from "react-icons/fa";
import { TechStack, TechStack2 } from "../utils/constants";

interface ProgressBarProps {
  value: number;
  label: string;
  title: string;
}

const CircularProgressBar = ({ value, label, title }: ProgressBarProps) => {
  return (
    <Center flexDir={"column"}>
      <CircularProgress
        value={value}
        thickness="6px"
        trackColor={"#191923"}
        color={"#ffc107"}
      >
        <CircularProgressLabel>{label}</CircularProgressLabel>
      </CircularProgress>
      <Text fontSize={"14px"} mt={2}>
        {title}
      </Text>
    </Center>
  );
};

const ProgressBar = ({ value, label, title }: ProgressBarProps) => {
  return (
    <Box>
      <Box>
        <Flex justify={"space-between"} mb={1}>
          <Text fontSize={"13px"} color={"#cacace"}>
            {title}
          </Text>
          <Text fontSize={"13px"}>{label}</Text>
        </Flex>
      </Box>
      <Progress value={value} size={"xs"} isAnimated bg={"#191923"} />
    </Box>
  );
};

const Leftbar = () => {
  return (
    <Box bg={"#20202a"} display={{ base: "none", lg: "block" }}>
      <Center flexDir={"column"} bg={"#252530"} p={"30px"} gap={2}>
        <Avatar
          src="images/chibu-avatar.webp"
          name="Chibuokem Egbuchulam"
          size={"xl"}
        />
        <Heading
          fontSize={"16px"}
          color={"#fafafc"}
          _hover={{ color: "#ffc107" }}
        >
          Chibuokem Egbuchulam
        </Heading>
        <Text fontSize={"13px"} color={"#8c8c8e"}>
          Frontend Developer
        </Text>
      </Center>
      <Box overflow={"scroll"} h={"70vh"}>
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
          <Divider my={"20px"} bg={"#404049"} />
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
            >
              Download CV
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Leftbar;