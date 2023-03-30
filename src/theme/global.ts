import { createGlobalStyle } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

const nextLocalFont = localFont({
  src: [
    {
      path: '../../public/fonts/rubik-v14-latin-300.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/rubik-v14-latin-regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/rubik-v14-latin-500.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/rubik-v14-latin-700.woff2',
      weight: '700',
    },
  ],
});

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;

    * { 
      font-family: ${nextLocalFont.style.fontFamily}!important;
    }
    
    background-color: ${(props) => props.theme.colors.appClientBackground};

    overflow-x: hidden;

    ${StyledIconBase}{
      stroke-width: 2px;
    }

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
