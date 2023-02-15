import styled from 'styled-components'

import H4 from '../typography/H4'

const StyledContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.background};
  padding: 30px 40px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

const Space = styled.div`
  margin-top: 10px;

  @media (max-width: 500px) {
    text-align: center;
  }
`

const StyledFrontEnd = styled.div`
  margin-top: 30px;
`

const StyledBacktEnd = styled.div`
  margin-top: 30px;
`

const StyledBancoDeDados = styled.div`
  margin-top: 30px;
`

const StyledParagraph = styled.p`
  font-size: 17px;
  padding: 5px;
`

function MyTechnologies() {
  return (
    <StyledContainer>
      <Space>
        <H4>Frontend</H4>
        <StyledFrontEnd>
          <StyledParagraph>.React</StyledParagraph>
          <StyledParagraph>.NextJs</StyledParagraph>
          <StyledParagraph>.Styled-Components</StyledParagraph>
          <StyledParagraph>.SASS</StyledParagraph>
        </StyledFrontEnd>
      </Space>
      <Space>
        <H4>Backend</H4>
        <StyledBacktEnd>
          <StyledParagraph>.NodeJs</StyledParagraph>
          <StyledParagraph>.NextJs</StyledParagraph>
          <StyledParagraph>.Express</StyledParagraph>
        </StyledBacktEnd>
      </Space>
      <Space>
        <H4>Banco de dados</H4>
        <StyledBancoDeDados>
          <StyledParagraph>.Mongoose</StyledParagraph>
          <StyledParagraph>.MongoDb</StyledParagraph>
        </StyledBancoDeDados>
      </Space>
    </StyledContainer>
  )
}

export default MyTechnologies
