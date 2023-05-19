import React from 'react'
import { Inicio } from '../../ui/Inicio/Inicio'
import { Personal } from '../../ui/Personal/Personal'
import { CardsLugares } from '../../ui/CardsLugares/CardsLugares'
import { Testimonioss } from '../../ui/Testimonioss/Testimonioss'



export const Main = () => {
  return (
    <main>
        <Inicio />
        {/* <Lugares /> */}
        <CardsLugares/>
        <Testimonioss/>
        <Personal />
    </main>
  )
}