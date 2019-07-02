import React from "react";

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      authToken: "No Auth Token!"
    };
  }

  render() {
    return <div className="login">{this.state.authToken}</div>;
  }
}

interface ILoginProps {}

interface ILoginState {
  authToken: string;
}
