import {
  Box,
  Grid,
  HStack,
  Heading,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";

const MotionBox = motion(Box);

const AboutMe = () => {
  const { colorMode } = useColorMode();
  return (
    <Box p={{ base: 0, md: 8 }} id="about-me">
      <Heading fontSize={"17px"}>About Me</Heading>
      <HStack
        justify={"space-between"}
        bg={colorMode === "light" ? "white" : "brand.840"}
        p={{ base: 0, md: 6 }}
        mt={"23px"}
        flexDir={{ base: "column", md: "row" }}
      >
        <MotionBox
          textAlign={"center"}
          p={6}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HStack justify={"center"}>
            <Grid
              placeItems={"center"}
              boxSize={"60px"}
              mb={2}
              bg={colorMode === "light" ? "brand.120" : "brand.600"}
              p={2}
              borderRadius={"50%"}
            >
              <Icon
                as={TiInfoLargeOutline}
                color={colorMode === "light" ? "brand.420" : "brand.400"}
                boxSize={"30px"}
              />
            </Grid>
          </HStack>
          <Text w={"fit-content"}>
            Hi there! {"I'm"} Chibuokem, nice to meet you. I am a frontend
            developer on a mission to turn pixels and code into compelling
            stories. With each project, I breathe life into digital landscapes
            that engage and leave a lasting impact. {"Let's"} embark on a
            journey through these web adventures and create your own digital
            story together. Explore, be inspired, and {"let's"} make your vision
            a reality!
          </Text>
        </MotionBox>
      </HStack>
    </Box>
  );
};

export default AboutMe;
