import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useState } from 'react'

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 20px 100px;
  border-bottom: solid 1px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;

  @media (max-width: 800px) {
    padding: 20px 20px;
  }
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.background};

  @media (max-width: 450px) {
    display: none;
  }
`

const StyledInfo = styled.div`
  padding: 5px 5px;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => props.theme.background};
  font-weight: bold;

  :hover {
    background-color: ${(props) => props.theme.background};
    border-radius: 5px;
    color: ${(props) => props.theme.colorText};
  }
`

const InfoContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 650px) {
    display: flex;
    gap: 5px;
  }
`

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  return (
    <StyledNavbar>
      <StyledLogo onClick={handleClick}>Web Dev</StyledLogo>
      <InfoContent>
        <StyledInfo>
          <Link>Projetos</Link>
        </StyledInfo>
        <StyledInfo>
          <Link>Contatos</Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="MySkills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Tecnologias
          </Link>
        </StyledInfo>
        <StyledInfo>
          <Link
            to="ImageWithSpace"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Sobre mim
          </Link>
        </StyledInfo>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
