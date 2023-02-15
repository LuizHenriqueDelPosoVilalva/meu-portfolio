import styled from 'styled-components'

import H2 from '../typography/H2'
import SocialDev from '../projetos/SocialDev'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

function MyProjects() {
  return (
    <StyledContainer>
      <StyledSpan>
        <H2>Projetos</H2>
      </StyledSpan>
      <SocialDev />
    </StyledContainer>
  )
}

export default MyProjects
