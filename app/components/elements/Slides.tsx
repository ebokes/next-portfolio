import { Box } from "@chakra-ui/react";
import ProjectSlide from "./ProjectSlide";

const slides = [
  <Box bg="red.300" w="200px" h="200px" />,
  <Box bg="green.300" w="200px" h="200px" />,
  <Box bg="blue.300" w="200px" h="200px" />,
];

const Slides = () => {
  return (
    <>
      <ProjectSlide slides={slides} />
    </>
  );
};

export default Slides;
