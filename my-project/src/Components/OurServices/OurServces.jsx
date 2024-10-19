import React from 'react'
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServces = () => {
    return (
        <div className='container py-12'>
            {/* header section */}
            <div className="text-center">
                <h1 className="text-4xl font-semibold">Our Services </h1>
            </div>
            {/* icons section  */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-12 mt-12 '>
                <div className='flex justify-center items-center gap-3'>
                    <FaMobileScreen className='text-2xl'/>
                    <p className='text-xl font-semibold'>
                        <a href="#">Online Booking</a>
                    </p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <MdOutlineFastfood  className='text-2xl'/>
                    <p className='text-2xl font-semibold'>
                        <a href="#">Fast Food</a>
                    </p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <MdFoodBank  className='text-2xl ' />
                    <p className='text-2xl font-semibold'>
                        <a href="#">Healthy Food</a>
                    </p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <CiDeliveryTruck  className='text-2xl' />
                    <p className='text-xl font-semibold'>
                        <a href="#">Delivery</a>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default OurServces
