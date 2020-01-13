import React from 'react'
import Link from './Link'

const NavBar = () =>
      <div className="NavBar">
        <Link url='/home' text='Home' />
        <Link url='/cellar' text='Your Cellar' />
        <Link url='/wineries' text='Wineries' />
      </div>

export default NavBar