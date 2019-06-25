import * as React from "react";

import { SimpleForm } from "@shared/common-forms";

const App: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
      <SimpleForm />
    </div>
  );
};

export default App;
