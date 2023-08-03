import { Box, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Box
      backgroundImage={"images/backdrop3.webp"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Box
        p={{ base: "15px", md: "30px" }}
        bgGradient="linear(rgba(30, 30, 40, 0.9) 0%, rgba(30, 30, 40, 0.9) 70%, rgba(30, 30, 40, 0.9) 80%, rgb(30, 30, 40) 100%)"
        h={"full"}
      >
        <Box
          id="home"
          w={"full"}
          backgroundImage={"images/backdrop3.webp"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          //   h={"300px"}
        >
          <Box
            bgGradient="linear(0deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)"
            // h={"300px"}
            p={"30px"}
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

            <Flex mt={5}>
              <Text color={"#ffc107"}>{"<> "} </Text>
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
              <Text color={"#ffc107"}>{"</> "} </Text>
            </Flex>
            <Spacer h={2} />
            <Box my={5}>
              <Link
                href="#projects"
                px={8}
                py={3}
                bg={"#ffc107"}
                fontWeight="bold"
                color={"#20202a"}
                fontSize={"12px"}
                borderRadius={0}
                _hover={{ textDecoration: "none" }}
              >
                EXPLORE NOW!
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
