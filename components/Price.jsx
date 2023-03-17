import React from 'react'

const Price = () => {
  return (
    <div>
 <div name='Price' className=' w-full bg-blue-900 '>
              <div className='max-w-screen-xl mx-auto '>

  <div className='pt-5 ml-5 max-w-screen-xl lg:text-center'>
              <p className=' text-3xl text-white inline border-b-4  border-amber-500 lg:text-5xl '>OUR PRICE PLANS</p>  
              </div>

              

  <div className=' grid max-w-screen-xl grid-cols-1 gap-5 pt-10 mx-auto lg:grid-cols-3 '>

<div className='  mx-auto max-w-screen-sm shadow-md shadow-orange-500 bg-white m-2 rounded-xl hover:scale-105 duration-200 dark:shadow-amber-500 '>
  <div className='flex items-center justify-center '>
    <h1 className=' py-3 m-4 text-3xl duration-200 hover:scale-105 text-amber-600 text-center'>$70/month</h1>
  </div>
  <div className=''>
<ul className='m-2 text-blue-900 list-disc list-inside'>
      <li className='m-3'>Weekly cleaning and maintenance of the pool to ensure it stays in good condition.</li>
      <li className='m-3'>Chemical balancing of the water to keep it safe and clean.</li>
      <li className='m-3'>Skimming and vacuuming of the pool to remove debris and dirt.</li>
      <li className='m-3'>Inspection and cleaning of the pool filter and pump to prevent equipment damage.</li>
      <li className='m-3'>Basic water testing to ensure chemical levels are within acceptable limits.</li>
    </ul>
    <div className='text-center pt-5 pb-5'>
<button className='border-2 px-5 rounded-full text-blue-900 border-amber-500'> buy now </button>      
    </div>
  </div>
</div>



<div className='mx-auto max-w-screen-sm shadow-md shadow-orange-500 bg-white m-2 rounded-xl hover:scale-105 duration-200 dark:shadow-amber-500'>
  <div className='flex items-center justify-center '>
    <h1 className=' py-3 m-4 text-3xl duration-200 hover:scale-105 text-amber-600 text-center'>$90/month</h1>
  </div>
  <div className=''>
<ul className='m-2 text-blue-900 list-disc list-inside'>
      <li className='m-3'>All the benefits of the $70/month plan</li>
      <li className='m-3'>Additional water testing to check for more specific chemical levels such as alkalinity and pH.</li>
      <li className='m-3'>Brushing and scrubbing of the pool walls and tiles to remove buildup</li>
      <li className='m-3'>Cleaning of pool accessories such as ladders and handrails.</li>
      <li className='m-3'>Additional maintenance services such as backwashing the filter and adding algaecide to prevent algae growth.</li>
    </ul>
    <div className='text-center pt-5 pb-5'>
<button className='border-2 px-5 rounded-full text-blue-900 border-amber-500'> buy now </button>      
    </div>
  </div>
</div>



<div className='mx-auto max-w-screen-sm shadow-md shadow-orange-500 bg-white m-2 rounded-xl hover:scale-105 duration-200 dark:shadow-amber-500'>
  <div className='flex items-center justify-center '>
    <h1 className=' py-3 m-4 text-3xl duration-200 hover:scale-105 text-amber-600 text-center'>$110/month</h1>
  </div>
  <div className=''>
<ul className='m-2 text-blue-900 list-disc list-inside'>
      <li className='m-3'>All the benefits of the $90/month plan.</li>
      <li className='m-3'>Advanced water testing to check for more complex chemical levels such as calcium hardness and cyanuric acid.</li>
      <li className='m-3'>Additional cleaning of pool features such as fountains and waterfalls.</li>
      <li className='m-3'>Maintenance of pool equipment such as heaters and chlorinators.</li>
      <li className='m-3'>On-demand services for any issues that may arise between scheduled maintenance visits.</li>
    </ul>
    <div className='text-center pt-5 pb-5'>
<button className='border-2 px-5 rounded-full text-blue-900 border-amber-500'> buy now </button>      
    </div>
  </div>
</div>



</div>
           
              <div>
                <ul className=' text-2xl pt-10 pb-10 text-white text-center'> 
                <li className='pb-5'>No fees. </li>  
                <li className='pb-5'>No sur charge.</li> 
                <li>No BS, we are to old for that. </li>  
                </ul>
               </div>
             

              </div>
            
            </div>


    </div>
  )
}

export default Price