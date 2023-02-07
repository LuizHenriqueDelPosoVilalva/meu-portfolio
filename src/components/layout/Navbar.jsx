import styled from 'styled-components'

const StyledNavbar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;
`
const StyledLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogo>Meu portfólio</StyledLogo>
    </StyledNavbar>
  )
}

export default Navbar
