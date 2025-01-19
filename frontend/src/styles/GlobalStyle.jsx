import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  header {
    font-family: monospace, monospace;
    background-color: #000000;
    color: #fcfcfc;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  body {
    font-family: monospace, monospace;
    background-color: #000000;
    color: #fcfcfc;
  }

  input {
    margin: 10px;
  }

  a {
    color: #fcfcfc;
    text-decoration: none;
    word-break: break-all;
  }

  button {
    font-family: monospace, monospace;
    background-color: #000000;
    color: #fcfcfc;
    border: 2px solid #fcfcfc;
    margin: 10px;
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
    background-color: #fcfcfc;
    color: #000000;
    border: 2px solid #000000;
  }

  a:hover {
    color: hotpink;
    font-weigth: bold; 
  }

  .container {
    text-align: left;
    border-style: solid;
    max-width: 500px;
    margin: auto;
    padding: 20px;
  }

  [class*="col-"] {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {
    body {
      font-size: 20px;
    }
  }
}
`
export default GlobalStyle;
