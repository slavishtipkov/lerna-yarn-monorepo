import * as React from 'react';

interface Props {
  buttonText: string;
}

export default (props: Props) => <button>{props.buttonText}</button>;
