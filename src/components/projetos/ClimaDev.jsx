import styled from 'styled-components'

import Links from '../links/Links'
import H4 from '../typography/H4'

const StyledContainer = styled.div`
  width: 900px;
  border-radius: 10px;
  display: flex;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.background};

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`

const StyledImage = styled.div`
  background-image: url('./ClimaDev.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 0 0 10px;

  width: 40%;
  height: 250px;

  @media (max-width: 950px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
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

function ClimaDev() {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledContent>
        <H4>ClimaDev</H4>
        <StyledParagraph>
          Um projeto de clima feito com React, NextJs e styled-components, utilizando a API
          openWeatherMap para fazer previsões atuais, de 3 horas e 6 horas no futuro, com sugestões.
        </StyledParagraph>
        <Links link={'https://clima-dev-one.vercel.app/'} />
      </StyledContent>
    </StyledContainer>
  )
}

export default ClimaDev
