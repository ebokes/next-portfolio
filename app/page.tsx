"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import Nav from "./components/nav/Nav";
import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Reviews from "./components/home/Reviews";
import Services from "./components/home/Services";
import TechStacks from "./components/home/TechStack";
import AboutMe from "./components/home/AboutMe";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={colorMode === "light" ? "brand.100" : "brand.600"}>
      <Flex
        justify={"space-between"}
        w={"full"}
        overflow={"hidden"}
        align={"flex-start"}
        mx={"auto"}
      >
        <Nav>
          <Hero />
          <AboutMe />
          <Flex
            mx={{ base: 0, md: "30px" }}
            mt={"30px"}
            flexDirection={"column"}
            gap={10}
          >
            <Services />
            <TechStacks />
            <Reviews />
            <Projects />
            <Contact />
          </Flex>
        </Nav>
      </Flex>
    </Flex>
  );
}
