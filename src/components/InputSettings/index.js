import React from 'react';

import { Label, Field } from './styles';

export default function InputSettings(props) {
  const { label } = props;
  return (
    <Label>
      {label && <span>{label}</span>}
      <Field {...props} />
    </Label>
  );
}
