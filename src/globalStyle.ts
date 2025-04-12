import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

    @font-face {
    font-family: 'Hana2.0';
    src: url('/src/assets/Hana2-L.woff2') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hana2.0';
    src: url('/src/assets/Hana2-B.woff2') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    font-family: 'Hana2.0', sans-serif;
  }
`;
