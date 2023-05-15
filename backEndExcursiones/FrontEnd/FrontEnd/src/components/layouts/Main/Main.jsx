import React from 'react'
import { Inicio } from '../../ui/Inicio/Inicio'
import { Lugares } from '../../ui/Lugares/Lugares'
import { Personal } from '../../ui/Personal/Personal'


export const Main = () => {
  return (
    <main>
        <Inicio />
        <Lugares />
        <Personal />
    </main>
  )
}