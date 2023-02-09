import styled from 'styled-components'

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  border: 1px solid;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;

  @media (max-width: 800px) {
    padding: 20px 20px;
  }
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 450px) {
    display: none;
  }
`

const StyledInfo = styled.a`
  padding: 5px 5px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 5px;
    color: ${(props) => props.theme.background};
  }
`

const InfoContent = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 650px) {
    display: flex;
    gap: 5px;
  }
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo>Web Dev</StyledLogo>
      <InfoContent>
        <StyledInfo>Projetos</StyledInfo>
        <StyledInfo>Contatos</StyledInfo>
        <StyledInfo>Certificados</StyledInfo>
        <StyledInfo>Sobre mim</StyledInfo>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
