import React from 'react'
import { Main } from '../../../../Mobile/components/layouts/Main/Main'
import { Footer } from '../../../../Mobile/components/layouts/Footer/Footer'
import { IconWhat } from '../../../../Mobile/components/ui/IconWhat/IconWhat'
import { Header } from '../../../../Mobile/components/layouts/Header/Header'

export const Home = () => {
  return (
    <div>
        <Header/>
        <IconWhat/>
        <Main/>
        <Footer/>
    </div>
  )
}
