import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const BodyWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex w={"100%"} h={"100vh"}>
      <Flex align={"stretch"} p={"15px"} justify={"space-between"}>
        <Leftbar />
        <Box overflow={"scroll"}>{children}</Box>
        <Rightbar />
      </Flex>
    </Flex>
  );
};

export default BodyWrap;
