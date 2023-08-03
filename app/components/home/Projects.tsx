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
import React, { useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import ProjectCard from "../elements/ProjectCard";
// import ProjectCard from "../ProjectCard";

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
    <>
      <Stack gap={"23px"} id="projects">
        <Heading fontSize={"17px"}>My Projects</Heading>
        <Flex gap={5} fontSize={"12px"} fontWeight={600}>
          <Text>ALL CATEGORIES</Text>
          <Text>NEXTJS</Text>
          <Text>REACTJS</Text>
          <Text>VUE</Text>
        </Flex>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7}>
          {projectsData.map((item) => (
            <ProjectCard
              key={item.id}
              detailsStates={detailsStates}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              item={item}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Projects;