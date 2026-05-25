import React from 'react'
import '../Css/Corporatepartners.css'
import subhero from '../assets/subhero.png'

const Corporatepartners = () => {
  return (
    <section className='corporate-partners-container'>
    <article className='corporate-partners-article'>
        <div className='corporate-partners-article-text'>
            <p>Corporate Partners</p>
            <h6>Our Partners</h6>
        </div>
      {/* <hr /> */}
        <div className='corporate-partners-article-image'>
            <img src={subhero} alt=''/>
        </div>
    </article>
    </section>
  )
}

export default Corporatepartners
