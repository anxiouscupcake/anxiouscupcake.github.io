import { Link, Route, Switch } from 'wouter'
import React from 'react'
import NavLink from './NavLink'
import '../../styles/Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <NavLink text='Home' targetUrl='/' />
      <NavLink text='Portfolio' targetUrl='/portfolio' />
      <NavLink text='Contacts' targetUrl='/contacts' />
    </div>
  )
}

export default Nav
