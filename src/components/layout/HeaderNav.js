import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

  const CheckActive = (navObj) =>
  {
    return navObj.isActive ? "activo" : "";  
  }  

  return (
    <header className='header'>
        <div className='logo'>
            <span>P</span>
            <h3>Pablo Oberauer Web</h3>           
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/index" className = { CheckActive }>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio"className = { CheckActive }>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/services"className = { CheckActive }>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum"className = { CheckActive }>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"className = { CheckActive }>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
