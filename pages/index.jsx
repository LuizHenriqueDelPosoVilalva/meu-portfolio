import styled from 'styled-components'

import Container from '../src/components/layout/Container'
import Navbar from '../src/components/layout/Navbar'
import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import AboutMe from '../src/components/information/AboutMe'
import MySkills from '../src/components/layout/MySkills'
import MyProjects from '../src/components/layout/MyProjects'
import Training from '../src/components/layout/Training'
import Footer from '../src/components/layout/Footer'
import H1 from '../src/components/typography/H1'
import H4 from '../src/components/typography/H4'

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

const StyledParagraph = styled.p`
  font-size: 17px;
`

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container>
        <ImageWithSpace>
          <StyledParagraph>
            <StyledSpan>Meu nome é:</StyledSpan>
          </StyledParagraph>
          <H1>
            <StyledSpan>Luiz Henrique</StyledSpan>
          </H1>
          <H4>Desenvolvedor fullstack</H4>
          <AboutMe />
        </ImageWithSpace>
        <MySkills />
        <MyProjects />
        <Training />
        <Footer />
      </Container>
    </>
  )
}
