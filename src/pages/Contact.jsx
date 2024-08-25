import React from 'react'
import Title from '../components/Title'
import aboutImg from '../assets/about.img.webp';
import NewSletterBox from '../components/NewSletterBox'

const Contact = () => {
  return (
  <div>
    <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={'CONTACT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={aboutImg} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>Av. Pres.Figueroa Alcorta 7597 <br /> Cdad.Autonoma de Buenos Aires</p>
        <p className='text-gray-500'>Tel: (+549)11-2145-6789 <br /> Email: contact@whiskyland.com </p>
        <p className='font-semibold text-xl text-gray-600'>Careers at WhiskyLand</p>
        <p className='text-gray-500'>Learn more about our team and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>
    <NewSletterBox/>
    </div>
  )
}

export default Contact