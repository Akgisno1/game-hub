import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      height="300px"
      width="300px"
      borderRadius={10}
      overflow="hidden"
      margin="10px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
