
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mask as masker, unMask } from "remask";



const Input = styled.input`
  width:55%;
  margin-left:30px;
`;

const  InputMask = ({ mask, onChange, value, ...props }) => {
  const handleChange = ev => {
    const originalValue = unMask(ev.target.value);
    // const maskedValue = masker(originalValue, mask);
    onChange(originalValue);
  };

  const handleValue = masker(value, mask);

  return <Input {...props} onChange={handleChange} value={handleValue} />;
};

export default function InputData() {
  const [value, setValue] = useState("");

  return (
    
      <InputMask
        type="text"
        name="doc"
        mask={["99/99"]}
        placeholder="MM/AA"
        onChange={setValue}
        value={value}
      />
      
    
  );
}
