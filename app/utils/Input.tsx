import {
  Input as ChakraInput,
  Flex,
  FormControl,
  Icon,
  InputGroup,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface InputProps {
  placeholder: string;
  icon: IconType;
  as?: any;
  value?: string | undefined;
  name?: string;
  iconBg?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  color?: string;
  align?: string;
  onFocus: () => void;
}

const Input = ({
  placeholder,
  icon,
  as,
  onChange,
  name,
  iconBg,
  color,
  onFocus,
  value,
}: InputProps) => {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <InputGroup>
        <ChakraInput
          placeholder={placeholder}
          as={as}
          pl={"59px"}
          focusBorderColor={"transparent"}
          borderRadius={0}
          background={colorMode === "light" ? "brand.220" : "brand.660"}
          border={"none"}
          _placeholder={{
            color: colorMode === "light" ? "brand.280" : "brand.200",
          }}
          boxShadow={"inset 0 1px 4px 0 rgba(15,15,20,.1)"}
          onChange={onChange}
          name={name}
          onFocus={onFocus}
          required
          position={"relative"}
          value={value}
        />

        <Flex
          color={color}
          bg={iconBg}
          pos={"absolute"}
          left={0}
          top={0}
          bottom={0}
          w={"46px"}
          zIndex={1}
          justify={"center"}
          pt={3}
        >
          <Icon as={icon} />
        </Flex>
      </InputGroup>
    </FormControl>
  );
};

export default Input;
