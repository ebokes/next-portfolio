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
import PulsatingCircle from "../../utils/PulsatingCircle";
import Image from "next/image";
import { CgMaximize } from "react-icons/cg";
import { useState } from "react";
import LeftContent from "./LeftContent";
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
  return (
    <>
      {/* Mobile Leftbar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <LeftContent onClose={onClose} h={"95vh"} />
        </DrawerContent>
      </Drawer>
      {/* Desktop Leftbar */}
      <Box display={{ base: "none", lg: "block" }} zIndex={5}>
        <LeftContent h="100%" />
      </Box>
    </>
  );
};

export default Leftbar;
