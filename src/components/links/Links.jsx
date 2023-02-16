import styled from 'styled-components'

const StyledLink = styled.a`
  padding: 5px 5px;
  text-decoration: none;
`

const StyledParagraph = styled.p`
  font-size: 17px;
`

const StyledTitle = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
  :hover {
    background-color: ${(props) => props.theme.background};
    border-radius: 5px;
    color: ${(props) => props.theme.colorText};
  }
`

function Links({ link }) {
  return (
    <StyledLink href={link} target={'_blank'} rel="noreferrer">
      <StyledParagraph>
        <StyledTitle>Clique aqui para acessar o projeto</StyledTitle>
      </StyledParagraph>
    </StyledLink>
  )
}

export default Links
