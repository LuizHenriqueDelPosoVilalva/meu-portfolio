import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const StyledImage = styled.div`
  background-image: url('./Minha-Foto2.jpeg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    width: 400px;
    height: 400px;
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
`

const StyledContainer = styled.div`
  padding: 30px 40px;
`

function ImageWithSpace({ children }) {
  return (
    <div id="ImageWithSpace">
      <StyledFlex>
        <StyledImage />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
    </div>
  )
}

export default ImageWithSpace
