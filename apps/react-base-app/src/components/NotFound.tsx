import React from "react";

export default class NotFound extends React.Component<
  INotFoundProps,
  INotFoundState
> {
  constructor(props: INotFoundProps) {
    super(props);

    this.state = {
      message: "The URL does not exist!"
    };
  }

  render() {
    return <div>404 {this.state.message}</div>;
  }
}

interface INotFoundProps {}

interface INotFoundState {
  message: string;
}
