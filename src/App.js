import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TheApp from './pages/TheApp'
import NotFound from './pages/NotFound'
import AppHeader from './components/layout/Header'
import AppFooter from './components/layout/Footer'
import AppDrawer from './components/layout/Drawer'

function App() {
  const appLinks = [
    { link: '/app', title: 'The App' },
    { link: '/about', title: 'About Us' },
    { link: '/contact', title: 'Get in Touch' }
  ]
  return (
    <Router>
      <AppHeader appLinks={appLinks} />
      <AppDrawer appLinks={appLinks} />
      {/*<label className="menu-icon" htmlFor="check">*/}
      {/*  <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>*/}
      {/*  <span className="Menu"></span>*/}
      {/*  <span className="Menu"></span>*/}
      {/*  <span className="Menu"></span>*/}
      {/*</label>*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/app' element={<TheApp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
