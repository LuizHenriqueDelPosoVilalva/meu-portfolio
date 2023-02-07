import styled from 'styled-components'

import Container from '../src/components/layout/Container'
import Navbar from '../src/components/layout/Navbar'
import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typography/H1'

const Content = styled.div`
  margin: 20px;
`
const SpaceNavbar = styled.div`
  margin-bottom: 20px;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

export default function HomePage() {
  return (
    <>
      <Content>
        <Container>
          <SpaceNavbar>
            <Navbar />
          </SpaceNavbar>
          <ImageWithSpace>
            <p>
              <StyledSpan>olá meu nome é:</StyledSpan>
            </p>
            <H1>
              <StyledSpan>Luiz Henrique</StyledSpan>
            </H1>
          </ImageWithSpace>
        </Container>
      </Content>
    </>
  )
}
