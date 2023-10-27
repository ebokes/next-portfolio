import { Box, HStack, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

const AboutMe = () => {
  const { colorMode } = useColorMode();
  return (
    <Box p={8}>
      <Heading fontSize={"17px"}>About Me</Heading>
      <HStack
        justify={"space-between"}
        bg={colorMode === "light" ? "white" : "brand.840"}
        p={6}
        mt={"23px"}
      >
        <Box>
          <Text>Chibuokem Egbuchulam</Text>
          <Text>chibuokemegbuchulam@gmail.com</Text>
        </Box>
        <MotionBox w={"500px"} p={6}>
          <Text>
            {
              "Hello, I'm Chibuokem Egbuchulam, a passionate frontend developer. With a strong skill set in frontend development, I bring creative and user-centric designs to life. I am dedicated to crafting intuitive and engaging web experiences that captivate users. Let's collaborate to make your digital vision a reality."
            }
          </Text>
        </MotionBox>
      </HStack>
    </Box>
  );
};

export default AboutMe;
