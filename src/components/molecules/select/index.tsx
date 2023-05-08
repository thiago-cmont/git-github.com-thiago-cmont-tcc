import { Select as ChakraButton, SelectProps } from "@chakra-ui/react";
import React from "react";

const SelectOption = (value: string): React.ReactElement => (
  <option value={value}>{value}</option>
);
const Select = ({
  data,
  ...props
}: SelectProps & { data: string[] }): React.ReactElement => {
  return (
    <ChakraButton {...props}>
      {data.length &&
        data.map((value) => {
          return SelectOption(value);
        })}
    </ChakraButton>
  );
};

export default Select;
