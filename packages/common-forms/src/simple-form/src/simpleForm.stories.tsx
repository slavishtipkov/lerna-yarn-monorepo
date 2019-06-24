import { storiesOf } from "@storybook/react";
import * as React from "react";

import SimpleForm from "./SimpleForm";

const stories = storiesOf("SimpleForm", module);

stories.add("SimpleForm", () => <SimpleForm />);
