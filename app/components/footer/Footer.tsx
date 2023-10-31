import { Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      bg={colorMode === "light" ? "white" : "brand.680"}
      p={"28px"}
      color={colorMode === "light" ? "brand.280" : "brand.780"}
      fontSize={"12px"}
      flexDir={{ base: "column", md: "row" }}
      boxShadow={"md"}
      mx={{ base: 0, md: "30px" }}
    >
      <Text>© 2023 All Rights Reserved.</Text>
      <Text>Chibuokem Egbuchulam</Text>
    </Flex>
  );
};

export default Footer;
