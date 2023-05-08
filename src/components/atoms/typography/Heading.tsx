import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import React from "react";
const Heading = ({ children, ...props }: HeadingProps): React.ReactElement => {
  return <ChakraHeading {...props}>{children}</ChakraHeading>;
};

export default Heading;
