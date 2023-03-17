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
          <H4>Faculdade</H4>
          <StyledParagraph>
            Estou cursando tecnologia em analise e desenvolvimento de sistemas na faculdade IFMS-
            Instituto Federal de Mato Grosso do Sul.{' '}
            <strong>inicio: 14/03/2023, fim: Cursando.</strong>
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa starter</H4>
          <StyledParagraph>
            Nessa etapa aprendi sobre do HTML5, Css, JavaScripth e versonamento de código, com
            certificado de conclusão.
            <strong>inicio: 27/09/2022, fim: 20/10/2022.</strong>
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa Growth</H4>
          <StyledParagraph>
            Nessa etapa aprendi como utilizar o React com NextJs, aprendi Express, backend com
            NextJs, ORM Mongoose e banco de dados MongoDB, com certificado de conclusão.
            <strong>inicio: 21/10/2022, fim: 30/01/2023.</strong>
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledContent>
          <H4>Curso SejaDev etapa Conquest</H4>
          <StyledParagraph>
            Nessa etapa aprendi a como me tornar mais atrativo para as empresas e como me preparar
            para os processos seletivos, com certificado de conclusão.
            <strong>inicio: 01/02/2023, fim: 14/02/2023.</strong>
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
    </>
  )
}

export default MyTraining
