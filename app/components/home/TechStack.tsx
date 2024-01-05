import { TechStackData } from "@/app/utils/constants";
import { Title } from "@/app/utils/reuseables";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const TechStacks = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="tech-stack">
      <Title mb={8}>My Tech Stack</Title>
      <Box
        overflow={"hidden"}
        id="stacks"
        position="relative"
        h="150px"
        bg={colorMode === "light" ? "white" : "brand.840"}
        boxShadow={"md"}
        py={"15px"}
      >
        <Box className="scroll-container primary">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              align={"center"}
              w="7rem"
              mx="1rem"
              cursor="pointer"
            >
              <Image
                src={`/images/${item.src}.svg`}
                alt={item.caption}
                height={200}
                width={200}
                style={{
                  width: "50px",
                }}
              />
              <Text
                textAlign={"center"}
                mt="1rem"
                color={colorMode === "light" ? "black" : "white"}
              >
                {item.caption}
              </Text>{" "}
            </Flex>
          ))}
        </Box>
        <Box className="scroll-container secondary">
          {TechStackData.map((item, index) => (
            <Flex
              key={index}
              direction={"column"}
              align={"center"}
              w="7rem"
              mx="1rem"
              cursor="pointer"
            >
              <Image
                src={`/images/${item.src}.svg`}
                alt={item.caption}
                height={200}
                width={200}
                style={{
                  width: "50px",
                }}
              />
              <Text
                textAlign={"center"}
                color={colorMode === "light" ? "black" : "white"}
                mt="1rem"
              >
                {item.caption}
              </Text>{" "}
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TechStacks;
