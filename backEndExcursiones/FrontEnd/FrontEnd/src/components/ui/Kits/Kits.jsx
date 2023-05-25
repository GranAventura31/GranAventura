import React from 'react'
import { Kit } from '../../../components/ui/kit/kit'

export const Kits = () => {
  return (
    <div>
      <h2 className='tituloKit'>KITS</h2>
      <hr className='hrKit'/>
      <section className='containerkit'>
        <Kit/>
      </section>
    </div>
  )
}
