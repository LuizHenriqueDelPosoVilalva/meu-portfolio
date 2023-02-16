import styled from 'styled-components'

import NavbarLink from '../links/NavbarLink'

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 0, 0.9);
  padding: 20px 50px;
  border-bottom: solid 1px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;

  @media (max-width: 800px) {
    padding: 5px 5px;
  }
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.background};

  @media (max-width: 550px) {
    display: none;
  }
`

const StyledInfo = styled.button`
  border: 0;
  padding: 10px 5px;
  gap: 5px;
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

  @media (max-width: 450px) {
    font-size: 15px;
    padding: 2px;
  }
`

const InfoContent = styled.div`
  display: flex;
  gap: 10px;

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
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
