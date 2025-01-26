import NavLink from './NavLink'
import '../../styles/Nav.css'
import { PATH_RESUME } from '../../Constants'

function Nav() {
  return (
    <div className='nav'>
      {/* <NavLink text='Home' targetUrl='/' /> */}
      {/* <NavLink text='Portfolio' targetUrl={`/${PATH_PORTFOLIO}`} /> */}
      <NavLink text='Resume' targetUrl={`/${PATH_RESUME}`} />
      {/* <NavLink text='Contacts' targetUrl={`/${PATH_CONTACTS}`} /> */}
    </div>
  )
}

export default Nav
