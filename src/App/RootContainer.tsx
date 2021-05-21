import React from "react";

import RuleCreationForm from "../RuleCreation/Components/RuleCreationForm";

const RootContainer: React.VFC<{}> = (): JSX.Element => (
  <div className="app-root_container">
    <RuleCreationForm />
  </div>
);

export default RootContainer;
