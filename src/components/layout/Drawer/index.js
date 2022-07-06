
import { Link } from 'react-router-dom'
import { AppDrawer } from './Drawer.styles'

const Drawer = ({ appLinks }) => {
  return (
    <AppDrawer id="sidebar">
      <ul>
        {appLinks.map((link, i) => <li key={i}>
          <Link to={link.link}>{link.title}</Link>
        </li>)}
      </ul>
    </AppDrawer>
  )
}

export default Drawer