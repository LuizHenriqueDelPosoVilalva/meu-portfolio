import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import NavbarLink from '../links/NavbarLink'

const StyledContainerMenu = styled.div`
  position: relative;
`

const StyledIcon = styled.img`
  border: 2px solid;
  border-color: ${(props) => props.theme.background};
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colorText};
  }
`

const StyledContainer = styled.div`
  position: absolute;
  width: 100px;
  right: 0;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 1);
  color: ${(props) => props.theme.background};
  font-weight: bold;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  color: ${(props) => props.theme.colorText};

  display: ${(props) => (props.show ? 'block' : 'none')};
`

const StyledFlexParagraph = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colorText};
    border-radius: 5px;
    color: ${(props) => props.theme.background};
  }
`

function ResponsiveNavbar() {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutSide, true)
  }, [menuRef])

  return (
    <StyledContainerMenu>
      <StyledIcon src="/icons/tresbarrass.svg" height="35px" onClick={() => setShow(!show)} />
      <StyledContainer show={show} ref={menuRef} onBlur={() => setShow(false)}>
        <StyledFlexParagraph>
          <NavbarLink to="Projects">Projetos</NavbarLink>
        </StyledFlexParagraph>
        <StyledFlexParagraph>
          <NavbarLink to="Contacts">Contatos</NavbarLink>
        </StyledFlexParagraph>
        <StyledFlexParagraph>
          <NavbarLink to="MySkills">Tecnologias</NavbarLink>
        </StyledFlexParagraph>
        <StyledFlexParagraph>
          <NavbarLink to="ImageWithSpace">Sobre mim</NavbarLink>
        </StyledFlexParagraph>
        <StyledFlexParagraph>
          <NavbarLink to="Training">Formação</NavbarLink>
        </StyledFlexParagraph>
      </StyledContainer>
    </StyledContainerMenu>
  )
}

export default ResponsiveNavbar
