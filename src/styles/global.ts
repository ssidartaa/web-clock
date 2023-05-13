import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle<IGlobalProps>`
  :root {
    --theme-1: #204b57, #125e8a, #197bbd, #125e8a, #204b57;
    --theme-2: #3a4e48, #6a7b76, #8b9d83, #6a7b76, #3a4e48;
    --theme-3: #b30089, #f62dae, #fd96a9, #f62dae, #b30089;
    --theme-4: #3d3a4b, #937666, #b19994, #937666, #3d3a4b;
    --theme-5: #ffb7c3, #eec6ca, #ded6d1, #eec6ca, #ffb7c3;
    --theme-6: #59a96a, #9bdeac, #b4e7ce, #9bdeac, #59a96a;
    --theme-7: #242038, #725ac1, #8d86c9, #725ac1, #242038;
    --dark-mode: #333;
    --white-mode: #fff;

    -color-1: #197bbd;
    -color-2: #8b9d83;
    -color-3: #fd96a9;
    -color-4: #b19994;
    -color-5: #ded6d1;
    -color-6: #b4e7ce;
    -color-7: #8d86c9;
  }
  
  html, body, div, span, p {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      120deg,
      var(${({ backgroundColor }) => backgroundColor})
    );
  }
`;
