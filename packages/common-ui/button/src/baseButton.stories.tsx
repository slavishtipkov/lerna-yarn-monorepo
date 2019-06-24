import * as React from "react";
import { storiesOf } from "@storybook/react";

import BaseButton from "./BaseButton";

const stories = storiesOf("BaseButton", module);

stories.add("BaseButton", () => <BaseButton />);
