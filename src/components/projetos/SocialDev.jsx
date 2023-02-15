import styled from 'styled-components'

import LinkProjects from '../linkprojects/LinkProjects'
import H4 from '../typography/H4'

const StyledContainer = styled.div`
  width: 1200px;
  border-radius: 10px;
  display: flex;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.background};
`

const StyledImage = styled.div`
  background-image: url('./coffee-background.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 0 0 10px;

  width: 40%;
  height: 250px;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 40px;
`

const StyledParagraph = styled.p`
  font-size: 17px;
  max-width: 800px;
  text-align: center;
`

function SocialDev() {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledContent>
        <H4>Social Dev</H4>
        <StyledParagraph>
          Uma rede social para programadores, esse projeto foi feito em duas semanas, foi utilizado
          no frontend React, NextJs e styled components, o backend foi feito com NextJs e os dados
          dos usuarios foram enviados para ORM mongoose e armazedado no banco de dados MongoDb.
        </StyledParagraph>
        <LinkProjects link={'https://social-dev-omega.vercel.app/login'} />
      </StyledContent>
    </StyledContainer>
  )
}

export default SocialDev
