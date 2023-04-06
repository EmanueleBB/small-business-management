'use client'
import NavLink from './NavLink'
import './Navbar.styles.css'

const Navbar = () => {
   const links:string[]=['Overview','storico','altro','Da fare oggi','ciao','tutti']

  return (
    <div className="navbar">
      <h1 className='heading'>Gestionale Acsé</h1>
      {
         links.map((field)=>(
            <NavLink 
               label={field}
            />

         ))
      }

    </div>
  )
}

export default Navbar