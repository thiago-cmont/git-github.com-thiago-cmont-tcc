import { Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";
import React from "react";
const Spinner = ({ ...props }: SpinnerProps): React.ReactElement => {
  return <ChakraSpinner {...props} />;
};

export default Spinner;
