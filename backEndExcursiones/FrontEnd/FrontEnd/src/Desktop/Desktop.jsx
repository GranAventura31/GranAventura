import '../Desktop/desktop.css';
import { Home } from '../Desktop/components/pages/Home/Home';
import { Login } from '../Desktop/components/pages/Login/Login';
import { Routes, Route} from 'react-router-dom'
import { Contenido } from '../Desktop/components/pages/Contenido/Contenido'
import React, {useEffect, useState, } from 'react'


//admin
// import { HomeA  } from './components/ADMINISTRADOR/pages/HomeA/HomeA.jsx';
// import { ContenidoA } from './components/ADMINISTRADOR/pages/ContenidoA/ContenidoA.jsx'
import { PageLugares } from '../Desktop/components/pages/PageLugares/PageLugares';
import { RecuperacionDeContraseña } from '../Desktop/components/layouts/RecuperacionDeContraseña/RecuperacionDeContraseña';
import { Testimonios } from '../Desktop/components/layouts/Testimonios/Testimonios';


export const Desktop = () => {
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
