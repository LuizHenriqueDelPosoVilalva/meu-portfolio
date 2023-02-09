import Image from 'next/image'

function Icon({ iconName, size, link, alt }) {
  return (
    <a href={link} target={'_blank'} rel="noreferrer">
      <Image src={`/icons/${iconName}.svg`} alt={alt} width={size} height={size} />
    </a>
  )
}

Icon.defaultProps = {
  size: '50px'
}

export default Icon
