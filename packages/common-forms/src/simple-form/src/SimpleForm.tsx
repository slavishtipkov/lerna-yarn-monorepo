import React from "react";

import { BaseButton, Label } from "@shared/common-elements";

const SimpleForm = () => {
  const heading = "Reusable Simple Form from shared/common-forms package (: ";

  return (
    <form>
      <h3>{heading}</h3>
      <Label />
      <BaseButton />
    </form>
  );
};

export default SimpleForm;
