import React from 'react'
import Image from '../../assets/1.png'

const Hero = () => {
    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] ">
                {/* text section  */}
                <div className='flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10'>
                    <h1 className="text-4xl lg:text-6xl font-semibold">Delicious Food Is Waiting For You</h1>

                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae veniam nisi. Officia mollitia debitis deserunt ipsam unde exercitationem delectus!</p>

                    {/* Button section  */}
                    <div className=" flex gap-4 items-center md:justify-start justify-center ">
                        <button className='primary-btn hover:scale-150 duration-200'>Food Menu</button>
                        <button className='secondary-btn hover:scale-150 duration-200'>Book table</button>
                    </div>

                </div>

                {/* image section  */}
                <div className='flex flex-col justify-center'>
                    <img src={Image} alt="" className='animate-spin-slow img-shadow w-[400px] mx-auto' />
                </div>

            </div>
        </div>
    )
}

export default Hero
