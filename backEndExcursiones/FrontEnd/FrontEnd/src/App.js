import './index.css';
import { Home } from '../src/components/pages/Home/Home';
import { Login } from './components/pages/Login/Login.jsx';
import { Routes, Route} from 'react-router-dom'
import { Header } from './components/layouts/Header/Header'
import { Contenido } from '../src/components/pages/Contenido/Contenido'
import React, {useEffect, useState, } from 'react'

//admin
import { HomeA  } from './components/ADMINISTRADOR/pages/HomeA/HomeA.jsx';
import { LoginA } from './components/ADMINISTRADOR/pages/LoginA/LoginA.jsx';
import { HeaderA } from './components/ADMINISTRADOR/layouts/HeaderA/HeaderA.jsx'
import { ContenidoA } from './components/ADMINISTRADOR/pages/ContenidoA/ContenidoA.jsx'



function App() {
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
      <div>
      <Routes>
        <Route path='/Administrador' element={<HomeA/>}/>
        <Route path='/ContenidoAdministrador' element={<ContenidoA/>}/>
      </Routes>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/Contenido' element={<Contenido/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
