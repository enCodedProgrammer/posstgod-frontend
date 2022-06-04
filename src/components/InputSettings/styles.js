import styled from 'styled-components';

import IconUser from '~/assets/icon-user.svg';
import IconComment from '~/assets/icon-comment.svg';
import IconClock from '~/assets/icon-clock.svg';

const icons = {
  user: IconUser,
  comment: IconComment,
  clock: IconClock,
};

export const Label = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #ececec;
  span {
    padding-left: 20px;
    color: #1e1e1e;
    font-weight: bold;
    font-size: 14px;
    flex-basis: 170px;
    @media (max-width: 800px) {
    flex-basis: 170px;
  }
  }
  
`;

export const Field = styled.input.attrs(({ placeholder }) => ({
  placeholder,
}))`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: #ececec;
  padding: 0 10px;
  font-size: 16px;
  color: #1e1e1e;
  border: 0;
  flex: 1;
`;

export const Icone = styled.img.attrs(({ icon }) => ({
  src: icons[icon || 'comment'],
}))`
  position: absolute;
  top: 50%;
  left: 15px;
  height: 19px;
  transform: translateY(-50%);
`;
