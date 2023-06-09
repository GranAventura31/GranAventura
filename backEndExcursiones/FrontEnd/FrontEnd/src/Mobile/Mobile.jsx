import '../Mobile/Mobile.css';
import React, {useEffect, useState, } from 'react'
import { Home } from '../Mobile/components/pages/Home/Home';
import { Login } from '../Mobile/components/pages/Login/Login';
import { Routes, Route} from 'react-router-dom'
import { Contenido } from '../Mobile/components/pages/Contenido/Contenido'


//admin
// import { HomeA  } from './components/ADMINISTRADOR/pages/HomeA/HomeA.jsx';
// import { ContenidoA } from './components/ADMINISTRADOR/pages/ContenidoA/ContenidoA.jsx'
import { PageLugares } from '../Mobile/components/pages/PageLugares/PageLugares';
import { RecuperacionDeContraseña } from '../Mobile/components/layouts/RecuperacionDeContraseña/RecuperacionDeContraseña';
import { Testimonios } from '../Mobile/components//layouts/Testimonios/Testimonios';



export const Mobile = () => {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
      const getUsers = () =>{
        fetch('http://localhost:5000/api')
        .then(res => res.json())
        .then(res => console.log(res))  
      }
      getUsers()
    }, [])
  
    const [user, setUser] = useState({
      nombre: '',
      correo: '',
      contrasena: '',
      rol: ''
    })

    return (
      <div>
      {/* <div>
      <Routes>
        <Route path='/Administrador' element={<HomeA/>}/>
        <Route path='/ContenidoAdministrador' element={<ContenidoA/>}/>
      </Routes>
      </div> */}
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Lugares' element={<PageLugares/>}/>
        <Route path='/Testimonios' element={<Testimonios/>}/>
        <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/Contenido' element={<Contenido/>}/>
        <Route path='/RecuperacionContraseña' element={<RecuperacionDeContraseña/>}/>
      </Routes>
      </div>
    </div>
    )
}
