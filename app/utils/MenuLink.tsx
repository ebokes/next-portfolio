import { Box, Link, useColorMode } from "@chakra-ui/react";
import React from "react";

interface MenuLinkProps {
  href: string;
  title: string;
  onClose: () => void;
}

const MenuLink = ({ href, title, onClose }: MenuLinkProps) => {
  const { colorMode } = useColorMode();
  return (
    <Link
      href={`#${href}`}
      _hover={{
        color: colorMode === "light" ? "brand.420" : "brand.400",
        fontWeight: "bold",
        textDecoration: "none",
      }}
      style={{ textTransform: "uppercase" }}
      onClick={onClose}
      textAlign={"center"}
    >
      {title}
    </Link>
  );
};

export default MenuLink;
