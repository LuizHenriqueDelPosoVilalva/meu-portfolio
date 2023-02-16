import styled from 'styled-components'

import NavbarLink from '../links/NavbarLink'
import ResponsiveNavbar from '../Navigation/ResponsiveNavbar'

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 0, 0.9);
  padding: 20px 80px;
  border-bottom: solid 1px;
  width: 100%;
  max-height: 70px;
  box-sizing: border-box;
  position: fixed;
  top: 0;

  @media (max-width: 800px) {
    padding: 20px 40px;
  }
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.background};
`

const InfoContent = styled.div`
  display: flex;
  gap: 20px;
`

const StyledInfo = styled.button`
  border: 0;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => props.theme.background};
  font-weight: bold;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  color: ${(props) => props.theme.colorText};

  :hover {
    background-color: ${(props) => props.theme.colorText};
    border-radius: 5px;
    color: ${(props) => props.theme.background};
  }

  @media (max-width: 750px) {
    display: none;
  }
`

const ContainerMenu = styled.div`
  float: right;

  @media (min-width: 751px) {
    display: none;
  }
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo>Web Dev</StyledLogo>
      <InfoContent>
        <StyledInfo>
          <NavbarLink to="Projects">Projetos</NavbarLink>
        </StyledInfo>
        <StyledInfo>
          <NavbarLink to="Contacts">Contatos</NavbarLink>
        </StyledInfo>
        <StyledInfo>
          <NavbarLink to="MySkills">Tecnologias</NavbarLink>
        </StyledInfo>
        <StyledInfo>
          <NavbarLink to="ImageWithSpace">Sobre mim</NavbarLink>
        </StyledInfo>
        <StyledInfo>
          <NavbarLink to="Training">Formação</NavbarLink>
        </StyledInfo>
        <ContainerMenu>
          <ResponsiveNavbar />
        </ContainerMenu>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
