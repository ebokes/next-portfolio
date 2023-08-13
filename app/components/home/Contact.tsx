import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";

const Contact = ({ onClose }: any) => {
  const { colorMode } = useColorMode();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    onClose();
  };
  return (
    <Flex flexDirection={"column"} gap={"23px"} id="contact-me" mb={"30px"}>
      <Heading fontSize={"17px"}>Get in touch</Heading>
      <Stack bg={colorMode === "light" ? "white" : "brand.840"}>
        <Stack m={{ base: "15px", md: "30px" }} spacing={"30px"}>
          {/* <form> */}
          <Box>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                />
                <Input
                  placeholder="Name"
                  pl={"50px"}
                  focusBorderColor={"transparent"}
                  borderRadius={0}
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  border={"none"}
                  _placeholder={{
                    color: colorMode === "light" ? "brand.280" : "brand.200",
                  }}
                />
                <InputLeftElement
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  sx={{
                    // Change background color of icon on focus
                    "input:focus + &": {
                      background:
                        colorMode === "light" ? "brand.420" : "brand.400",
                      color: colorMode === "light" ? "white" : "brand.620",
                    },
                  }}
                >
                  <Icon as={BsPersonFill} />
                </InputLeftElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                />
                <Input
                  placeholder="Email"
                  pl={"50px"}
                  focusBorderColor={"transparent"}
                  borderRadius={0}
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  border={"none"}
                  _placeholder={{
                    color: colorMode === "light" ? "brand.280" : "brand.200",
                  }}
                />
                <InputLeftElement
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  sx={{
                    "input:focus + &": {
                      background:
                        colorMode === "light" ? "brand.420" : "brand.400",
                      color: colorMode === "light" ? "white" : "brand.620",
                    },
                  }}
                >
                  <Icon as={MdAlternateEmail} />
                </InputLeftElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                />
                <Input
                  as={Textarea}
                  placeholder="Message"
                  pl={"50px"}
                  focusBorderColor={"transparent"}
                  borderRadius={0}
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  border={"none"}
                  _placeholder={{
                    color: colorMode === "light" ? "brand.280" : "brand.200",
                  }}
                />
                <InputLeftElement
                  background={colorMode === "light" ? "brand.220" : "brand.660"}
                  sx={{
                    "input:focus + &": {
                      background:
                        colorMode === "light" ? "brand.420" : "brand.400",
                      color: colorMode === "light" ? "white" : "brand.620",
                    },
                  }}
                >
                  <Icon as={MdOutlineEmail} />
                </InputLeftElement>
              </InputGroup>
            </FormControl>
          </Box>

          <Box>
            <Button
              bg={colorMode === "light" ? "brand.420" : "brand.400"}
              color={colorMode === "light" ? "white" : "brand.620"}
              fontSize={"12px"}
              borderRadius={0}
              mb={10}
              boxShadow={"md"}
              _hover={{
                background: colorMode === "light" ? "brand.420" : "brand.400",
                color: colorMode === "light" ? "white" : "brand.620",
                transform: "translateY(-1px)",
                boxShadow: "xl",
              }}
              onClick={handleSubmit}
            >
              SEND MESSAGE
            </Button>
          </Box>
        </Stack>
      </Stack>
      {/* </form> */}
    </Flex>
  );
};

export default Contact;
