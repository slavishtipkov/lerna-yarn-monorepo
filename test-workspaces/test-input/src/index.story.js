import React from "react";
import { storiesOf } from "@storybook/react";

import TestInput from ".";

storiesOf("TestInput", module).add("default", () => (
  <TestInput placeholder="Hello World! TestInput" />
));
