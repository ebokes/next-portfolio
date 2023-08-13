import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import CoverImage from "../elements/CoverImage";

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <CoverImage backgroundImg="backdrop3">
      <Heading
        as="h1"
        fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
        fontWeight="bold"
        maxW={"500px"}
        mb={2}
      >
        Welcome to My Amazing Art Space!
      </Heading>

      <Flex mt={5} align={"center"}>
        <Text>{"<"}</Text>
        <Text color={colorMode === "light" ? "brand.420" : "brand.400"}>
          {"code"}
        </Text>
        <Text>{">"}</Text>
        <Typewriter
          options={{
            strings: [
              " I build visually appealing websites",
              "I develop dynamic, scalable web applications",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <Text>{"</"}</Text>
        <Text color={colorMode === "light" ? "brand.420" : "brand.400"}>
          {"code"}
        </Text>
        <Text>{">"}</Text>
      </Flex>
      <Spacer h={2} />
      <Box my={5}>
        <Link
          href="#projects"
          px={8}
          py={3}
          fontWeight="bold"
          color={colorMode === "light" ? "brand.120" : "brand.620"}
          fontSize={"12px"}
          borderRadius={0}
          bg={colorMode === "light" ? "brand.420" : "brand.400"}
          boxShadow={"md"}
          _hover={{
            background: colorMode === "light" ? "brand.420" : "brand.400",
            color: colorMode === "light" ? "white" : "brand.620",
            transform: "translateY(-1px)",
            boxShadow: "xl",
            textDecoration: "none",
          }}
        >
          EXPLORE NOW!
        </Link>
      </Box>
    </CoverImage>
  );
};

export default Hero;
