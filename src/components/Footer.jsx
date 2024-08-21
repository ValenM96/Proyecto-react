import React from 'react'
import logo from '../assets/Logo.png';

const Footer = () => {
return (
    <section>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={logo} className='mb-5 w-36' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, mollitia. Voluptate labore reprehenderit repudiandae illum laboriosam. Obcaecati quibusdam quos molestias sit illum eius, a fugit esse repudiandae, quis, ducimus nihil.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+5411-2145-6789</li>
                    <li>contact@whiskyland.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ whiskyland.com - All Right Reserved.</p>
        </div>
    </section>
)
}

export default Footer