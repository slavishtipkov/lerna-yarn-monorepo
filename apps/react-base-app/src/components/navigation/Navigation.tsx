import React from "react";

import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component<
  INavigationProps,
  INavigationState
> {
  constructor(props: INavigationProps) {
    super(props);

    this.state = {
      links: ["dashboard", "login", "reports"]
    };
  }

  render() {
    return (
      <div className="main-nav">
        {this.state.links.map((link) => (
          <NavLink to={`${link}`}>{link}</NavLink>
        ))}
      </div>
    );
  }
}

interface INavigationProps {}

interface INavigationState {
  links: Array<string>;
}
