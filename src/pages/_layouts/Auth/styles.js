import styled from 'styled-components'
// import { Link } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
import { Button } from '@material-ui/core'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #ececec;
  height: 100%;
`

export const Nav = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 30px;
      color: #1c0047;
      &.disable {
        opacity: 0.2;
      }
    }

    li a {
      color: inherit;
      text-decoration: none;
      opacity: 0.6;
      display: flex;
      align-items: flex-start;

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
      }

      img {
        margin-right: 10px;
        margin-top: 3px;
      }

      small {
        display: block;
        .active {
          color: #009546;
          letter-spacing: 0.32px;
        }
      }

      &.active {
        opacity: 1;
      }
    }

    li small {
      display: block;
      &.active {
        color: #009546;
      }
    }
  }

  .menu-profile {
    a {
      align-items: center;
    }

    img {
      margin-top: 0;
      width: 16px;
      height: 16px;
    }
  }

  .links-help {
    text-align: center;
    margin: 40px 0;
    a {
      color: #1e1e1e;
      text-decoration: none;
      margin-left: 10px;
      font-size: 20px;
      &:first-child {
        margin: 0;
      }
    }
  }
  img {
    visibility: visible;
    @media (max-width: 1400px) {
      display: none;
    }
  }
`

export const Content = styled.main`
  background: #e9e5ff 0% 0% no-repeat;
  box-shadow: 0px 3px 26px #a585d18c;
  border-radius: 66px 0px 0px 66px;
  flex: 1;
  padding: 60px 120px;
  position: relative;
  @media (max-width: 1400px) {
    padding: 150px 50px;
  }
  @media (max-width: 800px) {
    display: grid;
    width: 100%;
    height: fit-content;
    border-radius: 0px;
    box-shadow: none;
    padding: 100px 20px;
  }
  @media (max-width: 340px) {
    width: fit-content;
    padding: 100px 5px;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 120px;
  text-decoration: none;

  img.user-image {
    width: 56px;
    height: 56px;
  }

  span {
    display: inline-block;
    margin: 0 10px;
    letter-spacing: 0.42px;
    color: #1c0047;
  }
  @media (max-width: 800px) {
    top: 20px;
    right: 20px;
  }
`

export const PopoverContainer = styled.div`
  padding: 20px;
  & p {
    font-size: 0.9em;
    margin-bottom: 10px;
  }
`

export const SettingsButton = styled(Button)`
  color: white !important;
  background-color: #9c9c9c !important;
  margin-right: 5px !important;
  text-transform: none !important;
  &:hover {
    background-color: #969696 !important;
  }
`

export const LogoutButton = styled(Button)`
  color: white !important;
  background-color: #f54248 !important;
  text-transform: none !important;
  &:hover {
    background-color: #f23d43 !important;
  }
`
