import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdOutlineChevronLeft } from "react-icons/md";

interface BackButtonProp {
  children: React.ReactNode;
}

export const Back = ({ children }: BackButtonProp) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleClick = () => {
    router.back();
  };
  return (
    <HStack mb="25px" align={"center"}>
      <Tooltip label="go back" openDelay={500}>
        <HStack
          color={colorMode === "light" ? "brand.420" : "brand.400"}
          onClick={handleClick}
          cursor={"pointer"}
        >
          <Icon as={MdOutlineChevronLeft} fontSize={"1.7rem"} />
        </HStack>
      </Tooltip>
      <Divider
        orientation="vertical"
        borderColor={"brand.200"}
        height={"18px"}
        mr={"5px"}
      />
      <Box>{children}</Box>
    </HStack>
  );
};
