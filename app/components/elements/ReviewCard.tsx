import { ReviewProps } from "@/app/utils/constants";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  position,
  message,
  img,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      gap={5}
      flexDirection={"column"}
      mr={{ base: 1, md: 7 }}
      bg={colorMode === "light" ? "white" : "brand.840"}
      p={8}
      minH={"280px"}
    >
      <HStack justify={"space-between"}>
        <Box>
          <Text>{name}</Text>
          <Text fontStyle={"italic"}>{position}</Text>
        </Box>
        <Box>
          <Avatar src={img} name={name} mt={"-10px"} />
        </Box>
      </HStack>
      <Box>{message}</Box>
      <Flex
        w={"fit-content"}
        py={2}
        px={6}
        gap={2}
        borderRadius={"2xl"}
        bg={colorMode === "light" ? "brand.260" : "brand.620"}
        color={colorMode === "light" ? "brand.420" : "brand.400"}
        boxShadow={"inset 0 3px 8px 0 rgba(15,15,20,.2)"}
      >
        <Icon as={BsFillStarFill} />
        <Icon as={BsFillStarFill} />
        <Icon as={BsFillStarFill} />
        <Icon as={BsFillStarFill} />
        <Icon as={BsFillStarFill} />
      </Flex>
    </Flex>
  );
};

export default ReviewCard;
