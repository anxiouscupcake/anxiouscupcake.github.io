import { Link } from 'wouter'
import '../../styles/Nav.css'

type NavLinkProps = {
  text: string
  targetUrl: string
}

function NavLink({ targetUrl = '#', text = 'Link' }: NavLinkProps) {
  return (
    <div className='navLink'>
      <Link href={targetUrl}>{text}</Link>
    </div>
  )
}

export default NavLink
