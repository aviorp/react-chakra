import { FC, ReactNode } from "react";
import { Snackbar } from "@/components/Snackbar";
import {
  Box,
  Flex,
  Spinner,
  Toast,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

type PageProps = {
  title?: string;
  children: ReactNode;
  loading?: boolean;
  error?: string;
  success?: boolean;
};

const baseToastOptions = {
  isClosable: true,
  duration: 5000,
};

const Page: FC<PageProps> = ({ children, loading, error, success }) => {
  const toast = useToast();

  if (loading)
    return (
      <Flex
        direction={"column"}
        h={"90vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size="xl" color={useColorModeValue("brand.400", "white")} />
      </Flex>
    );
  if (error)
    toast({
      ...baseToastOptions,
      status: "error",
      title: error,
      description: "Something went wrong. Please try again later.",
    });
  if (success) {
    toast({
      ...baseToastOptions,
      status: "success",
      title: "Success!",
      description: "Your action has been completed successfully.",
    });
  }
  return <Box w={"100%"}>{children}</Box>;
};

export default Page;
