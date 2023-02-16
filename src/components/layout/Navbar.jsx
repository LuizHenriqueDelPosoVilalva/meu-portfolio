import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useState } from 'react'

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
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(true)
  return (
    <StyledNavbar>
      <StyledLogo>Web Dev</StyledLogo>
      <InfoContent>
        <StyledInfo>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={closeMenu}
          >
            Projetos
          </Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => {
              click
            }}
          >
            Contatos
          </Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="MySkills"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => {
              click
            }}
          >
            Tecnologias
          </Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="ImageWithSpace"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => {
              click
            }}
          >
            Sobre mim
          </Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="Training"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => {
              click
            }}
          >
            Formação
          </Link>
        </StyledInfo>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
