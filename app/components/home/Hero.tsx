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
import CoverImage from "../../utils/CoverImage";
import Button from "@/app/utils/Button";
import { motion } from "framer-motion";

const MotionBox = motion(Flex);

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <CoverImage backgroundImg="backdrop3">
      <MotionBox
        width={"500px"}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight="bold"
          maxW={"500px"}
          mb={2}
        >
          Welcome to My Amazing Art Space!
        </Heading>
      </MotionBox>

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
        <Button as={Link} href="#projects" fontSize="14px">
          EXPLORE NOW!
        </Button>
      </Box>
    </CoverImage>
  );
};

export default Hero;
