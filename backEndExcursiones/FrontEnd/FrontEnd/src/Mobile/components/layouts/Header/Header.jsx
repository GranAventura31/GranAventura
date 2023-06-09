import React from 'react'
// import { Navbar } from '../../../../Mobile/components/ui/Navbar/Navbar'
import { Nombre } from '../../../../Mobile/components/ui/Nombre/Nombre'
import { MenuHamburguesa } from '../../../../Mobile/components/ui/MenuHamburguesa/MenuHamburguesa'

export const Header = () => {
  return (
    <header className='headerMobile'>
      <div>
      <Nombre content='GranAventura' style='h1Mobile'/>
      </div>
      <div>
      <MenuHamburguesa/>
      </div>
      {/* <Navbar/> */}
    </header>
  )
}