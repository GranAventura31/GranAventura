import React from 'react'
import { Kit } from '../../../ADMINISTRADOR/ui/kitA/kit'

export const Kits = () => {
  return (
    <div>
      <h2 className='tituloKit'>KITS</h2>
      <hr className='hrContenido' />
      <section className='containerkit'>
      <Kit/>
      </section>
    </div>
  )
}
