import React from 'react'
import './Programs.css'
import arrow from '../../assest/right-arrow.png'
import  programsData  from '../../Data/programsData'
const Programs = () => {
  return (
    <div className='Prorams' id='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>explore our</span>
        <span>programs</span>
        <span className='stroke-text'>to shape you</span>



      </div>
      <div className='programs-categories'>
          {programsData.map((Program)=>(
            <div className='categories'>
             {Program.img}
             <span>{Program.title}</span>
             <span>{Program.detail}</span>
             <div className='join-now'>
             <span>Join Now</span>
             <img src={arrow} height='40px' width='40px'alt=""/>
             </div>
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Programs
