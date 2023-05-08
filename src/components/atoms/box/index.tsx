import { BoxProps, Box as ChakraBox } from "@chakra-ui/react";
import React from "react";

const Box = ({ children, ...props }: BoxProps): React.ReactElement => {
  return <ChakraBox {...props}>{children}</ChakraBox>;
};

export default Box;
