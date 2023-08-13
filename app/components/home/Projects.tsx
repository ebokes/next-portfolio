"use client";

import { projectsData } from "@/app/utils/constants";
import { Title } from "@/app/utils/reuseables";
import {
  Flex,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import ProjectCard from "../elements/ProjectCard";

const Projects = () => {
  const [detailsStates, setDetailsStates] = useState<boolean[]>(
    projectsData.map(() => false)
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
  const activeColorScheme = useColorModeValue("black", "white");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "ALL CATEGORIES"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

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
        <Title>My Projects</Title>
        {/* <Flex > */}
        <List
          as={Flex}
          color="brand.780"
          gap={5}
          fontSize={"12px"}
          fontWeight={600}
          cursor={"pointer"}
        >
          <ListItem
            onClick={() => handleSelectedCategory("ALL CATEGORIES")}
            color={
              selectedCategory === "ALL CATEGORIES"
                ? activeColorScheme
                : "brand.780"
            }
          >
            ALL CATEGORIES
          </ListItem>
          {Array.from(
            new Set(projectsData.map((project) => project.category))
          ).map((category) => (
            <ListItem
              key={category}
              color={
                selectedCategory === category ? activeColorScheme : undefined
              }
              onClick={() => handleSelectedCategory(category)}
            >
              {category}
            </ListItem>
          ))}
        </List>
        {/* </Flex> */}
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={7}>
          {filteredProjects.map((item) => (
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
