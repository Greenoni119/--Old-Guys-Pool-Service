import React from 'react'
import net from '../public/24:7.png';
import germs from '../public/handshake.png';
import treats from '../public/pets.png';
import tools from '../public/app.png';
import Image from 'next/image';

const Services = () => {
  return (
    <div>

<div name='Services' className=' w-full bg-white pt-20 pb-20'>
              <div className='max-w-screen-1xl mx-auto text-center items-center gap-20 justify-center h-full px-4 md:flex-row'>
                <div>
                    <p className=' text-2xl m-5 text-amber-600 inline border-b-4 border-blue-500 md:text-4xl lg:text-5xl 2xl:text-center'> Why We&apos;re Different </p>  
                </div>
               

               
              <div className=' grid max-screen-md grid-cols-1 gap-5 pt-10 md:grid-cols-2 2xl:grid-cols-4 '>

  <div className='  shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-blue-300'>
  <Image src={net} alt='' className='rounded-md duration-200 mx-auto pt-5 w-20'/>
  <div className='flex items-center justify-center '>
    <h1 className=' py-3 m-4 text-xl duration-200 hover:scale-105 text-amber-600 text-center'> Customer service all day & night </h1>
  </div>
</div>




  <div className=' shadow-md shadow-orange-500 rounded-xl duration-200 hover:scale-105 dark:shadow-blue-300'>
  <Image src={germs} alt='' className='rounded-md mx-auto pt-5 w-20'/>
  <div className='flex items-center justify-center'>
    <h1 className=' py-3 m-4 text-xl duration-200 hover:scale-105 text-amber-600 text-center'>No additional charges for inquiries </h1>
  </div>
</div> 




  <div className=' shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-blue-300'>
  <Image src={tools} alt='' className='rounded-md duration-200 mx-auto w-20 pt-5'/>
  <div className='flex items-center justify-center'>
    <h1 className=' py-3 m-4 text-xl duration-200 hover:scale-105 text-amber-600 text-center '>Mobile App coming soon!</h1>
  </div>
</div>




  <div className=' shadow-md shadow-orange-500 rounded-xl duration-200 hover:scale-105 dark:shadow-blue-300'>
  <Image src={treats} alt='' className='rounded-md mx-auto pt-5 w-20'/>
  <div className='flex items-center justify-center'>
    <h1 className=' py-3 m-4 text-xl duration-200 hover:scale-105 text-amber-600 text-center '>We bring treats for your fur babies</h1>
  </div>
</div>



</div>
                </div>

              </div>
                
</div>
  )
}

export default Services
