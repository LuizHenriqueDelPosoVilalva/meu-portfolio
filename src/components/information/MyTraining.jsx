import styled from 'styled-components'

import H4 from '../typography/H4'

const StyledContainer = styled.div`
  width: 900px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.background};

  @media (max-width: 950px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
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
`

function MyTraining() {
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa starter</H4>
          <StyledParagraph>
            Nessa etapa aprendi sobre do HTML5, Css, JavaScripth e versonamento de código, com
            certificado de conclusão.
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa Growth</H4>
          <StyledParagraph>
            Nessa etapa aprendi como utilizar o React com NextJs, aprendi Express, backend com
            NextJs, ORM Mongoose e banco de dados MongoDB, com certificado de conclusão.
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa Conquest</H4>
          <StyledParagraph>
            Nessa etapa aprendi a como me tornar mais atrativo para as empresas e como me preparar
            para os processos seletivos, com certificado de conclusão.
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
    </>
  )
}

export default MyTraining
