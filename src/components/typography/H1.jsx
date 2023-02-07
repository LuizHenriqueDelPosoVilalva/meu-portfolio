import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
`

export default function H1({ children }) {
  return <Title>{children}</Title>
}
