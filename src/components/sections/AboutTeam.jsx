import React from 'react'
import Button from '../common/Button'
import AboutCard from '../ui/AboutCard'
import '../../styles/global.css'
import '../../styles/components.css'

const AboutTeam = () => {
  return (
    <div className='min-h-screen bg-background'>
        <div className='flex justify-between pt-40 px-20'>
            <h1 className='tertiary-text text-3xl md:text-7xl'>
                Our Team
            </h1>
            <Button type='white'>Work at corner?</Button>
        </div>
        <div className='flex justify-between flex-wrap px-20 py-40'>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
        </div>
    </div>
  )
}

export default AboutTeam