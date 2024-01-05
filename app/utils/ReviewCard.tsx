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
      mr={{ base: 0, md: 7 }}
      bg={colorMode === "light" ? "white" : "brand.840"}
      p={8}
      minH={"200px"}
    >
      <HStack justify={"space-between"}>
        <Box>
          <Text fontWeight={700}>{name}</Text>
          <Text fontSize={"14px"} fontStyle={"italic"}>
            {position}
          </Text>
        </Box>
        <Box>
          <Avatar src={img} name={name} mt={"-10px"} />
        </Box>
      </HStack>
      <Text
        color={colorMode === "light" ? "brand.280" : "brand.780"}
        fontSize={"14px"}
      >
        {message}
      </Text>
    </Flex>
  );
};

export default ReviewCard;
