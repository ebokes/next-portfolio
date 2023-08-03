import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex flexDirection={"column"} gap={"23px"} id="contact-me">
      <Heading fontSize={"17px"}>Get in touch</Heading>
      <Stack bg={"#2d2d3a"}>
        <Stack m={{ base: "15px", md: "30px" }} spacing={"30px"}>
          <Box>
            <Input placeholder="Name" borderRadius={0} />
          </Box>
          <Input placeholder="Email" borderRadius={0} />
          <Textarea placeholder="Message" borderRadius={0} />
          <Box>
            <Button
              bg={"#ffc107"}
              color={"#20202a"}
              fontSize={"12px"}
              borderRadius={0}
              mb={10}
            >
              SEND MESSAGE
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Contact;
