import React from "react";

export const requestUrl = `https://dev-880339.okta.com/oauth2/default/v1/authorize?client_id=0oatobvdnFGs0SkLI356&response_type=token&scope=openid&redirect_uri=http://localhost:3000/implicit/callback&state=state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601&nonce=foo'`;
//
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
          <a href={requestUrl}>Okta Login</a>
        )}
      </div>
    );
  }
}

interface ILoginProps {}

interface ILoginState {
  authToken: string;
}
