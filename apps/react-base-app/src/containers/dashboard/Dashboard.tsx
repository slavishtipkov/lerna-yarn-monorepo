import React from "react";

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
    return <div>Dashboard</div>;
  }
}

interface IDashboardProps {}

interface IDashboardState {
  userInfo: object;
}
