import React from 'react'
import '../../styles/global.css'
import '../../styles/components.css'
import Button from '../common/Button'


const Testimonial = () => {
  return (
    <div className='bg-primary py-20 flex flex-col gap-32'>
        <div className='flex justify-center'>

        <h1 className='title-text text-center'>Just believe our <br /> members<span className='font-anton text-accent'>''</span> words</h1>
        </div>
        <div className='grid grid-cols-1 secondary-text gap-y-16 md:gap-y-32'>
            <div className='grid grid-cols-2 md:grid-cols-3  gap-y-16'>
                <div className='flex flex-col'>
                    <p className='text-text text-xl md:text-3xl'>Working locally</p>
                    <h1 className='text-surface text-lg md:text-2xl'>Since 2022</h1>
                </div> 
                <div className='flex flex-col'>
            <p className='text-text text-xl md:text-3xl'>Working locally</p>
            <h1 className='text-surface text-lg md:text-2xl'>Since 2022</h1>
          </div> 
          <div className='flex flex-col col-span-2 md:col-span-1'>
            <p className='text-text text-xl md:text-3xl'>Working locally</p>
            <h1 className='text-surface text-lg md:text-2xl'>Since 2022</h1>
          </div> 
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
            <p className='text-text text-xl md:text-3xl'>Working locally</p>
            <h1 className='text-surface text-lg md:text-2xl'>Since 2022</h1>
          </div> 
       <div className='flex flex-col'>
            <p className='text-text text-xl md:text-3xl'>Working locally</p>
            <h1 className='text-surface text-lg md:text-2xl'>Since 2022</h1>
          </div> 
       
            </div>

          
        </div>
        <div className='flex justify-center'>
            <Button>Train With Us</Button>
        </div>
    </div>
  )
}

export default Testimonial