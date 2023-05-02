import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: #EBF2FA;
    box-sizing: border-box;
  }
  .container{
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid red;
    gap: 30px;
  }
  `;
