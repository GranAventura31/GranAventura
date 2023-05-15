import React from 'react'
import { MainA } from '../../../ADMINISTRADOR/layouts/MainA/MainA'
import { FooterA } from '../../layouts/FooterA/FooterA'

import { HeaderA } from '../../../ADMINISTRADOR/layouts/HeaderA/HeaderA'

export const HomeA = () => {
  return (
    <div>
        <HeaderA/>
        <MainA/>
        <FooterA/>
    </div>
  )
}
