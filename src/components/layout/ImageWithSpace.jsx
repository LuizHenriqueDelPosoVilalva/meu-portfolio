import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImage = styled.div`
  background-image: url('./Minha-Foto2.jpeg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`

const StyledContainer = styled.div`
  padding: 30px 40px;
`

function ImageWithSpace({ children }) {
  return (
    <div>
      <StyledFlex>
        <StyledImage />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
    </div>
  )
}

export default ImageWithSpace
