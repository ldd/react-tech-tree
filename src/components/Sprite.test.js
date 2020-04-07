import React from "react";
import renderer from "react-test-renderer";
import { Sprite } from "./Sprite";

describe("React Component [Sprite]", () => {
  it("can create empty Sprite", () => {
    const component = renderer.create(<Sprite />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can create Sprite with extra props", () => {
    const className = "someClass";
    const someProp = "@value";
    const component = renderer.create(
      <Sprite className={className} someProp={someProp} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
