import React from 'react'
import {Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import { Index } from '../components/Index'
import { Contact } from '../components/Contact'
import { Curriculum } from '../components/Curriculum'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const PortfolioRoutes = () => {
  return (
    
    <BrowserRouter>
        <HeaderNav/>

        <section className='content'>
          <Routes>
            <Route path="/" element = {<Navigate to="/index"/>}/>
            <Route path="/index" element = {<Index/>}/>
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/curriculum" element = {<Curriculum/>}/>
            <Route path="/services" element = {<Services/>}/>
            <Route path='/portfolio' element = {<Portfolio/>}/>
          </Routes>
        </section>
        
        <Footer/>
    </BrowserRouter>
  )
}
