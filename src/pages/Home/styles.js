import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeBoddy = styled.div`
  width: 100%;

  @media (max-width: 550px) {
    width: 100%;

    padding: 0px;
    align-items: center;
  }
`

const ButtonSlack = `
  color: #fff;
  padding: 16px 50px;
  background: #a585d1 0% 0% no-repeat padding-box;
  // box-shadow: 0px 15px 20px #9074bb8c;
  border-radius: 12px;
  opacity: 1;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 19px;

  svg {
    margin-right: 15px;
  }
`

export const WrapperFluid = styled.div`
  width: 87%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 550px) {
    padding-left: 0px;
    padding-right: 0px;
    width: 90%;
  }

  @media (max-width: 800px) {
    margin-bottom: 100px;
    padding-left: 0px;
    padding-right: 0px;
    width: 87%;
  }

  header img {
    height: 20%;
  }
`

export const PlansWrapperFluid = styled.div`
  @media (max-width: 550px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  header img {
    /* width: 40%; */
    height: 20%;
  }
`

export const FullWrapperFluid = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }

  @media (max-width: 550px) {
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`

export const Banner = styled.section`
  height: 105vh;
  overflow: hidden;
  position: relative;
  display: flex;
  @media (max-width: 1024px) {
    height: 100vh;
  }
  @media (max-width: 800px) {
    height: 80vh;
  }

  .image-banner {
    position: absolute;
    top: 20%;
    right: 0;
    width: 50%;
    height: 100%;
    @media (max-width: 800px) {
      width: 90%;
    }

    @media (max-width: 1000px) {
      .image-banner {
        width: 100%;
        bottom: 100px;
      }
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    width: 100%;
    img {
  @media (max-width: 550px) {
    height: 130px;
    margin-top: 0;

    header img {
      width: 48%;
    }
  }
`

export const LoginButton = styled(Link)`
  padding: 16px 60px;
  text-decoration: none;
  background: #a585d1 0% 0% no-repeat padding-box;
  border-radius: 12px;
  color: #fff;
  text-align: center;

  @media (max-width: 550px) {
    padding: 15px 45px;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
  }
`

// // imagem assistente
export const AssisteatBox = styled.div`
  .bishop-container {
    position: fixed;
    top: 75vh;
    right: 170px;
    z-index: 5;
    display: flex;
    flex-dirction: row;
  }

  .bishop-text {
    padding: 10px 16px;
    box-shadow: 0px 4px 26px #1e1e1e26;
    border-radius: 12px;
    background: #fefefe;
    font-weight: 400;
    right: 220px;
    position: fixed;
    margin-top: 24px;
    animation: 0.5 ease-in-out;
  }

  .bishop-button {
    padding: 24px;
    box-shadow: 0px 4px 26px #1e1e1e26;
    border-radius: 50%;
    position: fixed;
    top: 75vh;
    z-index: 5;
    background: #fefefe;
  }

  @media (max-width: 800px) {
    .bishop-button {
      padding: 12px;
      top: 80vh;
    }

    .bishop-text {
      right: 170px;
      margin-top: 12px;
    }

    .bishop-container {
      position: fixed;
      top: 80vh;
      right: 150px;
    }
  }
  @media (max-width: 550px) {
    .bishop-container {
      position: fixed;
      top: 80vh;
      right: 120px;
    }

    .bishop-button {
      padding: 4px;
    }

    .bishop-button svg {
      width: 80%;
      top: 80vh;
    }

    .bishop-text {
      right: 130px;
      font-size: 10px;
      margin-left: 12px;
    }
  }
`

// Bolas Flutuantes
export const Ball01 = styled.div`
  position: absolute;
  z-index: 0;
  top: 150px;
  left: -20px;
  width: 100%;

  img {
    width: 100%;
    position: relative;
    z-index: 0;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

export const InfoBox04 = styled.div`
  /* background: #e9e5ff 0% 0% no-repeat padding-box; */
  /* box-shadow: 0px 5px 20px #a585d18c; */
  /* border-radius: 14px; */

  .just-clippath {
    clip-path: polygon(0 100%, 0 10%, 100% 0, 100% 90%);
    width: 100%;
    height: 100vh;
    background: #fefefe;
    position: absolute;
  }

  text-align: center;
  padding: 50px;
  margin: 0 auto 100px auto;
  position: sticky;
  z-index: 3;

  h2 {
    font-size: 34px;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    font-size: 20px;
  }
  a {
    margin-top: 30px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
  }
  @media (max-width: 550px) {
    padding: 25px;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
    a {
      margin-top: 15px;
      font-size: 20px;
    }
  }
`

export const InfoBox05 = styled.div`
  background: #e5e5e5 0% 0% no-repeat padding-box;
  margin-top: 250px;
  text-align: center;
  padding: 50px;

  width: 100%;

  div {
    width: 100%;
  }
  h3 {
    line-height: 1.5;
  }

  a {
    color: #9074bb;
  }
  @media (max-width: 550px) {
    padding: 40px;
  }
`

// Titulo
export const TitleBox01 = styled.div`
  position: absolute;
  top: 220px;
  width: 45%;
  height: 374px;
  z-index: 3;

  h3 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    color: #1c0047;
  }
  h1 {
    font-size: 56px;
    color: #1c0047;
  }

  p {
    font-size: 20px;
    margin-top: 38px;
    margin-bottom: 38px;
    color: #1c0047;
    font-weight: 500;
  }

  button {
    ${ButtonSlack}
  }
  @media (max-width: 1000px) {
    top: 200px;
    h1 {
      font-size: 36px;
    }
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    top: 270px;
    width: 100%;
  }
  @media (max-width: 550px) {
    top: 50px;
    width: 100%;
    flex-direction: column;
    position: relative;
    margin-bottom: 100px;

    h3 {
      font-size: 12pt;
      text-align: justify;
    }
    h1 {
      font-size: 32px;
      color: #1c0047;
    }
    p {
      font-size: 12pt;
      text-align: justify;
    }
    button {
      ${ButtonSlack}
      width: 75%;
      padding: 8px 10px;
      font-size: 16px;
      /* margin: auto; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

//Quadros no Boddy
export const Infos = styled.div`
  /* position: relative; */

  .just-clippath {
    clip-path: polygon(0 100%, 0 10%, 100% 0, 100% 90%);
    width: 100%;
    height: 105vh;
    background-image: linear-gradient(to right, #b294dd, #cfb5f7);
    position: absolute;
    @media (max-width: 1280px) {
      height: 120vh;
    }
    @media (max-width: 900px) {
      height: 140vh;
    }
    @media (max-width: 800px) {
      height: 180vh;
    }
  }

  .info-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    overflow: hidden;
    margin-bottom: 60px;
    position: relative;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .info-div-1 {
    width: 100%;
    overflow: hidden;
    @media (max-width: 800px) {
      width: 90%;
    }
    @media (max-width: 550px) {
      height: 100%;
    }
  }

  .info-div-2 {
    width: 100%;
    overflow: hidden;
  }

  @media (max-width: 550px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: fit-content;
  }

  span {
    display: none;
  }

  .info-div .article {
    padding: 40px;
    background: #ececec 0% 0% no-repeat;
    box-shadow: 0px 4px 26px #1e1e1e26;
    border-radius: 35px;
    margin-top: 16px;
    margin-bottom: 32px;
    margin-left: 24px;
    margin-righ: 24px;
    width: 60%;
    cursor: pointer;
    /* bottom: 50px; */
    overflow: hidden;
    position: relative;
    @media (max-width: 1280px) {
      width: 80%;
    }
  }

  .article-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  h3 {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 40px;
  }

  p {
    font-size: 16px;
    margin: 0;
    line-height: 30px;
  }

  .info-div-1 .button-container button {
    ${ButtonSlack}
    color: #38205e;
    background: #fff;
    margin-bottom: 32px;
    width: 100%;
    bottom: 50px;
    @media (max-width: 350px) {
      font-size: 10pt;
      padding: 15px 15px;
    }
  }
`

export const PlansContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;

  h1 {
    color: #1e1e1e;
    font-size: 80px;
    @media (max-width: 800px) {
      font-size: 60px;
    }
  }

  p {
    color: #d0d0d0;
    font-weight: bold;
    font-size: 16px;
  }
`

export const Plans = styled.div`
  margin-top: 40px;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1280px) {
    width: 100%;
    grid-template-columns: 1fr 1fr
  }

  @media (max-width: 800px) {
    width: 100%;
    grid-template-columns: 1fr;
  }

  article {
    max-width: 350px;
    width: 100%;
    background: #ececec;
    box-shadow: 0px 4px 26px #1e1e1e26;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #38205e;
    padding: 60px 20px;
    margin: auto;
    transition: 0.5s;
    margin-bottom: 100px;
    position: relative;

    button {
    ${ButtonSlack}
    padding: 16px 25px;
    position: absolute;
    background:  linear-gradient(to right, #D2B9FA, #A585D1);
    bottom: -25px;
    color: #fff;
    border-radius: 25px;
    @media (max-width: 350px) {
      font-size: 10pt;
      padding: 15px 15px;
    }
  }


    .price {
      color: #9074bb;
      letter-spacing: 10px;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 76px;
    }

    small {
      color: #b99ee1;
      display: block;
      margin-top: 5px;
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 0;
    }

    &:nth-child(2) {
      transform: scale(1.1);
      color: #fff;
      background: #b99ee1;
    button {
    ${ButtonSlack}
    padding: 16px 25px;
    position: absolute;
    background:  #fff;
    bottom: -25px;
    color: #1c0047;
    border-radius: 25px;
    @media (max-width: 350px) {
      font-size: 10pt;
      padding: 15px 15px;
    }
  }

      h3 {
        font-weight: semi-bold;
        background: #fafafa;
        z-index: 3;
        color: #1c0047;
        font-size: 36px;
        margin-bottom: 20px;
        padding: 5px 16px;
        border-radius: 25px;
        box-shadow: 0px 4px 26px #1e1e1e26;
        position: absolute;
        top: -28px;
      }

      .price {
        color: #fff;
      }

      small {
        color: #fff;
      }
      ul {
        background: #fefefe;
        li {
          color: #38205e;
        }
      }
    }

    h3 {
      font-weight: semi-bold;
      background: #fafafa;
      z-index: 3;
      font-size: 36px;
      margin-bottom: 20px;
      padding: 5px 16px;
      border-radius: 25px;
      box-shadow: 0px 4px 26px #1e1e1e26;
      position: absolute;
      top: -30px;
    }

    ul {
      background: #fefefe;
      padding: 32px 32px;
      border-radius: 50px;
      width: 90%;
      li {
        margin-bottom: 2px;
        margin-top: 10px;
        font-size: 14px;
        border-bottom: 1px solid #f5f5f5;
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        &:first-child {
          margin-top: 0;
        }
        .fa-check {
          padding-right: 8px;
          font-size: 20px;
        }
        .coming-soon {
          margin-bottom: 2px;
          font-size: 14px;
          text-align: left;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #38205e;
          &:first-child {
            margin-top: 0;
          }
        }
        .second {
          position: absolute;
          top: 20px;
          left: 20px;
          opacity: 0;
        }
      }
    }
  }

 */
`

export const Footer = styled.div`
  background-image: linear-gradient(to bottom, #553a7f, #2a0e55);
  font-weight: lighter;

  .end-statement {
    text-align: center;
    color: #fff;
    font-size: 20px;
    padding: 72px 0;

    button {
      padding: 16px 40px;
      margin: 20px 0;
      font-size: 20px;
      border-radius: 15px;
      color: #38205e;
      font-weight: bold;
      background: #fff;
      @media (max-width: 350px) {
        font-size: 10pt;
        padding: 15px 15px;
      }
    }
  }

  .end-statement a {
    color: #fff;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 70px 0;
    padding-bottom: 75px;
    width: 75%;

    h4 {
      color: #f5f5f5;
      font-size: 36px;
    }

    p {
      color: #f5f5f5;
      font-size: 16px;
      font-weight: normal;
    }

    .before-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      margin: auto;
      padding: 16px;

      .before-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  .help-links {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      @media (max-width: 350px) {
        margin-right: 6px;
      }
    }

    a {
      color: #d8bfff;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
`

// export const Plans = styled.div`
//   margin-top: 40px;
//   padding: 40px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   position: relative;

//   article {
//     max-width: 350px;
//     width: 100%;
//     background: #ececec;
//     box-shadow: 0px 4px 26px #1e1e1e26;
//     border-radius: 32px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: #38205e;
//     padding: 60px 20px;
//     transition: 0.5s;

//     .price {
//       color: #b99ee1;
//       letter-spacing: 10px;
//       margin-bottom: 30px;
//       font-weight: 600;
//       font-size: 42px;
//     }

//     small {
//       color: #b99ee1;
//       display: block;
//       margin-top: 5px;
//       font-weight: 600;
//       font-size: 16px;
//       letter-spacing: 0;
//     }

//     &:nth-child(2) {
//       transform: scale(1.1);
//       color: #fff;
//       background: #b99ee1;

//       .price {
//         color: #fff;
//       }

//       small {
//         color: #fff;
//       }
//       ul {
//         background: #fefefe;
//         li {
//           color: #38205e;
//         }
//       }
//     }

//     h3 {
//       font-weight: bold;
//       font-size: 32px;
//       margin-bottom: 20px;
//     }

//     ul {
//       background: #fefefe;
//       padding: 16px 32px;
//       border-radius: 24px;
//       width: 80%;
//       li {
//         margin-top: 10px;
//         font-size: 14px;
//         border-bottom: 1px solid #f5f5f5;
//         text-align: left;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         &:first-child {
//           margin-top: 0;
//         }
//         .fa-check {
//           padding-right: 8px;
//           font-size: 20px;
//         }
//       }
//     }
//   }

//   button {
//     ${ButtonSlack}
//     position: absolute;
//     bottom: -20px;
//     left: 50%;
//     color: #38205e;
//     background: #fff;
//     transform: translateX(-50%);
//     @media (max-width: 350px) {
//       font-size: 10pt;
//       padding: 15px 15px;
//     }
//   }
// `
