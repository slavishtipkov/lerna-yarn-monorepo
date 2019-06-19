import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import TestInput from ".";

describe("TestInput", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<TestInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
