"use client";
import { HStack } from "@chakra-ui/react";
import Body from "./components/Body";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";

export default function Home() {
  return (
    <HStack
      p={"15px"}
      border={"1px solid red"}
      justify={"space-between"}
      w={"full"}
      overflow={"hidden"}
      bg={"#1e1e28"}
    >
      <Leftbar />
      <Body />
      <Rightbar />
    </HStack>
  );
}
