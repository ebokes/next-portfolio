"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import Body from "./components/Body";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={"#1e1e28"}>
      <Flex
        p={"15px"}
        border={"1px solid red"}
        justify={"space-between"}
        w={"full"}
        overflow={"hidden"}
        align={"flex-start"}
        maxW={"1440px"}
        mx={"auto"}
        // gap={5}
        // bg={"brand.900"}
        // bg={colorMode === "light" ? "brand.100" : "brand.900"}
      >
        <Leftbar />
        <Body />
        <Rightbar />
      </Flex>
    </Flex>
  );
}
