import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  background-color: #333;
  color: white;
  
  text-align: center;
  justify-content: center;
  align-items: center;
  }

  a {
    background-color: transparent;
    width: 100%;

    text-decoration-line: none;
    
    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: left;
  }
`;

export default GlobalStyle;
