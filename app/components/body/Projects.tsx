"use client";

import { projectsData } from "@/app/utils/constants";
import {
  Box,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const Projects = () => {
  const [detailsStates, setDetailsStates] = useState(
    projectsData.map(() => false)
  );

  const handleMouseEnter = (index: number) => {
    setDetailsStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;
      return updatedStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    setDetailsStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  };

  return (
    <Stack>
      <Heading fontSize={"17px"}>My Projects</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7}>
        {projectsData.map((item) => (
          <Flex
            key={item.id}
            bgImage={item.img}
            // backgroundImage={"images/backdrop.webp"}
            backgroundPosition={"top"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
            // border={"1px solid red"}
            h={"300px"}
            position={"relative"}
            // _hover={{ scale: 1.5 }}
          >
            {detailsStates[item.id] && (
              <Box
                pos={"absolute"}
                bottom={0}
                // h={detailsStates[item.id] ? "70%" : "0%"}
                // bg={
                //   "linear-gradient(59deg, rgba(45, 45, 58, 0.98) 0%, rgba(43, 43, 53, 0.98) 100)"
                // }
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
                  <HStack color={"#ffc107"} fontSize={"12px"} fontWeight={600}>
                    <Link href={"/"}>READ MORE</Link>
                    <BiChevronRight size={"19px"} />
                  </HStack>
                </Flex>
              </Box>
            )}
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;
