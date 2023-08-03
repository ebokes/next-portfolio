"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import Body from "./components/Body";
import BodyWrap from "./components/BodyWrap";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={"#191923"}>
      <Flex
        justify={"space-between"}
        w={"full"}
        overflow={"hidden"}
        align={"flex-start"}
        maxW={"1440px"}
        mx={"auto"}
        // bg={"brand.900"}
        // bg={colorMode === "light" ? "brand.100" : "brand.900"}
      >
        <BodyWrap>
          <Body />
        </BodyWrap>
      </Flex>
    </Flex>
  );
}
