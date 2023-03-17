import React from 'react'
import Image from 'next/image';
import L2R from '../public/L2R.png';
const App = () => {
  return (
    <div>
      

<div name="Our App" className='h-screen w-full bg-white'>
              <div className='max-w-screen-1xl mx-auto flex items-center justify-center h-full px-4 flex-row'>
              
                <div className='flex flex-col justify-center h-full xl:h-2/5 sm:h-1/4'>

                  <h2 className='xl:text-8xl  sm:text-5xl font-bold text-amber-600 py-5 inline border-b-4 border-blue-400'>Our App Includes </h2>
                     <div className=''>
                     <ul className=' xl:text-5xl text-blue-400 mt-10 sm:text-3xl'>  
                     <li className='pb-5'>Updates on next cleaning.</li>
                     <li className='pb-5'>24/7 Reachability.</li>
                     <li className='pb-5'>Pay your bill on the app.</li>
                     <li className='pb-5'>Before and after posts of your pool.</li>
                     </ul>  
                     </div>
                </div>
                <div className=' '>
                  <Image src={L2R} alt='' className='mx-auto w-2/3 rounded-2xl md:w-full max-w-lg sm:w-full' />
                 
                  <p className='text-amber-600 text-center xl:text-3xl sm:text-xl'>Get the app free from the App-store today!</p>
                </div>
              </div>
              
            </div>


    </div>
  )
}

export default App