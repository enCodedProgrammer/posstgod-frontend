import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  img{
    max-width: 100%;
  };

  html, body, #root {
    height: 100%;
  };

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    font-weight:500;
    color: #1C0047;
    background-color: #ECECEC;
  };

  a {
    &:hover {
      text-decoration: none;
    };

    &[disabled] {
      cursor: not-allowed;
      &:active {
        pointer-events: none;
        box-shadow: none;
      };
    };
  };

  button {
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline:none;
    };
    &[disabled] {
      cursor: not-allowed;
      &:active {
        box-shadow: none;
      };
    };
  };

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  };

`

export default GlobalStyle
