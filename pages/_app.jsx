import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GloblaStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.colorText};
    background-color: ${(props) => props.theme.background};
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
