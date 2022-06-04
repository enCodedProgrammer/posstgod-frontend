import React from 'react';

import { Field, Label, Input } from './styles';

export default function Switch(props) {
  const { label, to } = props;
  return (
    <Field>
      <Input {...props} id={to} />
      <Label htmlFor={to}>{label}</Label>
    </Field>
  );
}
