import { Textarea as ChakraTextArea, TextareaProps } from "@chakra-ui/react";

import React, { useState } from "react";

const TextArea = ({
  initialText,
  ...props
}: TextareaProps & { initialText: string }): React.ReactElement => {
  const [text, setText] = useState<string>(initialText);

  return (
    <ChakraTextArea
      value={text}
      onChange={(e) => setText(e.target.value)}
      {...props}
    />
  );
};

export default TextArea;
