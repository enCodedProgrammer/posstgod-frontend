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
`;

export const Field = styled.input.attrs(({ placeholder }) => ({
  placeholder,
}))`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: #ececec;
  padding: 0 20px;
  padding-left: 45px;
  font-size: 16px;
  color: #1e1e1e;
  border: 0;
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
