import React from 'react'

// import IconArrowDown from '../../assets/Ico'
import IconArrowDown from '../../assets/Icon feather-arrow-down.svg'

import { Container, Content } from './styles'

function Modal({ open, handleShowModal, children }) {
  function handleHideModal(e) {
    if (e.target === e.currentTarget) {
      handleShowModal(!open)
    }
  }

  return (
    <Container open={open} onClick={handleHideModal}>
      <Content open={open}>
        <header>
          <button type="button" onClick={handleHideModal}>
            <img src={IconArrowDown} alt="" />
            Back
          </button>
        </header>
        {children}
      </Content>
    </Container>
  )
}

export default Modal
