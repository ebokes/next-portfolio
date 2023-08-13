"use client";

import { servicesData } from "@/app/utils/constants";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Services = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack gap={"23px"} id="services">
      <Heading fontSize={"17px"}>My Services</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={7}>
        {servicesData.map((item) => (
          <Flex
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
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Services;
