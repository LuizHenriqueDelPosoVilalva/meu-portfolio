import styled from 'styled-components'

import Container from '../src/components/layout/Container'
import Navbar from '../src/components/layout/Navbar'
import H1 from '../src/components/typography/H1'

const Content = styled.div`
  margin: 20px;
`
const SpaceNavbar = styled.div`
  margin-bottom: 20px;
`

export default function HomePage() {
  return (
    <>
      <Content>
        <Container>
          <SpaceNavbar>
            <Navbar />
          </SpaceNavbar>
          <H1>Luiz Henrique</H1>
        </Container>
      </Content>
    </>
  )
}
