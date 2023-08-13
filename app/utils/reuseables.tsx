import { Heading, Button as ChakraButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export const Title = ({ children, ...rest }: any) => {
  return (
    <Heading fontSize={"17px"} {...rest}>
      {children}
    </Heading>
  );
};

interface ButtonProps {
  title: string;
  url: string;
}

export const Button = ({ title, url }: ButtonProps) => {
  const router = useRouter();
  const handleNav = () => {
    router.push(url);
  };
  return <ChakraButton onClick={handleNav}>{title}</ChakraButton>;
};
