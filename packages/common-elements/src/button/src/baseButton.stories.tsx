import { storiesOf } from "@storybook/react";
import * as React from "react";

import BaseButton from "./BaseButton";

const stories = storiesOf("BaseButton", module);

stories.add("BaseButton", () => <BaseButton />);
