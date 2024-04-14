import '../../styles/Nav.css'

type NavLinkProps = {
  text: string
  targetUrl: string
}

function NavLink({ targetUrl = '#', text = 'Link' }: NavLinkProps) {
  return (
    <div className='navLink'>
      <a href={targetUrl}>{text}</a>
    </div>
  )
}

export default NavLink
