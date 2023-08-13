import { useToggleLeftbar } from "@/app/hooks/toggle";
import { Box, Flex, useColorMode, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Footer from "../footer/Footer";

const Nav = ({ children }: { children: React.ReactNode }) => {
  const {
    isOpen: leftIsOpen,
    onOpen: leftOnOpen,
    onClose: leftOnClose,
  } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Flex w={"100%"} h={"100vh"} maxW={"1440px"} mx={"auto"}>
      <Flex
        align={"stretch"}
        p={"15px"}
        justify={"space-between"}
        bg={colorMode === "light" ? "brand.100" : "brand.600"}
        w={"full"}
      >
        <Leftbar isOpen={leftIsOpen} onClose={leftOnClose} />
        <Box
          overflowY={"scroll"}
          mr={{ base: "0", md: "70px", xl: "0" }}
          w={"full"}
        >
          <Navbar onOpen={leftOnOpen} />
          <Box mt={{ base: "83px", lg: "0" }} w={"full"}>
            {children}
          </Box>
          <Footer />
          <Box
            h={"18px"}
            w={"full"}
            bg={colorMode === "light" ? "brand.100" : "brand.600"}
            position={"fixed"}
            bottom={0}
            zIndex={10}
            left={0}
            right={0}
          />
        </Box>
        <Rightbar />
      </Flex>
    </Flex>
  );
};

export default Nav;
