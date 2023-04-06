'use client'
import NavLink from './NavLink'
import './Navbar.styles.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='heading'>Gestionale Acsé</h1>
      <NavLink/>
    </div>
  )
}

export default Navbar