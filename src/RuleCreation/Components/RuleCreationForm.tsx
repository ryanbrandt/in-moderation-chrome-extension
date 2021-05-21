import React from "react";

import { Button } from "handsome-ui";

import RuleCreationDomainInput from "../Subcomponents/RuleCreationDomainInput";

interface Props {}

const RuleCreationForm: React.VFC<Props> = (props: Props): JSX.Element => (
  <div className="creation_form-container">
    <h1>Create Moderation Rule</h1>
    <RuleCreationDomainInput />
    <Button title="Create Rule" onClick={() => null} inverting round disabled />
  </div>
);

export default RuleCreationForm;
