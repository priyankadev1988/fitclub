import React from 'react'
import './Plans.css'
import whitetick from '../../assest/whitetick.jpg'
import PlansData from '../../Data/PlansData'

const Plans = () => {
    return (
        <div className='plans-container'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='programs-header' style={{ gap: "2rem" }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <spanv className='stroke-text'>NOW WITHUS</spanv>
            </div>
            {/* palans card */}
            <div className='plans'>
                {PlansData.map((plan,i)=>(
                    <div className='plan'>
                        {plan.icon}  
                        <span>{plan.name}</span>
                        <span>$ {plan.Price}</span>
                        <div className='features'>
                            {plan.fetures.map((features)=>(
                               <div className='feature'>
                                <img src={whitetick} width="20px" height="20px"alt=""/>
                                 <span>{features}</span>
                                </div>
                            ))}

                        </div>
                        <div>
                            <span>see more benifits-></span>
                        </div>
                        <button className='btn'>join now</button>
                        
                        
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Plans
