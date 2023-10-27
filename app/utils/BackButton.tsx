import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";

const BackButton: React.FC = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const goBack = () => {
    router.back();
  };

  return (
    <IconButton
      aria-label="back"
      icon={<MdOutlineArrowBack />}
      borderColor={colorMode === "light" ? "brand.420" : "brand.400"}
      variant={"outline"}
      w={"50px"}
      mb={6}
      color={colorMode === "light" ? "brand.420" : "brand.400"}
      onClick={goBack}
    />
  );
};

export default BackButton;
