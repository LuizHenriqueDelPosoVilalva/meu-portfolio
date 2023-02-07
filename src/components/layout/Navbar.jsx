import styled from 'styled-components'

const StyledNavbar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;
  border: 1px solid;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`

const StyledInfo = styled.a`
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 5px;
    padding: 5px 5px;
    color: ${(props) => props.theme.background};
  }
`

const InfoContent = styled.div`
  display: flex;
  gap: 30px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo>#Meu portfólio</StyledLogo>
      <InfoContent>
        <StyledInfo>Projetos</StyledInfo>
        <StyledInfo>Contatos</StyledInfo>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
