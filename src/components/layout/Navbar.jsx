import styled from 'styled-components'

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

const StyledInfo = styled.a`
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
  const handleClick = () => {
    console.log('AQUI')
  }

  return (
    <StyledNavbar>
      <StyledLogo>Web Dev</StyledLogo>
      <InfoContent>
        <StyledInfo>Projetos</StyledInfo>
        <StyledInfo>Contatos</StyledInfo>
        <StyledInfo onClick={handleClick}>Tecnologias</StyledInfo>
        <StyledInfo>Sobre mim</StyledInfo>
      </InfoContent>
    </StyledNavbar>
  )
}

export default Navbar
