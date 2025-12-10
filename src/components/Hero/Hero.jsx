import React from 'react'
import './Hero.css'
import rightArrow from '../../assets/right-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>HOME OF THE GEEKS</h1>
            <p>We are fostering the geeks of the new generation.
                We are here to cater to and foster the misunderstood
                geniuses. The enigmas. The ones that shine so bright
                they blind all those who witness. Delicate they are,
                for with great gifts come great resentment. We ensure
                that they can tune out the hate and navigate this world
                who so desperately need them, yet choose to shun them.
            </p>
            <button className="white-btn">GET GEEK <img src={rightArrow} alt="right arrow" /></button>
        </div>
    </div>
  )
}

export default Hero;