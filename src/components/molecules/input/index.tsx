import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import React from "react";
const Input = ({ children, ...props }: InputProps): React.ReactElement => {
  return <ChakraInput {...props}>{children}</ChakraInput>;
};

export default Input;
