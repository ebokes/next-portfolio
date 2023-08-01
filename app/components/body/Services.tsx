"use client";

import { servicesData } from "@/app/utils/constants";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Stack>
      <Heading fontSize={"17px"}>My Services</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7}>
        {servicesData.map((item) => (
          <Flex key={item.id} bg={"#2b2b36"} p={8}>
            <Flex flexDir={"column"} gap={4}>
              <Heading fontSize={"14px"} fontWeight={600}>
                {item.title}
              </Heading>
              <Text color={"#8c8c8e"} fontSize={"13px"}>
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
