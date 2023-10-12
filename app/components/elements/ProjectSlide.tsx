import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProjectSlide = ({ slides }: { slides: JSX.Element[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const slideWidth = 100 / slides.length;

  return (
    <VStack spacing={4} w="100%" align="center">
      <Box w="100%" overflow="hidden">
        <HStack
          w={`${slides.length * 100}%`} // Use slideWidth instead of 50%
          transform={`translateX(-${currentIndex * slideWidth}%)`}
          transition="transform 0.5s ease-in-out"
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              w={`${slideWidth}%`} // Set the width of each slide
            >
              {slide}
            </Box>
          ))}
        </HStack>
      </Box>
      <Flex justify={"space-between"} w={"full"}>
        <HStack spacing={2}>
          {slides.map((_, index) => (
            <Center
              key={index}
              w="6"
              h="6"
              rounded="full"
              bg={index === currentIndex ? "blue.500" : "gray.200"}
              onClick={() => goToSlide(index)}
              _hover={{ cursor: "pointer" }}
            />
          ))}
        </HStack>
        <HStack spacing={2}>
          <IconButton
            onClick={prevSlide}
            aria-label="prev slide"
            icon={<ChevronLeftIcon />}
          />
          <IconButton
            onClick={nextSlide}
            aria-label="next slide"
            icon={<ChevronRightIcon />}
          />
        </HStack>
      </Flex>
    </VStack>
  );
};

export default ProjectSlide;
