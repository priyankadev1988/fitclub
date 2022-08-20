import './App.css'
import React from 'react'
import Hero from './component/hero/Hero'
import Programs from './component/Programs/Programs'
import Reasons from './component/Reasons/Reasons'
import Plans from './component/Plans/Plans'
import Testimonial from './component/Testimonial/Testimonial'
import Join from './component/join/Join'
import Footer from './component/footer/Footer'


                                                                                                                                                                                                                    

function App( ) {
  return (
    <div className='App'>
      <Hero/>
  <Programs/>
  <Reasons/>
  <Plans/>
<Testimonial/>
<Join/>
<Footer/>
    </div>
  )
}

export default App
