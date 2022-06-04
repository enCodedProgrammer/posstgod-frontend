import React, { useState } from 'react'
import Hero from '../../assets/Hero Image.svg'
import Path1 from '../../assets/Path 1.svg'
import Path2 from '../../assets/Path 2.svg'
import Slacklogo from '../../assets/slack.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  ColumnRight,
  Titulo,
  Slackbtn1,
  FormGroup,
  Logbtn,
  Slackbtn,
  Createtxt,
  Boddylogin,
  LinkUrl,
} from './styles'
import { recoverPasswordRequest } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'

export default function Forgot() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(recoverPasswordRequest(email))
  }

  return (
    <>
      <Boddylogin>
        <Container>
          <img src={Logo} alt="" width="150" />
          <Titulo>Forgot password?</Titulo>

          <form onSubmit={onSubmit}>
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <Logbtn type="submit">Recover</Logbtn>
          </form>

          <Slackbtn1>
            <Slackbtn>login with Slack</Slackbtn>
            <img src={Slacklogo} alt="" />
          </Slackbtn1>

          <Createtxt>
            Already have an account?
            <LinkUrl to="/login"> Login here.</LinkUrl>
          </Createtxt>
        </Container>
        <ColumnRight>
          <img src={Path2} alt="" />
          <img src={Path1} alt="" />
          <img src={Hero} alt="" />
        </ColumnRight>
      </Boddylogin>
    </>
  )
}
