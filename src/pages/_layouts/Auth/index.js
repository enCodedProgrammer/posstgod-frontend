import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import IconComment from '../../../assets/icon-comment-solid.svg'
import IconCheck from '../../../assets/Icon feather-check-square.svg'
import IconPen from '../../../assets/Icon feather-pen-tool-1.svg'
import IconAlign from '../../../assets/Icon feather-align-left.svg'
import IconArrow from '../../../assets/Icon feather-arrow-down-2.svg'
import Logo from '../../../assets/logo.svg'

import IconArrowDown from '../../../assets/Icon feather-arrow-down.svg'
import IconPerson from '../../../assets/icon-person.svg'
import IconClock from '../../../assets/Icon feather-clock-2.svg'
import IconFileText from '../../../assets/file-text.svg'
import IconFile from '../../../assets/file.svg'

import Hero from '../../../assets/Hero Image-1.svg'

import { BiMenu, BiXCircle } from 'react-icons/bi'

import {
  Wrapper,
  Nav,
  Content,
  User,
  PopoverContainer,
  LogoutButton,
  SettingsButton,
} from './styles'
// import { Style } from '@material-ui/icons';
import { Popover } from '@material-ui/core'
import { signOut } from '../../../store/modules/auth/actions'

export default function AuthLayout({ children }) {
  const [popoverAnchor, setPopoverAnchor] = useState(null)

  const dispatch = useDispatch()
  const { path } = useRouteMatch()
  const [zIndex, setZindex] = useState(0)
  const history = useHistory()

  const workspaces = useSelector((state) =>
    state.user.profile ? state.user.profile.workspaces : null,
  )

  const activeWorkspace = workspaces ? workspaces[0] : null

  const name = activeWorkspace ? activeWorkspace.slack_firstname : null
  const fullName = activeWorkspace
    ? `${activeWorkspace.slack_firstname} ${activeWorkspace.slack_lastname}`
    : null
  const slackTeam = activeWorkspace ? activeWorkspace.slack_team_name : null
  // const photo = activeWorkspace ? activeWorkspace.slack_photo : null;

  const menuProfile = [
    '/profile',
    '/account',
    '/settings',
    '/billing',
    '/password',
    '/subscription',
  ]

  const Aside = styled.aside`
    max-width: 415px;
    width: 100%;
    padding: 20px 70px;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 40px 0 60px;
      color: #1e1e1e;
      font-size: 28px;
      letter-spacing: 5px;
    }

    @media (max-width: 800px) {
      box-shadow: 400px 0px 0px 0px rgba(0, 0, 0, 0.5);
      width: 90%;
      height: 100%;
      background-color: #e9e5ff;
      position: absolute;
      z-index: ${(props) => zIndex};
      transition: 0.5s;
      position: fixed;
      @media (max-width: 500px) {
        box-shadow: 200px 0px 0px 0px rgba(0, 0, 0, 0.5);
      }
      @media (max-width: 340px) {
        box-shadow: 50px 0px 0px 0px rgba(0, 0, 0, 0.5);
      }
    }
  `
  const DrawerOFF = styled.button`
    padding: 5px;
    position: absolute;
    color: white;
    top: 20px;
    right: 20px;
    display: none;
    font-size: 50pt;
    text-align: center;
    @media (max-width: 800px) {
      display: flex;
    }
  `
  const DrawerOn = styled.button`
    padding: 5px;
    position: absolute;
    color: black;
    top: 20px;
    left: 20px;
    display: none;
    font-size: 25pt;
    text-align: center;
    @media (max-width: 800px) {
      display: flex;
    }
  `

  const open = Boolean(popoverAnchor)

  const popoverId = open ? 'user-popover' : undefined

  function openPopoverHandler(event) {
    setPopoverAnchor(event.target)
  }

  function closePopover() {
    setPopoverAnchor(null)
  }

  function settingButtonClick() {
    history.push('/profile')
    setPopoverAnchor(null)
  }

  function handleLogout() {
    dispatch(signOut())
  }

  return (
    <>
      <Wrapper>
        <Aside>
          <img src={Logo} alt="" width="150" />
          <DrawerOFF type="button" onClick={() => setZindex(zIndex === 0)}>
            <BiXCircle />
          </DrawerOFF>
          <Nav>
            {!menuProfile.includes(path) ? (
              <ul>
                <li onClick={() => setZindex(zIndex === 0)}>
                  <NavLink exact to="/dashboard">
                    <img src={IconComment} alt="" />
                    <div>
                      <span>Schedule a Message</span>
                      <small className="active">Available now!</small>
                    </div>
                  </NavLink>
                </li>
                <li className="disable">
                  <NavLink to="/create-task">
                    <img src={IconCheck} alt="" />
                    <div>
                      <span>Create Tasks</span>
                      <small>Coming soon</small>
                    </div>
                  </NavLink>
                </li>
                <li className="disable">
                  <NavLink to="/create-task">
                    <img src={IconPen} alt="" />
                    <div>
                      <span>Annotations Images</span>
                      <small>Coming soon</small>
                    </div>
                  </NavLink>
                </li>
                <li className="disable">
                  <NavLink to="/create-task">
                    <img src={IconAlign} alt="" />
                    <div>
                      <span>Create a Poll</span>
                      <small>Coming soon</small>
                    </div>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="menu-profile">
                <li>
                  <NavLink
                    exact
                    to="/dashboard"
                    onClick={() => setZindex(zIndex === 0)}
                  >
                    <img src={IconArrowDown} alt="" />
                    <div>
                      <span>Back</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/profile"
                    onClick={() => setZindex(zIndex === 0)}
                  >
                    <img src={IconPerson} alt="" />
                    <div>
                      <span>My Account</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/settings"
                    onClick={() => setZindex(zIndex === 0)}
                  >
                    <img src={IconClock} alt="" />
                    <div>
                      <span>Scheduling Settings</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/billing"
                    onClick={() => setZindex(zIndex === 0)}
                  >
                    <img src={IconFileText} alt="" />
                    <div>
                      <span>Billing</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/subscription"
                    onClick={() => setZindex(zIndex === 0)}
                  >
                    <img src={IconFile} alt="" />
                    <div>
                      <span>Subscription</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            )}
            <img src={Hero} alt="" />
            <div className="links-help">
              <Link to="/help">Help</Link>
              <Link to="/support">Support</Link>
            </div>
          </Nav>
        </Aside>
        <Content>{children}</Content>
        <User aria-labelledby={popoverId} onClick={openPopoverHandler}>
          {/* <img src={photo} className="user-image" alt="" /> */}
          <span>{name}</span>
          <img src={IconArrow} alt="" />
        </User>
        <Popover
          id={popoverId}
          open={open}
          anchorEl={popoverAnchor}
          onClose={closePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <PopoverContainer>
            <p>
              <strong>Name:</strong> {fullName}
            </p>
            <p>
              <strong>Team:</strong> {slackTeam}
            </p>
            <SettingsButton
              variant="contained"
              disableElevation
              size="small"
              onClick={settingButtonClick}
            >
              Settings
            </SettingsButton>
            <LogoutButton
              variant="contained"
              disableElevation
              size="small"
              onClick={handleLogout}
            >
              Logout
            </LogoutButton>
          </PopoverContainer>
        </Popover>
      </Wrapper>
      <DrawerOn type="button" onClick={() => setZindex(zIndex + 1)}>
        <BiMenu />
      </DrawerOn>
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
