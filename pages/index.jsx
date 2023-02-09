import styled from 'styled-components'

import Container from '../src/components/layout/Container'
import Navbar from '../src/components/layout/Navbar'
import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import AboutMe from '../src/components/information/AboutMe'
import MySkills from '../src/components/layout/MySkills'
import H1 from '../src/components/typography/H1'
import H4 from '../src/components/typography/H4'

const Content = styled.div`
  margin: 20px;
`
const SpaceNavbar = styled.div`
  margin-bottom: 20px;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

const StyledParagraph = styled.p`
  font-size: 17px;
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
            <StyledParagraph>
              <StyledSpan>olá meu nome é:</StyledSpan>
            </StyledParagraph>
            <H1>
              <StyledSpan>Luiz Henrique</StyledSpan>
            </H1>
            <H4>Desenvolvedor fullstack</H4>
            <AboutMe />
          </ImageWithSpace>
          <MySkills />
        </Container>
      </Content>
    </>
  )
}
