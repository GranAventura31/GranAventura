import React from 'react'
import { Link }  from 'react-router-dom'


export const NavbarA = () => {
  return (
    <nav className='navbar'>
        <Link className='link' to='/Administrador'>Pagina de inicio</Link>
        <Link className='link' to='/contenidoAdministrador'>Contenido</Link>
        {/* <Link className='link' to='/administrador'>Administrador</Link> */}
        <Link className='log' to='/LogIn'>Login</Link>
    </nav>
  )
}
