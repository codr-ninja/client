import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa:300,400,700|Montserrat:400,700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    outline: 0;
  }

  button[type="submit"], select {
    cursor: pointer;
  }

  html, body, #root {
    min-height: 100vh;
  }
`;
