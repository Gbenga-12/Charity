import React from 'react'
import Header from '../components/Header'
import '../Css/Volunteer.css'
import Boyglass from '../assets/Boyglass.png'
import Button from '../components/Button'
import Heros from '../components/Heros'
import Funds from '../components/Funds'
import Corporatepartners from '../components/Corporatepartners'
import Footer from '../components/Footer'

const Volunteer = () => {
  return (
   <main className='volunteer_container'>

    <section className='volunteer_herosection'>
    <Header />

   <article className='volunteer_herosection_image'>
    <img src={Boyglass} alt=''/>
    <div className='volunteer_herosection_image_text'>
        <h6>Our Programs</h6>
        <Button text="Get Involved" className="volunteer_button"/>
    </div>
   </article>

    <Heros />
    <Funds />
    <Corporatepartners />
    <Footer />

  
    </section>
   </main>
  )
}

export default Volunteer
