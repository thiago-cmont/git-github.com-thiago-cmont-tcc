import { Switch as ChakraSwitch, SwitchProps } from "@chakra-ui/react";
import React from "react";
const Switch = ({ ...props }: SwitchProps): React.ReactElement => {
  return <ChakraSwitch {...props} />;
};

export default Switch;
