import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 35px;
    width: 150px;
  `,
  big: css`
    height: 59px;
  `,
  default: css`
    height: 74px;
    width: 250px;
  `,
};

export const Btn = styled.button`
  display: inline-block;
  text-align: center;
  border: 0;
  max-width: 100%;
  font-size: 16px;
  color: #fff;
  background: #A585D1 0% 0% no-repeat padding-box;
  box-shadow: 0px 15px 20px #a585d18c;
  border-radius: 5px;
  ${(props) => sizes[props.size || 'default']};
`;

