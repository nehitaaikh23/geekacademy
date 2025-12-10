import React from 'react'
import './About.css'
import about_img from '../../assets/about-us-img.jpg'
import play_icon from '../../assets/play-button.png'
import about_img_2 from '../../assets/awge-background.jpg'

const About = (props) => { 

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img_2} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {props.setPlayVideo(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT THE GEEK ACADEMY</h3>
        <h2>Fostering the Geeks of Tomorrow</h2>
        <p>We are fostering the geeks of the new generation.
                We are here to cater to and foster the misunderstood
                geniuses. The enigmas. The ones that shine so bright
                they blind all those who witness. Delicate they are,
                for with great gifts come great resentment. We ensure
                that they can tune out the hate and navigate this world
                who so desperately need them, yet choose to shun them.</p>
        <p>With a host of program choices, we take the least geek(s)
          and bring out his inner shine through rigorous creative, mental
          and even physical training in some situations.
        </p>
        <p>Geeks shine in most walks of life, hence the reason they
          are hated and perhaps misunderstood. Be it a graphics designer,
          video editor, musical artist, teacher, entrepreneur, whichever 
          field you lock into, it is yours. Choose a program and embark on 
          this exciting journey.
        </p>
      </div>
    </div>
  )
}

export default About

