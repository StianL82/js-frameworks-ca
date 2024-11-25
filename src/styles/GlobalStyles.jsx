import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  --color-bodyBg: "#f0f0f0",
  --color-text: "#333",
  --color-primary: "#007BFF",
  --color-secondary: "#ff6347",
  --color-heading: "#222",
  --color-border: "#e0e0e0",
  --color-buttonBg: "#007BFF",
  --color-buttonText: "#fff",
  --color-buttonHoverBg: "#0056b3",
  --color-link: "#007BFF",
  --color-linkHover: "#0056b3",
  }  

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.textColor};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 10px 0;
    font-weight: 700;
    font-family: 'Lobster', cursive;
    color: ${(props) => props.theme.primaryColor};
  }

  p {
    line-height: 1.6;
    margin: 10px 0;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default GlobalStyle;						
