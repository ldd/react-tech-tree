import React from "react";
import renderer from "react-test-renderer";
import { Link } from "./Link";

describe("React Component [Link]", () => {
  it("can create empty Link", () => {
    const component = renderer.create(<Link />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can create Link with some props", () => {
    const className = "someClass";
    const someProp = "@value";
    const pathData = "M 0 0 L 0 0";
    const component = renderer.create(
      <Link className={className} someProp={someProp} pathData={pathData} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
