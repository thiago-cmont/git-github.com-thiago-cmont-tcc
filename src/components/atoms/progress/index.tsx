import { Progress as ChakraProgress, ProgressProps } from "@chakra-ui/react";
import React from "react";

const Progress = ({ ...props }: ProgressProps): React.ReactElement => {
  return <ChakraProgress {...props} />;
};

export default Progress;
