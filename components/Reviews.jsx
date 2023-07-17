import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { googleReviews } from './data';
import { BsStarFill} from 'react-icons/bs'

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div>
    <div className="max-screen-w-xl pt-20 pb-10 m-1">
      <h1 className='text-2xl text-center pb-10 text-blue-900 '>OUR REVIEWS</h1>
      <Slider {...settings}>
        {googleReviews.map((items) => (
          <div key={items.linkImg}>
            <div className="">
              
              <h1 className='text-center text-blue-900'>{items.name}</h1>
              <div className='flex justify-center text-yellow-400'> 
                <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
              </div>
              <p className='p-5 text-center text-blue-900'>{items.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default Reviews


{/*

<div>
    <div className="max-screen-w-xl pt-20 pb-10 m-1">
    <h1 className='text-2xl text-center pb-10 text-blue-900 '>  OUR REVIEWS  </h1>
  <Slider {...settings}>
    {googleReviews.map((items) => (
      <div className="">

        <div className="">
          <Image key={items.linkImg} alt=''width={30} height={30}
           className='w-70 h-60 p-5 rounded-8 mx-auto'/>
         
          <h1 className='text-center text-blue-900'>{items.name}</h1>
         <div className='flex justify-center text-yellow-400'> 
         <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/>
         </div>
         <p className=' p-5 text-center text-blue-900'>{items.review}</p>
        </div>

      </div>
    ))}
  </Slider>
</div>
</div>

*/}