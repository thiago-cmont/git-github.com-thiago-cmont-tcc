import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";
const Button = ({ children, ...props }: ButtonProps): React.ReactElement => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

export default Button;
