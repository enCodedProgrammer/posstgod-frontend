
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mask as masker, unMask } from "remask";



const Input = styled.input`
  width: 90%;
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

export default function ImputCard() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputMask
        type="text"
        name="doc"
        mask={["9999 9999 9999 9999"]}
        placeholder="Digite o Cartão"
        onChange={setValue}
        value={value}
      />
      
    </>
  );
}
