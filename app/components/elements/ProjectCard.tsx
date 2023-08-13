import { ProjectDataProps } from "@/app/utils/constants";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ProjectCard = ({
  detailsStates,
  handleMouseEnter,
  handleMouseLeave,
  item,
}: any) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bgImage={item.img}
      backgroundPosition={"top"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={() => handleMouseLeave(item.id)}
      h={"270px"}
      position={"relative"}
      // _hover={{ scale: 1.5 }}
    >
      {detailsStates[item.id] && (
        <Box
          pos={"absolute"}
          bottom={0}
          bg={colorMode === "light" ? "brand.140" : "brand.640"}
          w={"full"}
          p={8}
          transition="height 1s ease"
          overflow="hidden"
        >
          <Flex flexDir={"column"} gap={4}>
            <Heading fontSize={"14px"} fontWeight={600}>
              {item.title}
            </Heading>
            <Text
              color={colorMode === "light" ? "brand.280" : "brand.780"}
              fontSize={"13px"}
            >
              {item.intro}
            </Text>
            <Link href={`/project/${item.id}`}>
              <HStack
                color={colorMode === "light" ? "brand.420" : "brand.400"}
                fontSize={"12px"}
                fontWeight={600}
              >
                <Text>READ MORE</Text>
                <BiChevronRight size={"19px"} />
              </HStack>
            </Link>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default ProjectCard;
