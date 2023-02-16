import { Link } from 'react-scroll'
import { useState } from 'react'

function NavbarLink({ to, children }) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(click)
  return (
    <Link to={to} spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default NavbarLink
