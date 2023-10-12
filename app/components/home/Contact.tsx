import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Input from "../elements/Input";
import { input } from "@/app/utils/constants";
import { send } from "@emailjs/browser";

interface UserDetailsProps {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

const Contact = ({ onClose }: { onClose?: () => void }) => {
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [userDetails, setUserDetails] = useState<UserDetailsProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!userDetails) {
      return;
    }

    const { name, email, message } = userDetails;

    try {
      setLoading(true);
      const templateParams = {
        user_name: name,
        user_email: email,
        user_message: message,
      };

      await send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast({
        title: "Success",
        description:
          "Your message has been sent successfully. We would get back to you soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });

      setUserDetails({ name: "", email: "", message: "" });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops!!! Something went wrong, please try again",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });

      console.log("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const inputLeftElementBg = colorMode === "light" ? "brand.220" : "brand.660";

  const inputLeftElementBgColor = colorMode === "light" ? "brand.620" : "white";

  const handleFocusColor = (index: any) => {
    setFocusIndex(index);
  };

  const [focusIndex, setFocusIndex] = useState(null);

  return (
    <Flex flexDirection={"column"} gap={"23px"} id="contact-me" mb={"30px"}>
      <Heading fontSize={"17px"}>Get in touch</Heading>
      <Stack bg={colorMode === "light" ? "white" : "brand.840"}>
        <form onSubmit={handleFormSubmit}>
          <Stack m={{ base: "15px", md: "30px" }} spacing={"30px"}>
            {input.map(({ placeholder, icon, inputName, type }, index) => (
              <Input
                key={index}
                placeholder={placeholder}
                icon={icon}
                name={inputName}
                onChange={handleInputChange}
                value={userDetails[inputName]}
                as={type === "textarea" ? Textarea : Input}
                iconBg={
                  focusIndex === index
                    ? colorMode === "light"
                      ? "brand.420"
                      : "brand.400"
                    : inputLeftElementBg
                }
                color={
                  focusIndex === index
                    ? colorMode === "light"
                      ? "white"
                      : "brand.620"
                    : inputLeftElementBgColor
                }
                onFocus={() => handleFocusColor(index)}
              />
            ))}

            <Box>
              <Button
                bg={colorMode === "light" ? "brand.420" : "brand.400"}
                color={colorMode === "light" ? "white" : "brand.620"}
                fontSize={"12px"}
                borderRadius={0}
                mb={10}
                boxShadow={"md"}
                isLoading={loading}
                _hover={{
                  background: colorMode === "light" ? "brand.420" : "brand.400",
                  color: colorMode === "light" ? "white" : "brand.620",
                  transform: "translateY(-1px)",
                  boxShadow: "xl",
                }}
                _active={{ transform: "translateY(1px)" }}
                type="submit"
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default Contact;
