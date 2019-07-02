import React from "react";
import { Wrapper } from "@shared/ui";
import { Button } from "@shared/ui";

export default class Dashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      userInfo: {
        username: "Sharo",
        email: "Nema"
      }
    };
  }

  render() {
    return (
      <Wrapper>
        <div>Dashboard</div>
        <Button primary>Primary</Button>
        <Button>Button</Button>
      </Wrapper>
    );
  }
}

interface IDashboardProps {}

interface IDashboardState {
  userInfo: object;
}
