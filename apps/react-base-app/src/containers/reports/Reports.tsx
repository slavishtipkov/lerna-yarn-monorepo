import React from "react";

export default class Reports extends React.Component<
  IReportsProps,
  IReportsState
> {
  constructor(props: IReportsProps) {
    super(props);

    this.state = {
      reportType: "Risk Report"
    };
  }

  render() {
    return <div>{this.state.reportType}</div>;
  }
}

interface IReportsProps {}

interface IReportsState {
  reportType: string;
}
