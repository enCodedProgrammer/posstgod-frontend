import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Boddylogin = styled.div`
  background-color: #ececec;
  height: 100vh;
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0px;
  }
`;

export const Container = styled.div`
  background-color: #ececec;
  margin-top: 20px;
  margin-left: 142px;
  width: 350px;
  height: 679px;
  opacity: 1;

  @media (max-width: 800px) {
    padding: 10px;
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  margin-top: 90px;
  margin-bottom: 50px;
  width: 233px;
  height: 101px;
  text-align: left;
  letter-spacing: 0px;
  color: #1c0047;
  opacity: 1;
`;

export const Emailid = styled.text`
  margin-top: 20px;
  left: 142px;
  width: 90px;
  height: 19px;
  text-align: left;
  letter-spacing: 0px;
  color: #a4a4a4;
  opacity: 1;
  background-color: #ff00;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;

  label {
    color: #a4a4a4;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 60px;
    background: #ececec 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #d8bfff80;
    border-radius: 5px;
    opacity: 1;
    outline: 0;
    line-height: 50px;
    border: none;
    padding-left: 20px;
  }

  img {
    position: absolute;
    top: 38px;
    right: 10px;
    cursor: pointer;
  }
`;

export const Logbtn = styled.button`
  margin-top: 60px;
  left: 142px;
  width: 350px;
  height: 60px;
  background: #a585d1 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #9074bb66;
  border-radius: 5px;
  opacity: 1;
  color: #fff;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Slackbtn1 = styled.div`
  margin-top: 20px;
  width: 100%;

  img {
    position: relative;
    top: -43px;
    left: 90px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 60px;
    flex: 1;
    align-content: center;

    img {
      position: relative;
      top: -70%;
      left: 28%;
    }
  }
`;

export const Slackbtn = styled.button`
  left: 142px;
  width: 350px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #e0e4ee;
  border-radius: 5px;
  opacity: 1;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Createtxt = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 19px;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  font-size: 14px;
`;

export const LinkUrl = styled(Link)`
  color: #9074bb;
  text-decoration: none;
`;

export const ColumnRight = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;

  img {
    position: absolute;

    &:nth-child(1) {
      top: -110px;
      right: -40px;
    }
    &:nth-child(2) {
      top: -100px;
      right: -120px;
    }
    &:nth-child(3) {
      width: 50%;
      transform: translateY(-50%);
      top: 50%;
      right: 20px;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
