import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 14px;
  margin-top: 30px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.background};
  font-weight: bold;
`

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledParagraph = styled.p`
  font-size: 17px;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledFlex>
        <StyledParagraph>CREATED BY Luiz Henrique Del Poso Vilalva, 2023</StyledParagraph>
      </StyledFlex>
    </StyledFooter>
  )
}

export default Footer
