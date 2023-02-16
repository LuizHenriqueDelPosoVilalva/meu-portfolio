import styled from 'styled-components'

import H2 from '../typography/H2'
import MyTraining from '../information/MyTraining'

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

function Training() {
  return (
    <StyledContainer>
      <H2>
        <StyledSpan>Formação</StyledSpan>
      </H2>
      <MyTraining />
    </StyledContainer>
  )
}

export default Training
