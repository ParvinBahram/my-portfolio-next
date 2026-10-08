
import React from 'react'
import BriefAbout from '@/components/BriefAbout'
import SampleProjects from '@/components/SampleProjects'
import Skill from '@/components/Skill'
import InrtoCard from '@/components/InrtoCard'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div hr className='flex flex-col lg:flex-row lg:gap-x-4 container p-8'>
    <div className=" lg:w-82">
    <InrtoCard  />
    </div>
    
    <div className='lg:mx-0  lg:px-8'>
      <BriefAbout />
      <Skill />
      <Services />
      <SampleProjects/>
      <Footer />
       </div>
       </div>
  )
}

export default Home