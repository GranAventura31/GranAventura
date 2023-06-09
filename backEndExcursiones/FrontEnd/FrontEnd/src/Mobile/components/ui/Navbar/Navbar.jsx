import React from 'react'
import { Link }  from 'react-router-dom'



export const Navbar = () => {


  return (
    <>
      <nav className='navbarMobile'>
        
        <div>
          <Link className='linkMobile' to='/'>Pagina de inicio</Link>
          <Link className='linkMobile' to='/contenido'>Contenido</Link>
          <Link className='logMobile' to='/LogIn'>Iniciar Sesión</Link>
        </div>
      </nav>
    </>
  )
}
