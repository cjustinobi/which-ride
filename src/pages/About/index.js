import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  let location = useLocation()

  useEffect(() => {
    if (window.innerWidth <= 767) {
      const openMenu = document.getElementById('open-menu')
      const hideMenu = document.getElementById('hide-menu')
      const sidebar = document.getElementById('sidebar')

      openMenu.style.display = 'block'
      hideMenu.style.display = 'none'
      sidebar.style.width = '0'
    }
  }, [location])

  return (
    <div className="min-height">
      About page
    </div>
  )
}

export default About