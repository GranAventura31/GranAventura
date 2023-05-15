import React from 'react'
import { NavbarA } from '../../../ADMINISTRADOR/ui/NavbarA/NavbarA'
import { Nombre } from '../../../ADMINISTRADOR/ui/NombreA/Nombre'

export const HeaderA = () => {
  return (
    <header>
      <Nombre content='Gran Aventura' style='h1'/>
      <NavbarA/>
    </header>
  )
}
