import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import previous_icon from '../../assets/previous-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef()
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='testimonials'>
      <img src={previous_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                <h3>CEO 0PIUM RECORDS</h3>
                <span>Atlanta, GA</span>
                </div>
              </div>
              <p>Choosing 2 become ah g33k was the best thing that ever happened
                2 m3h. g33k lif3 5eva! schyeah!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                <h3>CEO AWGE RECORDS</h3>
                <span>Harlem, NY</span>
                </div>
              </div>
              <p>Since a youngin' on the streets of Harlem I always wanted 2 be
                a geek. Becoming a geek has been an AWGE-some experience. 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                <h3>UG RAPPER</h3>
                <span>Atlanta, GA</span>
                </div>
              </div>
              <p>bORN winner. The geek program brought out my 5 star potential.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                <h3>LORD OF CHAOS</h3>
                <span>Atlanta, GA</span>
                </div>
              </div>
              <p>huh huh huh huh! Haha say geek huh. The geek program is
                lit. Like it's on Fent!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials