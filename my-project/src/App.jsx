import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import TopList from './Components/TopList/TopList'
import BgImage from './assets/2.png' 
import Banner from './Components/Banner/Banner'
import OurServces from './Components/OurServices/OurServces'

const bgStyle = {
  backgroundImage: `url(${BgImage})`, // Correct usage of template literal
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // The 'B' in BackgroundPosition should be lowercase
};

const App = () => {
  return (
    <div style={bgStyle} className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
        <Navbar/>
        <Hero/>
        <TopList/>
        <Banner/>
        <OurServces/>
      </div>
    </div>
  )
}

export default App
