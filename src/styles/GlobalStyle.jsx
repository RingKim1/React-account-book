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
`;

export default GlobalStyle;
