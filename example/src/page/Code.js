import React, { useState } from "react";
import { Button } from "bloomer";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export const Code = ({ text = "", isInitiallyShown = false }) => {
  const [show, setShow] = useState(isInitiallyShown);
  return show ? (
    <SyntaxHighlighter language="javascript" style={docco}>
      {text}
    </SyntaxHighlighter>
  ) : (
    <Button onClick={() => setShow(true)} isColor="dark">
      Show Code
    </Button>
  );
};
