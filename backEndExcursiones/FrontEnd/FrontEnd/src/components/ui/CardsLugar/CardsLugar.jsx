import React from 'react'
import { Link }  from 'react-router-dom'

export const CardsLugar = () => {
  return (
  <div className='CardLugar'> 
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' alt="" className='CardimagenciudadI' /></Link></div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Santa Marta</h2>
            {/* <p className='Cardparrafociudad'>Santa Marta es la ciudad más antigua del país</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}   
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443016/cartagena_mhqdmc.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Cartagena</h2>
            {/* <p className='Cardparrafociudad'>intensa vida nocturna, festivales culturales y paisajes exuberantes</p> */}
            {/* <p className='Cardparrafociudad'></p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443476/piscilago_m9tivm.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Piscilago</h2>
            {/* <p className='Cardparrafociudad'>Conoce nuestros toboganes de talla mundial, aumenta tu adrenalina y empápate de diversión.</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' alt="" className='CardimagenciudadI' /></Link>    
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Volcán del Totumo</h2>
            {/* <p className='Cardparrafociudad'>Dentro del volcán podrá tomar un baño de lodo que lo relajará y además exfoliará su piel.</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Comuna 13 Medellin</h2>
            {/* <p className='Cardparrafociudad'>Vive un recorrido turístico guiado por los principales puntos de la ciudad pricipal mente en la Comuna 13</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448884/cove%C3%B1as_xzp4zc.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Coveñas</h2>
            {/* <p className='Cardparrafociudad'>Disfruta de actividades acuáticas como kayak, windsurf, sunfish y kitesurf</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448921/estadio_metropolitano_z6k8cu.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Estadio Metropolitano de Barranquilla</h2>
            {/* <p className='Cardparrafociudad'>Conoce el todo lo maravilloso que tiene el estadio metropolitano</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447768/imagen2_o1vimc.jpg' alt="" className='CardimagenciudadI' /></Link>  
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Piedra del peñol</h2>
            {/* <p className='Cardparrafociudad'>Conoce la piedra mas alta de Colombia y disfruta de la mejor vista</p> */}
            {/* <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p> */}
           
        </div>
    </div>
    <div className='Cardslog'>
    <Link className='Cardslog' to='/Lugares'>Conoce mas sobre nuestros destinos</Link>
    </div>
    
</div>
  )
}
