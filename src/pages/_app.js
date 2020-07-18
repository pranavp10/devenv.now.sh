import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import theme from '../theme';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #49fcd4;
          color: #000000;
        }
        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
);
GlobalStyle.propTypes = {
  children: PropTypes.node,
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };
export default MyApp;
