import React from 'react'
import "../Css/Heros.css"
import helmet from '../assets/helmet.png'
import tap from '../assets/tap.png'
import verified from '../assets/verified.png'
import Button from './Button'

const Heros = () => {
    const cardData = [
        {
            id: 1,
            image: helmet,
            title: "Become a Volunteer",
            description: "Your time can change everything. Right now, 703 million people live without basic access to clean water. But it doesn’t have to be that way. When you volunteer with charity: water, you’re helping bring health, dignity, and opportunity to entire communities.",
            buttonText: "Get Started",
        },

        {
            id: 2,
            image: tap,
            title: "Start a Fundraiser",
            description: "You have the power to change lives. Millions of people around the world spend hours every day walking for water that isn't even safe to drink. By starting a fundraiser for charity: water, you can help end the water crisis for a community in need.",
            buttonText: "Get Started",
        },

        {
            id: 3,
            image: verified,
            title: "Partner With Us",
            description: "For your organization, it’s an opportunity to create a measurable, life-changing impact. When you partner with charity: water, you aren’t just donating—you’re investing in health, education, and economic stability for communities around the world.",
            buttonText: "Get Started",
        }
    ]

  return (
    <main className='hero_container'>
        <section className='hero_section'>
 

            <article className='hero_section_text'>
                <p>Choose Your Way</p>
                <h6>Ways To Make A Difference</h6>
            </article>

            <article className='hero_section_cards'>
                
                    {cardData.map((card) => (
                        <div key={card.id} className='hero_section_cards_card'>
                            
                    
                    <div className='hero_section_cards_card_image'>
                        <img src={card.image} alt=''/>
                    </div>

                    <div className='hero_section_cards_card_text'>
                        <h2>{card.title}</h2>
                        <div>
                        <p>{card.description}</p>
                            <Button  className="hero_section_cards_card_button" text={card.buttonText}/>
                        </div>
                    </div>
                </div>
                    ))}
                
            
            </article>
        </section>
    </main>
  )
}

export default Heros
