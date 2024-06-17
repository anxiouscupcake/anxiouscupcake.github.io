import NavLink from './NavLink'
import '../../styles/Nav.css'
import { PATH_PORTFOLIO } from '../../Constants'

function Nav() {
  return (
    <div className='nav'>
      <NavLink text='Home' targetUrl='/' />
      <NavLink text='My skills' targetUrl='/skillset' />
      <NavLink text='Portfolio' targetUrl={`/${PATH_PORTFOLIO}`} />
      <NavLink text='Contacts' targetUrl='/contacts' />
    </div>
  )
}

export default Nav
