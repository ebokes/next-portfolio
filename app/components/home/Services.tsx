"use client";

import {
  cardsVariants,
  parentVariants,
  servicesData,
} from "@/app/utils/constants";
import {
  Flex,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const MotionFlex = motion(Flex);

const Services = () => {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(isInView);

  if (isInView) {
    controls.start("show");
  }

  return (
    <Stack gap={"23px"} id="services">
      <Heading fontSize={"17px"}>My Services</Heading>
      <motion.div
        className="grid-animation"
        variants={parentVariants}
        initial="hidden"
        ref={ref}
        animate={controls}
        transition={{ duration: 1 }}
      >
        {servicesData.map((item) => (
          <MotionFlex
            variants={cardsVariants}
            key={item.id}
            bg={colorMode === "light" ? "white" : "brand.840"}
            p={8}
            boxShadow={"md"}
          >
            <Flex flexDir={"column"} gap={4}>
              <Grid
                placeItems={"center"}
                boxSize={"40px"}
                mb={2}
                bg={colorMode === "light" ? "brand.120" : "brand.600"}
                p={2}
                borderRadius={"50%"}
              >
                <Icon
                  as={item.icon}
                  color={colorMode === "light" ? "brand.420" : "brand.400"}
                  boxSize={"20px"}
                />
              </Grid>
              <Heading fontSize={"14px"} fontWeight={600}>
                {item.title}
              </Heading>
              <Text
                color={colorMode === "light" ? "brand.280" : "brand.780"}
                fontSize={"13px"}
              >
                {item.body}
              </Text>
            </Flex>
          </MotionFlex>
        ))}
      </motion.div>
    </Stack>
  );
};

export default Services;
