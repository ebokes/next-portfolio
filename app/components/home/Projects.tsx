"use client";

import { ProjectDataProps, projectsData } from "@/app/utils/constants";
import { Title } from "@/app/utils/reuseables";
import {
  Flex,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import ProjectCard from "../../utils/ProjectCard";
import { Back } from "@/app/utils/BackButton";
import { usePathname } from "next/navigation";

interface ProjectsProps {
  data?: ProjectDataProps[];
}

const Projects: React.FC<ProjectsProps> = ({ data = projectsData }) => {
  const path = usePathname();
  const [detailsStates, setDetailsStates] = useState<boolean[]>(
    Array(data?.length).fill(false)
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");
  const activeColorScheme = useColorModeValue("black", "white");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "ALL CATEGORIES"
      ? data
      : data?.filter((project) => project.category === selectedCategory);

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
      <Stack id="projects">
        <HStack spacing={2} w={"fit-content"} mb={"25px"}>
          {path !== "/" && <Back />}
          <Title>My Projects</Title>
        </HStack>
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
          {filteredProjects?.map((item) => (
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
