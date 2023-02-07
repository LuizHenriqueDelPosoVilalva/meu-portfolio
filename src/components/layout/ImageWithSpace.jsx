import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`

const StyledImage = styled.div`
  background-image: url('./minha-foto-recortada.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;

  width: 50%;
  height: 100vh;
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
