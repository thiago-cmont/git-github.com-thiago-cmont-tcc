import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import React from "react";

const Link = ({ ...props }: LinkProps): React.ReactElement => {
  return <ChakraLink {...props} />;
};

export default Link;
