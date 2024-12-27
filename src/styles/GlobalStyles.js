import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #FFF4E6;
    --color-primary: #FF6B35;
    --color-secondary: #2C2320;
    --color-text: #2C2C2C;
    --color-accent: #FF6B35;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Roboto', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
