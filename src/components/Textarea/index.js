import React from 'react';

import { Label, Field, Icone } from './styles';

export default function Input(props) {
  const { icon } = props;
  return (
    <Label>
      <Field {...props} />
      <Icone icon={icon} />
    </Label>
  );
}
