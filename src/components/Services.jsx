import React from 'react'
import "../Css/Services.css"
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'

const Services = () => {
  return (
    <div className='Services_charity_mainContainer'>
      <Header/>
      <div className='Charity_Contaier_imag'>
       <img src='src\Charity.png'alt=''></img>
      </div>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Services
