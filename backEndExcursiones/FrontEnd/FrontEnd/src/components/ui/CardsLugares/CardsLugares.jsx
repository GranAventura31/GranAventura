import React from 'react'
import { CardsLugar } from '../CardsLugar/CardsLugar'


export const CardsLugares = () => {
  return (
    <div>
        <div>
          <h2 className='titulolugares'>LUGARES A VISITAR</h2>
          <hr className='barraT'/>  
        </div>
        <CardsLugar/>
    </div>
  )
}
