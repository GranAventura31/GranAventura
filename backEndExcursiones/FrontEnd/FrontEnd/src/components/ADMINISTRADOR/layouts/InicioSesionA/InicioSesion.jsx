import React, {Fragment, useEffect, useState, } from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const InicioSesion = ({user, setUser}) => {

  const [clas, setClas] = useState(false);

  const register = () =>{
      setClas (true)
  }

  const  putPanel = () =>{
      setClas(false)
  }
  

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // Validation data
    if (user.nombre === '' || user.correo === '' || user.contrasena === '') {
      alert ('¡Algún campo esta vacio!')
    }
      // Consulta
      const requestInit = {
        method: "POST",
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      }
        fetch('http://localhost:5000/api', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

      // Reiniciando state 
        setUser({
          Nombre: '',
          Correo: '',
          Contrasena: '',
          Rol: ''
        })

  }

  return (
    <Fragment>
      <div className='contenedor'>
      <div className={`wrapper ${clas ? "active" : ""}`}>
        <span className="icon-close">
          <AiOutlineCloseCircle/>
        </span>

        <div className="form-box login">
            <h2>Login</h2>
            <form action="#" >
              <div className='input-box'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" required/>
                <label>Email</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" required/>
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" /> Remember me </label>
                  <a> Forgot password? </a>
              </div>  
              <button type='submit' className="btn"> Login </button>
            </form>
              <div className="login-register">
                <p> Don't have an account? <button  className="register-link" onClick={register}>Register</button></p>
              </div>
        </div>

        <div className ={`form-box register ${clas ? "" : "contRegister"}`}>
            <h2>Register</h2>
            <form action="#" onSubmit={handleSubmit}>
            <div className='input-box'>
                <span className='icon'>
                  <FaUserCircle/>
                </span>
                <input type="text" name='nombre' onChange={handleChange}/>
                <label>User Name</label>
            </div>
              <div className='input-box'>
                <span className='icon'>
                <MdEmail />
                </span>
                <input type="email"  name='correo' onChange={handleChange} />
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'>
                <RiLockPasswordFill/>
                </span>
                <input type="password"  name='contrasena' onChange={handleChange}  />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" />I agree to the terms & condictions</label>
              </div>  
              <button type='submit' className="btn"> Register </button>
            </form>
              <div className="login-register">
                <p> Already have an account? <button onClick={putPanel} className="login-link">Login</button></p>
              </div>
        </div>

      </div>
    </div>
    </Fragment>
  )
}
