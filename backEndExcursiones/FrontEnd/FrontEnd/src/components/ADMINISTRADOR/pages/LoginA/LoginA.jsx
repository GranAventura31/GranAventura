import React,{useEffect, useState, } from 'react'
import { InicioSesion} from '../../../ADMINISTRADOR/layouts/InicioSesionA/InicioSesion'

export const LoginA = ({user, setUser}) => {
 
  return (
    <InicioSesion user={user} setUser={setUser}/>
  )
}
