import { createGlobalStyle } from "styled-components";
import { THEME_COLOR } from "./variables";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
    margin: 0;
    padding: 0;
    background-color: ${THEME_COLOR};
  }
`;
