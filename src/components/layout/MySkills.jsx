import styled from 'styled-components'

import MyTechnologies from '../information/MyTechnologies'
import H2 from '../typography/H2'

const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`
function MySkills() {
  return (
    <StyledContainer id="MySkills">
      <H2>
        <StyledSpan>Minhas Tecnologias</StyledSpan>
      </H2>
      <MyTechnologies />
    </StyledContainer>
  )
}

export default MySkills
