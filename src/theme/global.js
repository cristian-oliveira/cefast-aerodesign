import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;

    @font-face {
      font-family: '' !important;
      font-weight: 300;
      src: '../../public/fonts/rubik-v14-latin-300.woff2' format('woff2'),
    }
    @font-face {
      font-family: '' !important;
      font-weight: 400;
      src: '../../public/fonts/rubik-v14-latin-regular.woff2' format('woff2'),
    }
    @font-face {
      font-family: '' !important;
      font-weight: 500;
      src: '../../public/fonts/rubik-v14-latin-500.woff2' format('woff2'),
    }
    @font-face {
      font-family: '' !important;
      font-weight: 700;
      src: '../../public/fonts/rubik-v14-latin-700.woff2' format('woff2'),
    }

    background-color: ${(props) => props.theme.colors.appClientBackground};

    overflow-x: hidden;

    a {
      text-decoration: unset;
    }
    button {
      span {
        font-weight: 500;
      }
    }
  }
`;

export default GlobalStyle;
