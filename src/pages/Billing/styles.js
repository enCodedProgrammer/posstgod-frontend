import styled from 'styled-components'
import Textarea from '../../components/Textarea'

export const LabelCard = styled.label`
  line-height: 5;
`

export const CamposCard = styled.div`
  height: 150px;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (min-width: 550px) {
    max-width: 100%;
  }
`

export const ButtonPagination = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  .button-page {
    background-color: #ececec;
    box-shadow: 0px 3px 6px #00000029;
    color: #1e1e1e;
    padding: 15px 25px;
    font-size: 14px;
    margin-top: 12px;
    margin-right: 12px;
    cursor: pointer;
  }
`

export const Message = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .message {
    position: relative;
    background-color: #ececec;
    box-shadow: 0px 3px 6px #00000029;
    color: #1e1e1e;
    padding: 15px 25px;
    font-size: 14px;
    margin-top: 12px;
    max-width: 590px;
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: -20px;
      top: 5px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #ececec;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    label {
      display: flex;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
      img {
        margin-right: 20px;
      }
    }
  }
  @media (max-width: 800px) {
    height: 100vh;
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
`

export const ColumnLeft = styled.div`
  max-width: 700px;
  width: 100%;
  @media (max-width: 500px) {
    max-width: 500px;
    width: 100%;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  background: #ececec 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  display: inline-block;
  padding: 5px;
  @media (max-width: 800px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  a {
    color: red;
    margin-left: 50px;
    @media (max-width: 800px) {
      margin-left: 0px;
    }
  }

  div {
    margin-left: 20px;
    display: inline-block;
    @media (max-width: 800px) {
      margin-left: 0px;

      img {
        margin-left: 10px;
      }
    }
  }
  h4 {
    font-weight: bold;
    font-size: 12pt;
    @media (max-width: 800px) {
      margin-left: 10px;
    }
  }
  p {
    color: #9074bb;
    margin-left: 150px;
    @media (max-width: 800px) {
      margin-left: 0px;
    }
  }
`

export const CustomTextarea = styled(Textarea)`
  line-height: 90px;
  vertical-align: middle;
  padding-left: 65px;

  + img {
    top: 50%;
    left: 35px;
  }
  @media (max-width: 350px) {
    h4 {
      margin-right: 3px;
    }
    p {
      margin-right: 3px;
    }
    img {
      margin-right: 3px;
    }
  }
`

export const ColumnRight = styled.div`
  max-width: 400px;
  width: 100%;
  margin-left: 40px;

  h4 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  div {
    background: #ececec;
    text-align: center;
    padding: 30px 60px;

    span {
      color: #1c0047;
      font-size: 40px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      color: #a585d1;
      font-weight: bold;
      display: block;
      margin: auto;
      font-size: 16px;
    }
  }
  @media (max-width: 800px) {
    max-width: 800px;
    text-align: center;
    width: 100%;
    margin: 0px;
    display: block;
    justify-content: center;
  }
`

export const Plans = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  &:hover article {
    filter: blur(20px);
    transform: scale(1);
    max-width: 300px;
    opacity: 0.5;
  }

  article {
    max-width: 300px;
    width: 100%;
    background: #ececec;
    box-shadow: 0px 4px 26px #1e1e1e26;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #1c0047;
    padding: 20px;
    transition: 0.5s;

    &.active {
      max-width: 330px;
      transform: scale(1.05);
      border: 2px solid #a585d1;
    }

    &:hover {
      filter: blur(0px);
      transform: scale(1.05);
      opacity: 1;
      cursor: pointer;
      border: 2px solid #a585d1;
    }

    h3 {
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 20px;
    }

    ul {
      li {
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        &.price {
          color: #48a4a0;
          letter-spacing: 3px;
          margin-bottom: 40px;
          font-weight: bold;
          font-size: 24px;
        }
        small {
          color: #c5c5c5;
          display: block;
          margin-top: 5px;
          font-size: 12px;
          letter-spacing: 0;
        }
      }
    }
  }
  @media (max-width: 800px) {
    display: grid;
    height: fit-content;
  }
`

export const ButtonNewPlan = styled.button`
  background: #a585d1 0% 0%;
  box-shadow: 0px 15px 20px #9074bb66;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  padding: 20px 40px;
  position: absolute;
  bottom: -25px;
  left: 60%;
  transform: translateX(-50%);
  font-size: 18px;
  @media (max-width: 800px) {
    bottom: 0px;
  }
`

export const ButtonCencelPlan = styled.button`
  background: #a585d1 0% 0%;
  box-shadow: 0px 15px 20px #9074bb66;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  padding: 20px 40px;
  position: absolute;
  bottom: -25px;
  left: 40%;
  transform: translateX(-50%);
  font-size: 18px;
  @media (max-width: 800px) {
    bottom: 0px;
  }
`

export const Paymento = styled.div`
  padding: 40px 10px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  table {
    display: block;
  }

  input {
    margin: 10px;
    border-radius: 5px;
    background: #ececec;
    padding: 15px 0px;
    padding-left: 45px;
    font-size: 16px;
    color: #1e1e1e;
    border: 0;
  }
  div {
    position: relative;
    left: 30px;
    top: -45px;
  }
  .ncard {
    width: 100%;
  }
  #ndata {
    width: 50px;
  }
  .ncode {
    width: 60%;
  }
  .ncep {
    width: 80%;
  }
`

export const Invoice = styled.div`
  background-color: #ececec;
  margin-bottom: 6px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 550px) {
    text-align: center;
  }
`
