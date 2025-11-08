import React from 'react'
import Button from '../common/Button'

const ShortContact = () => {
  return (
    <div className='bg-primary py-10'>
        <div className='flex flex-col md:flex-row justify-between  mx-10 border border-t-surface border-b-surface py-10'>
            <div className='flex flex-col gap-5 md:gap-10'>
                <p className='font-montserrat text-sm md:text-3xl font-semibold md:font-medium text-text'>Push yourself to the edge
then turn the</p>
                <h1 className='title-text tracking-wider text-text text-8xl md:text-[164px]'>CORNER©</h1>
            </div>
            <div className='flex flex-col gap-10 justify-center font-medium'>
                <p className='text-text font-montserrat text-sm md:text-base w-full md:w-100'>We’re a marketing agency and audiovisual production company dedicated to offering all-encompassing services to help you stand out in the digital world.</p>
                <Button>Contact Us</Button>
            </div>
        </div>
    </div>
  )
}

export default ShortContact