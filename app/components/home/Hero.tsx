import Button from "@/app/utils/Button";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CoverImage from "../../utils/CoverImage";

const MotionBox = motion(Flex);

const Hero = () => {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 597px)");
  return (
    <CoverImage backgroundImg="backdrop3">
      <MotionBox
        maxW={"500px"}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", lg: "4xl" }}
          fontWeight="bold"
          maxW={"500px"}
          mb={2}
          w={"fit-content"}
        >
          Welcome to my world of web adventures!
        </Heading>
      </MotionBox>

      <Flex mt={5} style={{ flexDirection: isMobile ? "column" : "row" }}>
        <Flex>
          <Text fontSize={"18px"}>{"<"}</Text>
          <Text color={colorMode === "light" ? "brand.420" : "brand.400"}>
            {"code"}
          </Text>
          <Text fontSize={"18px"}>{"> "}</Text>
        </Flex>
        <Box style={{ marginLeft: isMobile ? "20px" : "4px" }}>
          <Typewriter
            options={{
              strings: [
                "I build visually appealing websites",
                "I create mobile-friendly, adaptable websites",
                "I craft intuitive, visually appealing interfaces",
                "I develop engaging user-driven applications",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Flex>
          <Text fontSize={"18px"}>{" </"}</Text>
          <Text color={colorMode === "light" ? "brand.420" : "brand.400"}>
            {"code"}
          </Text>
          <Text fontSize={"18px"}>{">"}</Text>
        </Flex>
      </Flex>
      <Spacer h={2} />
      <Flex my={5} justify={isMobile ? "center" : "flex-start"}>
        <Button as={Link} href="#projects" fontSize="14px">
          EXPLORE NOW!
        </Button>
      </Flex>
    </CoverImage>
  );
};

export default Hero;
