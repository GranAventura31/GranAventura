import React from 'react'
import {Lugar} from '../../ui/Lugar/Lugar'

export const Lugares = () => {
  return (
    <div className='lugares'>
      <h2 className='titulolugares'>LUGARES A VISITAR</h2>
      <hr className='barraT'/>
      <Lugar/>
    </div>
  )
}