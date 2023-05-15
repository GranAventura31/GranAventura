import React from 'react'

export const Kit = () => {
  return (
    <div className='Kits'>
        <div className='divImgKit'>
          <img className='imagenkit' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683229573/niko/fiesta_excursion_fmfb4a.webp" alt="" />  
        </div>
        <div className='kit'>
          <h2 className='nombrekit'>Kit especial de Gran Aventura</h2>
          <p className='desckit'>Este es el kit que brinda Gran Aventura para nuestros excursionistas.</p>
          <p className='preciokit'>$5000</p>
          <button className='btnComprar'>Comprar</button>
        </div>
    </div>
  )
}
