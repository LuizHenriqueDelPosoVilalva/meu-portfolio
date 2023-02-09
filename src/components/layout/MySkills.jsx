import styled from 'styled-components'

import H2 from '../typography/H2'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`
const StyledSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
`

function MySkills() {
  return (
    <StyledContainer>
      <H2>
        <StyledSpan>Minhas tecnologias</StyledSpan>
      </H2>
    </StyledContainer>
  )
}

export default MySkills
