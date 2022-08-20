import React, { useState } from 'react'
import "./Testimonial.css"
import { testimonialData } from '../../Data/testimonialData'
import left from "../../assest/leftarrow.png"
import right from "../../assest/rightarrow.png"
const Testimonial = () => {
  const [selected, setSelected] = useState(0)
  const tLength = testimonialData.length;
  return (
    <div className='Testimonial'>
      <div className='left-t'>

        <span>Testimonial</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <span>
          {testimonialData[selected].reviwe}
        </span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialData[selected].name}
          </span>{""}
          <span>
            -{testimonialData[selected].status}
          </span>

        </span>
      </div>



      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={testimonialData[selected].image} alt="" />
        <div className='arrow'>




          <img
            onClick={() => (
              selected === 0
                ? setSelected (tLength-1)
              :setSelected((prev)=>prev-1)
               )}
          src={left}  alt=""
        />

          <img 
           onClick={() => (
            selected === tLength-1
              ? setSelected (0)
            :setSelected((prev)=>prev+1)
             )}
          src={right} alt=""
           />
        </div>
      </div>


    </div>
  )
}

export default Testimonial;

