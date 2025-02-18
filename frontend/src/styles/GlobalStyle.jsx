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
    font-family: monospace, monospace;
    margin: 10px;
  }

  a {
    color: #fcfcfc;
    word-break: break-all;
    text-decoration: none;
  }

  button {
    font-family: monospace, monospace;
    background-color: #000000;
    color: #fcfcfc;
    border: 2px solid #fcfcfc;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
    background-color: hotpink;
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
    border-radius: 5px;
  }

  .result {
    color: hotpink;
  }

  .option {
    background-color: #111111;
    margin: 2px;
    padding-left: 5px;
    border-radius: 5px;
  }

  .link {
    text-decoration: underline;
  }

  [class*="col-"] {
    body {
      font-size: 14px;
    }
    .link {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 600px) {
    body {
      font-size: 20px;
    }
    .link {
      font-size: 16px;
    }
  }
}
`
export default GlobalStyle;
