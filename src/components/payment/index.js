import React from 'react'

import IconArrowDown from '../../assets/Icon feather-arrow-down.svg'

import { Container, Content } from './styles'

function Payment({ open, handleShowPayment, children }) {
  function handleHidePayment(e) {
    if (e.target === e.currentTarget) {
      handleShowPayment(!open)
    }
  }

  return (
    <Container open={open} onClick={handleHidePayment}>
      <Content open={open}>
        <header>
          <button type="button" onClick={handleHidePayment}>
            <img src={IconArrowDown} alt="" />
            Back
          </button>
        </header>
        {children}
      </Content>
    </Container>
  )
}

export default Payment
