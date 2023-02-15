import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GloblaStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.colorText};
    background-color: ${(props) => props.theme.background};
    padding-top: 100px;
  }
`
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GloblaStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
