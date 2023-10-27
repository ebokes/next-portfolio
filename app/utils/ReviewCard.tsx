import { ReviewProps } from "@/app/utils/constants";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

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
    </Flex>
  );
};

export default ReviewCard;
