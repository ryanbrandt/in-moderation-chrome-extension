import React from "react";

import { Input } from "handsome-ui";

interface Props {}

const RuleCreationDomainInput: React.VFC<Props> = (
  props: Props
): JSX.Element => (
  <Input label="Moderated Site Domain" help="WebsiteToModerate.com" />
);

export default RuleCreationDomainInput;
