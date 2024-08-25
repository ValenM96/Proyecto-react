import React from 'react'
import Title from '../components/Title'
import aboutImg from '../assets/about.img.webp';
import NewSletterBox from '../components/NewSletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={aboutImg} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id neque mollitia obcaecati quisquam, natus vitae nesciunt eum ab aut modi provident eos, expedita error et, omnis debitis quaerat molestias?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae molestiae a quisquam, consectetur architecto non. Porro repudiandae, fuga nisi nesciunt debitis doloremque eos omnis, delectus numquam error excepturi iusto voluptatem.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic error quis, aspernatur vero ex eius labore in delectus dicta aliquam aliquid ut dolorem libero quas repudiandae dolor minus. Consequatur, cumque.</p>
          </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Queality Assurence:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti minima ipsum quod iure qui nemo sit perferendis doloribus officia, maiores obcaecati ipsa sequi, architecto quos aspernatur at itaque consequatur!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti minima ipsum quod iure qui nemo sit perferendis doloribus officia, maiores obcaecati ipsa sequi, architecto quos aspernatur at itaque consequatur!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti minima ipsum quod iure qui nemo sit perferendis doloribus officia, maiores obcaecati ipsa sequi, architecto quos aspernatur at itaque consequatur!</p>
          </div>
        </div>
      </div>
      <NewSletterBox/>
    </div>
  )
}

export default About