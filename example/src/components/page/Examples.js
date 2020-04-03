import { Button, Columns, Column } from "bloomer";
import React, { useState } from "react";
import ExampleMenu from "../menu";
import EffectsTree from "../../trees/effects";
import SuperheroTree from "../../trees/superhero";

const ExampleContent = ({ pick }) => (
  <Column style={{ maxWidth: "calc(100vw - 1.5rem)", overflowX: "scroll" }}>
    {pick === "superhero" ? <SuperheroTree /> : <EffectsTree />}
    <Button
      style={{ marginTop: "1.5rem" }}
      href={`https://github.com/ldd/react-tech-tree/blob/master/example/src/${pick}/index.js`}
      target="_blank"
    >
      Show Code
    </Button>
  </Column>
);

export const Examples = () => {
  const [pick, setPick] = useState("superhero");
  const choices = [
    { label: "Pixelated Effects", key: "effects" },
    { label: "X-Men", key: "superhero" }
  ];
  return (
    <Columns
      style={{
        width: "100vw",
        alignSelf: "start",
        justifyContent: "space-between"
      }}
    >
      <ExampleMenu clickHandler={setPick} choices={choices} />
      <ExampleContent pick={pick} />
    </Columns>
  );
};
