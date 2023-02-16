import Image from 'next/image'
import styled from 'styled-components'

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Icon({ iconName, link, alt }) {
  return (
    <a href={link} target={'_blank'} rel="noreferrer">
      <StyledImage>
        <Image src={`/icons/${iconName}.svg`} alt={alt} width="40px" height="40px" />
      </StyledImage>
    </a>
  )
}

export default Icon
