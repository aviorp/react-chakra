import NotFoundSvg from "@/assets/404.svg";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link,
  useColorMode,
  Flex,
} from "@chakra-ui/react";

import MotionBox from "@/components/motion/Box";

export const NotFound = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      minHeight="60vh"
      direction="column"
      justifyContent="center"
      align={"center"}
    >
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "60%" }}
        margin="0 auto"
        display={"flex"}
        justifyContent={"center"}
      >
        <Image
          src={NotFoundSvg}
          h={"400px"}
          w={"400px"}
          alt="Error 404 not found Illustration"
        />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray" marginTop={4}>
            It&apos;s Okay!
          </Text>
          <Button
            marginTop={4}
            as={Link}
            href="/"
            backgroundColor={colorMode === "light" ? "brand.300" : "brand.500"}
            size="sm"
            textDecoration={"none"}
          >
            Let&apos;s Head Back
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
