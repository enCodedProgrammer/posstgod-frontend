import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'
import axios from 'axios'
import Hero from '../../assets/Hero Image.svg';
import Path1 from '../../assets/Path 1.svg';
import Path2 from '../../assets/Path 2.svg';
import EyeOff from '../../assets/Icon feather-eye-off.svg';
import Eye from '../../assets/Icon feather-eye.svg';
import Slacklogo from '../../assets/slack.svg';
import Logo from '../../assets/logo.svg';
import {
  Container,
  ColumnRight,
  Titulo,
  Slackbtn1,
  FormGroup,
  Logbtn,
  Slackbtn,
  Boddylogin,
  LinkUrl,
} from './styles';
// import { onAuthorizeSlackHandler } from '~/helpers';
import { signInRequest, signInWithSLack } from '../../store/modules/auth/actions';
import { getSlackAuth } from '../../store/modules/slackAuth/action/slackAction';

export default function Login(props) {
  const dispatch = useDispatch();
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const url=new URLSearchParams(window.location.search)
  const code = url.get('code')
  const user = useSelector((state)=>state.slackAuth.user)
  console.log(user)
  useEffect(()=>{
    if(code){
      console.log(code)
      dispatch(getSlackAuth(code))
    }
  },[code])



  useEffect(()=>{
    if(user){
      Cookie.set('token', JSON.stringify(user.token), { expires: 7})
      props.history.push('/dashboard')
    }
  },[user])


  function onLogin(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  function handleShowPassword() {
    setShowPasswordInput(!showPasswordInput);
  }

  return (
    <>
      <Boddylogin>
        <Container>
          <img src={Logo} alt="" width="150" />
          <Titulo>Login in to your account</Titulo>

          <form>
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="myemail@address.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input
                type={showPasswordInput ? 'text' : 'password'}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={handleShowPassword}>
                <img src={showPasswordInput ? Eye : EyeOff} alt="" />
              </button>
            </FormGroup>
            <LinkUrl to="/forgot">Forgot Password?</LinkUrl>
            <Logbtn type="submit" onClick={onLogin}>
              Login
            </Logbtn>
          </form>

          <Slackbtn1 >
           {/* onClick={onAuthorizeSlackHandler}> */}
           <a href="https://slack.com/oauth/v2/authorize?client_id=2548854090610.2608182430195&scope=app_mentions:read,channels:history,channels:manage,channels:read,chat:write,commands,conversations.connect:manage,links:read,users.profile:read,users:read,users:read.email&user_scope=channels:history,channels:read,chat:write,groups:read,im:read,mpim:read,files:write">                                
           {/* <a href="https://slack.com/oauth/v2/authorize?client_id=1377530706405.2774637114533&scope=channels:history,channels:manage,chat:write,channels:read,conversations.connect:manage,links:read,users.profile:read,users:read,users:read.email&user_scope=channels:history,channels:read,channels:write,files:write,groups:read,im:read,mpim:read,users:read">                      */}
             
           <Slackbtn>Login with Slack</Slackbtn>
           </a>
            
          
            <img src={Slacklogo} alt="" />
          </Slackbtn1>
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
