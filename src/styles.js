import { createGlobalStyle } from "styled-components";

export const colors = {
  lightPink: "#FFEBD9",
  hotPink: "#E66767",
  white: "#FFFFFF",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.white};
    color: ${colors.hotPink};
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
