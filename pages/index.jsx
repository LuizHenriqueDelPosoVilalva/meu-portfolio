import styled from 'styled-components'

import Container from '../src/components/layout/Container'
import H1 from '../src/components/typography/H1'

const Content = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`

export default function HomePage() {
  return (
    <>
      <Content>
        <Container>
          <H1>Luiz Henrique</H1>
        </Container>
      </Content>
    </>
  )
}
