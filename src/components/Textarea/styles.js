import styled from 'styled-components'

import IconUser from '../../assets/icon-user.svg'
import IconComment from '../../assets/icon-comment.svg'
import IconClock from '../../assets/icon-clock.svg'
import Logo from '../../assets/teste01.svg'

const icons = {
  user: IconUser,
  comment: IconComment,
  clock: IconClock,
  team: Logo
}

export const Label = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Field = styled.textarea.attrs(({ placeholder }) => ({
  placeholder,
}))`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-item: center;
  height: 120px;
  border-radius: 5px;
  background: #ececec;
  padding: 15px 20px;
  padding-left: 45px;
  font-size: 16px;
  color: #1e1e1e;
  border: 0;
  resize: none;
  font-family: 'Arial';
`

export const Icone = styled.img.attrs(({ icon }) => ({
  src: icons[icon || 'comment'],
}))`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 25px;
  left: 15px;
  height: 19px;
  transform: translateY(-50%);
`
