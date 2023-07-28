import "./WelcomeWrapper.css";
import { FC, ReactNode } from "react";
import { Box, Grid } from "@chakra-ui/react";
type PageProps = {
  children: ReactNode;
};

export const WelcomeWrapper: FC<PageProps> = ({ children }) => {
  return (
    <Box>
      <Box>
        <ul className="circles">
          {Array.from(Array(20).keys()).map((_, index) => (
            <li key={index} />
          ))}
        </ul>
      </Box>
      <Grid placeItems={"center"} h={"100%"} p={150} pl={200}>
        {children}
      </Grid>
    </Box>
  );
};
