import styled from 'styled-components';

export const Field = styled.div`
  padding-left: 2.25rem;
  position: relative;
  display: block;
  min-height: 1.5rem;
`;

export const Input = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
  padding: 0;
  overflow: visible;
  &:checked ~ label:before {
    color: #9074bb;
    border-color: #1c0047;
    background-color: #1c0047;
  }
  &:checked ~ label:after {
    background-color: #9074bb;
    transform: translateX(0.75rem);
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0.25rem;
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  display: inline-block;
  &:before {
    content: '';
    background-color: #9074bb;
    border: #1c0047 solid 1px;
    position: absolute;
    top: 0;
    display: block;
    height: 1rem;
    border: #1c0047 solid 1px;
    left: -2.25rem;
    width: 1.75rem;
    pointer-events: all;
    border-radius: 0.5rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  &:after {
    content: '';
    background: no-repeat 50%/50% 50%;
    position: absolute;
    display: block;
    left: calc(-2.25rem + 1px);
    width: 16px;
    height: 16px;
    background-color: #1c0047;
    border-radius: 0.5rem;
    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-transform 0.15s ease-in-out;
  }
`;
