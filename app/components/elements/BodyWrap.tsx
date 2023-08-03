import { useToggleLeftbar } from "@/app/hooks/toggle";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Leftbar from "../nav/Leftbar";
import Navbar from "../nav/Navbar";
import Rightbar from "../nav/Rightbar";

const BodyWrap = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, toggleLeftbar } = useToggleLeftbar();
  return (
    <Flex w={"100%"} h={"100vh"}>
      <Flex
        align={"stretch"}
        p={"15px"}
        justify={"space-between"}
        // position={"relative"}
        bg={"#191923"}
      >
        <Leftbar isOpen={isOpen} toggleLeftbar={toggleLeftbar} />
        <Box overflow={"scroll"} mr={{ base: "0", md: "70px", xl: "0" }}>
          <Navbar toggleLeftbar={toggleLeftbar} />
          <Box mt={{ base: "83px", lg: "0" }}>{children}</Box>
          <Box
            h={"15px"}
            w={"full"}
            bg={"#191923"}
            position={"fixed"}
            bottom={0}
            // border={"1px solid red"}
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

export default BodyWrap;
