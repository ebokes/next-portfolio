import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

interface CoverImageProps {
  back?: boolean;
  children: React.ReactNode;
  backgroundImg: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ children, backgroundImg }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="home"
      p={{ base: "15px", md: "30px" }}
      // h={"full"}
      style={{
        background:
          colorMode === "light"
            ? `linear-gradient(rgba(240, 240, 246, 0.93) 0%, rgba(240, 240, 246, 0.96) 70%, rgba(240, 240, 246, 0.99) 80%, rgb(240, 240, 246) 100%), url(images/${backgroundImg}.webp)`
            : `linear-gradient(rgba(30, 30, 40, 0.9) 0%, rgba(30, 30, 40, 0.9) 70%, rgba(30, 30, 40, 0.9) 80%, rgb(30, 30, 40) 100%), url(images/${backgroundImg}.webp)`,
      }}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Box
        style={{
          background:
            colorMode === "light"
              ? `linear-gradient(0deg, rgba(45, 45, 58, 0.8) 15%, rgba(45, 45, 58, 0.6) 50%, rgba(43, 43, 53, 0.6) 100%), url(images/${backgroundImg}.webp)`
              : `linear-gradient(0deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%), url(images/${backgroundImg}.webp)`,
        }}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        p={{ base: 0, md: "30px" }}
        color={"white"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CoverImage;
