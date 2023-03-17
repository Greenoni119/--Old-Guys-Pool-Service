import React from 'react'

const Contact = () => {
  return (
    <div>
      
      <div name='Contact' className=' w-full '>
                  <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-4/5 '>
          <div className=' pb-8'>
           
            <div>
            <p className='text-5xl inline border-b-4 border-blue-500 text-amber-600'>Contact Us</p>
            </div>
            
            
           <div className='pt-6'>
            <p className=' text-sm text-center text-amber-600 sm:text-xl'> Get a free consultation today either on zoom, phone or in person. </p>
            </div>
            
          </div>
         <div className='flex justify-center items-center'>
           <form action='https://getform.io/f/c73b689e-c58f-4644-877c-e2c79096ae99' method='POST' className=' flex flex-col w-full md:w-1/2'>
              <input type="text" name='Name' placeholder='Enter your name'className='p-2 bg-transparent border-4 border-blue-900 rounded-full text-amber-600 focus:outline-none' />
              <input type="text" name='Email' placeholder='Enter your Email'className=' my-4 p-2 bg-transparent border-4 border-blue-900 rounded-full text-amber-600 focus:outline-none' />
              <textarea name="Message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-4 border-blue-900 rounded-3xl text-amber-600 focus:outline-none'>
             </textarea>
              <button className='text-amber-600  border-4 border-blue-900 rounded-full my-4 py-1 px-5 mx-auto flex items-center hover:scale-110 duration-200'>Send</button>
           </form>
         </div>
 </div>
  </div>
    </div>
  )
}

export default Contact