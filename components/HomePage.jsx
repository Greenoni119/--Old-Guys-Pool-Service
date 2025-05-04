import React from 'react'

const HomePage = () => {
  return (
    <div>
      
      <div name='Home' className=' w-full bg-blue-900 '>
              <div className='max-w-screen-1xl mx-auto items-center justify-center h-full px-4 md:flex-row '>{/*sm:pb-60*/}
               
               <div className='' >
               
                <div className='pt-40 items-center'> {/*<Image src={logo} id='logo' className='mx-auto w-2/3 md:w-2/3 max-w-lg   rounded-full' />*/}
               <svg id='face' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 592 566" className='mx-auto'>
  <rect id="Rectangle_1" data-name="Rectangle 1" width="592" height="566" rx="96" fill="#ed8900"/>
  <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="75.5" cy="76" rx="75.5" ry="76" transform="translate(112 103)" fill="#fff"/>
  <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="75.5" cy="76" rx="75.5" ry="76" transform="translate(326 103)" fill="#fff"/>
  <path id="Path_5" data-name="Path 5" d="M755.614,722.519s38.007,24.794,76.963-11.244S956.857,757.2,956.857,757.2,930.58,652.907,875.8,620.279s-116.323-1.2-116.323-1.2L734.734,631.41v79.865Z" transform="matrix(-0.999, 0.035, -0.035, -0.999, 1056.559, 1026.662)" fill="#fff"/>
  <path id="Path_6" data-name="Path 6" d="M941.493,721.874s-39.049,24.658-79.073-11.182S734.734,756.36,734.734,756.36s27-103.715,83.278-136.163S937.523,619,937.523,619l25.422,12.267v79.425Z" transform="matrix(-0.999, -0.052, 0.052, -0.999, 1215.938, 1101.289)" fill="#fff"/>
  <path id="Path_7" data-name="Path 7" d="M329.979,329.784s29.16-7.4,56.7-7.4,53.469,7.4,53.469,7.4v5.409a297.185,297.185,0,0,0-53.469-5.409c-27.543,0-56.7,5.409-56.7,5.409Z" transform="translate(-92 -156.193)" fill="#fff"/>
</svg>

                </div>
                
                <div className='justify-center h-full sm:h-2/5 pt-10'>
                  <h2 className='text-5xl font-bold text-white mx-auto text-center md:text-8xl'> Old Guys <br /> Pool Service</h2>
                </div>
              
                <div className='text-center pt-20'>
                <a href="tel:925-437-1526" className='text-white border-solid border-4 border-amber-500 rounded-full px-5 py-2 hover:scale-105 duration-200 '>Read More</a>
                </div>
                
                </div>
                
              </div>

              <section className="relative mt-20">
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
              </section>
            
            </div>
           
    </div>
  )
}

export default HomePage