import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  Flex,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import MenuLink from "./MenuLink";

interface RightbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function RightbarDrawer({ isOpen, onClose }: RightbarDrawerProps) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode === "light" ? "brand.220" : "brand.620"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box mb={"35px"} />
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir={"column"} gap={"20px"}>
              <MenuLink href="home" title="Home" onClose={onClose} />
              <MenuLink href="about-me" title="About Me" onClose={onClose} />
              <MenuLink href="services" title="My Services" onClose={onClose} />
              <MenuLink
                href="tech-stack"
                title="Tech Stack"
                onClose={onClose}
              />
              <MenuLink
                href="recommendations"
                title="Recommendations"
                onClose={onClose}
              />
              <MenuLink href="projects" title="Projects" onClose={onClose} />
              <MenuLink
                href="contact-me"
                title="Contact Me"
                onClose={onClose}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default RightbarDrawer;
