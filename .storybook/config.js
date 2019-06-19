import { configure } from "@storybook/react";

const req = require.context("../packages", true, /.story.js$/);
const req2 = require.context("../test-workspaces", true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
