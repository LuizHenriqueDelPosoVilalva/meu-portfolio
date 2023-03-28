import styled from 'styled-components'

import H2 from '../typography/H2'
import SocialDev from '../projetos/SocialDev'
import JogoDaVelha from '../projetos/JogoDaVelha'
import ClimaDev from '../projetos/ClimaDev'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

function MyProjects() {
  return (
    <StyledContainer id="Projects">
      <StyledSpan>
        <H2>Projetos</H2>
      </StyledSpan>
      <ClimaDev />
      <SocialDev />
      <JogoDaVelha />
    </StyledContainer>
  )
}

export default MyProjects
