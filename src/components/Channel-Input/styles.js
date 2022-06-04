import styled from 'styled-components'

import IconUser from '../../assets/icon-user.svg'
import IconComment from '../../assets/icon-comment.svg'
import IconClock from '../../assets/icon-clock.svg'

const icons = {
  user: IconUser,
  comment: IconComment,
  clock: IconClock,
}

export const Label = styled.div`
  position: relative;
  width: 100%;
`

export const Field = styled.input.attrs(({ placeholder }) => ({
  placeholder,
}))`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background: #ececec;
  padding: 5px 10px;
  padding-left: 15px;
  font-size: 17px;
  color: #1e1e1e;
  cursor: pointer;
  border: 0;

  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  
    @media (min-width: 800px) {
      height: 120px;
      overflow-y: auto;
      /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
    }
`

export const Icone = styled.img.attrs(({ icon }) => ({
  src: icons[icon || 'comment'],
}))`
  position: absolute;
  top: -25px;
  left: 15px;
  height: 20px;
  transform: translateY(-50%);
`
