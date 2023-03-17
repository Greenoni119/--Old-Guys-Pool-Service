import React from 'react'
import help1 from '../public/help1.png';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      
     
      <div name='About Us' className=' w-full '>
          <div className='max-w-screen-lg mx-auto w-full h-full pt-20 xl:pt-80 '>

            <div className=''>
                    <p className='text-4xl m-5 text-amber-600 inline border-b-4 border-blue-500 md:text-6xl'>About Us</p>  
                </div>
                

                
                  <div>
                   <p className=' text-xs leading-10 text-amber-600 ml-5 mr-5 mt-5 md:text-lg md:pt-5' id='para' >
                   Welcome to  <span className='text-sm md:text-lg'>Old Guys Pool Service</span>, where we keep pools in the Bay Area sparkling clean! 
                    </p> 
                    </div>
                    

                    
                         <div>
                           <p className='text-xs leading-10 text-amber-600 ml-5 mr-5 mt-5 md:text-lg' id='para'>We clean pools for everyone, from families with young kids to retirees who just want to relax by the pool.</p>  
                         </div>
                    

                    
                      <div className='pt-4 items-center'>
                  <Image src={help1} alt='' id='logo' className='mx-auto w-2/3 max-w-xl' />
                    </div>
                   

                
                    <div>
                           <p className='text-xs leading-10 text-amber-600 ml-5 mr-5 mt-5 md:text-lg' id='para'>So, if you want to work with a pool cleaning service that has experience, and a sense of humor to match, give Old Guys Pool Service a call!</p>                 
                      </div>
                       
          </div>
          <div className='text-center pt-7'>
                <a href="tel:925-437-1526" className='text-blue-900 border-solid border-2 border-amber-500 rounded-full px-5 py-2 hover:scale-105 duration-200 '>Read More</a>
                </div>
         
</div>

    </div>
  )
}

export default About

{/*Over the years, we’ve seen it all - from clogged filters to floating toys that have seen better days. 
                    But we always rise to the challenge and leave our clients’ pools looking better than ever.*/}