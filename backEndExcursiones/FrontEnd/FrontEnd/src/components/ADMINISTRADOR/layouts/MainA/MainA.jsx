import React from 'react'
import { Inicio } from '../../../ADMINISTRADOR/ui/InicioA/Inicio'
import { Lugares } from '../../../ADMINISTRADOR/ui/LugaresA/Lugares'
import { Personal } from '../../../ADMINISTRADOR/ui/PersonalA/Personal'


export const MainA = () => {
  return (
    <main>
        <Inicio/>
        <Lugares/>
        <Personal/>
    </main>
  )
}