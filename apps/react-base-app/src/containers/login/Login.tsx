import React from "react";

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      authToken: ""
    };
  }

  render() {
    return (
      <div className="login">
        {this.state.authToken.length === 0 && (
          <a href="https://dev-880339.okta.com/home/oidc_client/0oatobvdnFGs0SkLI356/aln177a159h7Zf52X0g8">
            Okta Login
          </a>
        )}
      </div>
    );
  }
}

interface ILoginProps {}

interface ILoginState {
  authToken: string;
}
