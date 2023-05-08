import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import React from "react";
const Text = ({ children, ...props }: TextProps): React.ReactElement => {
  return <ChakraText {...props}>{children}</ChakraText>;
};

export default Text;
