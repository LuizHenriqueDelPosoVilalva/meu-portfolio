import { createGlobalStyle } from 'styled-components'

const GloblaStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
function App({ Component, pageProps }) {
  return (
    <>
      <GloblaStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
