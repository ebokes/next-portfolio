import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  as?: any;
  href?: string;
  rightIcon?: any;
  color?: string;
  target?: string;
  fontSize?: string;
  fontWeight?: string;
  px?: number | string;
  py?: number | string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

const Button = ({
  children,
  as,
  href,
  target,
  fontSize,
  fontWeight,
  px,
  py,
  type,
  onClick,
}: ButtonProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as={as}
      fontSize={fontSize || "14px"}
      color={colorMode === "light" ? "brand.120" : "brand.620"}
      fontWeight={fontWeight || 600}
      href={href}
      target={target}
      boxShadow={"md"}
      px={px || 8}
      py={py || 3}
      bg={colorMode === "light" ? "brand.420" : "brand.400"}
      _hover={{
        background: colorMode === "light" ? "brand.420" : "brand.400",
        color: colorMode === "light" ? "white" : "brand.620",
        transform: "translateY(-1px)",
        boxShadow: "xl",
        textDecoration: "none",
      }}
      _active={{ transform: "translateY(1px)" }}
      type={type}
      cursor={"pointer"}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Button;
