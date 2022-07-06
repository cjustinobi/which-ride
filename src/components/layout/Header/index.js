import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'

import {Header, OpenMenu} from './Header.styles'

const AppHeader = ({ appLinks }) => {

  const openMenu = () => {
    const openMenu = document.getElementById('open-menu')
    const hideMenu = document.getElementById('hide-menu')
    const sidebar = document.getElementById('sidebar')

    openMenu.style.display = 'none'
    hideMenu.style.display = 'block'
    sidebar.style.width = '220px'
  }

  const hideMenu = () => {
    const openMenu = document.getElementById('open-menu')
    const hideMenu = document.getElementById('hide-menu')
    const sidebar = document.getElementById('sidebar')

    openMenu.style.display = 'block'
    hideMenu.style.display = 'none'
    sidebar.style.width = '0'
  }

  return (
    <Header className="app-mx">
      <Link to='/'>
        <img src={logo} alt="app logo"/>
      </Link>
      <ul>
        {appLinks.map((link, i) => <li key={i}>
          <Link to={link.link}>{link.title}</Link>
        </li>)}
      </ul>
      <OpenMenu id="open-menu" onClick={openMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </OpenMenu>
      <div id="hide-menu" onClick={hideMenu}>
        ✖
      </div>
    </Header>
  )
}

export default AppHeader