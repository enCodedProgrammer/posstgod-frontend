
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mask as masker, unMask } from "remask";



const Input = styled.input`
  width:40%;
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

export default function InputCVC() {
  const [value, setValue] = useState("");

  return (
    
      <InputMask
        type="text"
        name="doc"
        mask={["9999"]}
        placeholder="CVC"
        onChange={setValue}
        value={value}
      />
      
    
  );
}
