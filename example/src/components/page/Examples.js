import { Button, Columns, Column } from "bloomer";
import React, { useState } from "react";
import ExampleMenu from "../menu";
import TextTree from "../../trees/text";
import EffectsTree from "../../trees/effects";
import SuperheroTree from "../../trees/superhero";
import SlayTree from "../../trees/slay";

const choiceDic = {
  text: { label: "Text", key: "text", type: "Simple", Tree: TextTree },
  effects: { label: "Pixelated Effects", key: "effects", type: "Simple", Tree: EffectsTree }, // prettier-ignore
  superhero: { label: "X-Men", key: "superhero", type: "Decorated Links", Tree: SuperheroTree }, // prettier-ignore
  slay: { label: "Slay The Spire", key: "slay", type: "Decorated Links", Tree: SlayTree } // prettier-ignore
};

const choices = Object.values(choiceDic);

const TreePicker = ({ pick }) => {
  const { Tree = null } = choiceDic[pick] || {};
  return <Tree />;
};

const ExampleContent = ({ pick }) => (
  <Column style={{ maxWidth: "calc(100vw - 1.5rem)", overflowX: "scroll" }}>
    <TreePicker pick={pick} />
    <Button
      style={{ marginTop: "1.5rem" }}
      href={`https://github.com/ldd/react-tech-tree/blob/master/example/src/trees/${pick}/index.js`}
      target="_blank"
    >
      Show Code
    </Button>
  </Column>
);

export const Examples = () => {
  const [pick, setPick] = useState("superhero");
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
