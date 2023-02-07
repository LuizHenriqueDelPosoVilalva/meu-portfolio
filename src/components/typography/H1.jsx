import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
`

export default function H1({ children }) {
  return <Title>{children}</Title>
}
