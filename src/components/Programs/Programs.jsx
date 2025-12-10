import React from 'react'
import Title from '../Title/Title'
import './Programs.css'
import the_yn_program from '../../assets/the-yn-program.jpg'
import the_flacko_program from '../../assets/the-flacko-program.jpg'
import the_whole_gang_program from '../../assets/the-whole-gang-program.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={the_yn_program} alt="awge-program" />
            <div className="caption">
              <p>THE YN PROGRAM</p>
            </div>
            
        </div>
        <div className="program">
            <img src={the_flacko_program} alt="awge-program" />
            <div className="caption">
              <p>THE AWGE PROGRAM</p>
            </div>
        </div>
        <div className="program">
            <img src={the_whole_gang_program} alt="awge-program" />
            <div className="caption">
              <p>THE WHOLE GANG PROGRAM</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;