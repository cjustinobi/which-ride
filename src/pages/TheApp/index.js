import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const TheApp = () => {
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
    <div className="min-height">App page</div>
  )
}

export default TheApp