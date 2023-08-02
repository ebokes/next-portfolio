import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ProjectCard = ({
  detailsStates,
  handleMouseEnter,
  handleMouseLeave,
  item,
}: any) => {
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
          bg={"#23232b"}
          w={"full"}
          p={8}
          transition="height 1s ease"
          overflow="hidden"
        >
          <Flex flexDir={"column"} gap={4}>
            <Heading fontSize={"14px"} fontWeight={600}>
              {item.title}
            </Heading>
            <Text color={"#8c8c8e"} fontSize={"13px"}>
              {item.intro}
            </Text>
            <Link href={`/projects/${item.id}`}>
              <HStack color={"#ffc107"} fontSize={"12px"} fontWeight={600}>
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
