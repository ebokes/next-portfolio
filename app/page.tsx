"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import Body from "./components/elements/Body";
import Nav from "./components/nav/Nav";
// import BodyWrap from "./components/elements/Nav";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={colorMode === "light" ? "brand.100" : "brand.600"}>
      <Flex
        justify={"space-between"}
        w={"full"}
        overflow={"hidden"}
        align={"flex-start"}
        // maxW={"1440px"}
        mx={"auto"}
      >
        <Nav>
          <Body />
        </Nav>
      </Flex>
    </Flex>
  );
}
