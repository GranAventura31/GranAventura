import React from 'react'
import { Documento } from '../../ui/DocumentoA/Documento'
import { Kits } from '../../ui/KitsA/Kits'
import { TarjetasKits } from '../../ui/TarjetasKitsA/TarjetasKits'
import { HeaderA } from '../../../ADMINISTRADOR/layouts/HeaderA/HeaderA'

export const ContenidoA = () => {
  return (
    <div>
        <HeaderA/>
        <Kits/> 
        <TarjetasKits/>
        <Documento/>
    </div>
  )
}
