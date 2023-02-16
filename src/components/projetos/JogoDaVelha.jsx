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
  background-image: url('./jogodavelha.png');
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

function JogoDaVelha() {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledContent>
        <H4>Jogo da Velha</H4>
        <StyledParagraph>
          Um jogo da velha tradicional, feito com React e NextJs, com sistema de placar, vencedor e
          reset do jogo caso empate.
        </StyledParagraph>
        <Links link={'https://react-jogo-da-velha-psi.vercel.app/'} />
      </StyledContent>
    </StyledContainer>
  )
}

export default JogoDaVelha
