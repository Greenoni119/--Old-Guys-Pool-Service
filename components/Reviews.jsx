import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { googleReviews } from './data';
import { BsStarFill } from 'react-icons/bs'

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to create bubble elements
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 12; i++) {
      const size = Math.random() * 30 + 15; // Random size between 15px and 45px
      const left = Math.random() * 100; // Random position
      const delay = Math.random() * 4; // Random delay
      const duration = Math.random() * 8 + 7; // Random duration between 7-15s
      
      bubbles.push(
        <div 
          key={i}
          className="bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            bottom: '0',
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return bubbles;
  };
 
  return (
    <div name='Reviews' className='bg-light relative py-20'>
      {/* Title background glow effect */}
      <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-secondary/10 to-transparent rounded-b-full blur-xl"></div>
      
      {/* Bubbles Animation */}
      {createBubbles()}
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>Customer Reviews</h2>
          <div className='h-1 w-24 bg-secondary mx-auto'></div>
          <p className='text-gray-700 text-xl mt-8 max-w-3xl mx-auto'>
            See what our satisfied customers have to say about our pool services
          </p>
        </div>
        
        <div className='pb-10'>
          <Slider {...settings}>
            {googleReviews.map((review, index) => (
              <div key={index} className='px-4'>
                <div className='card h-full p-6 bg-white rounded-xl shadow-xl relative overflow-hidden flex flex-col'>
                  {/* Water border effect */}
                  <div className="water-border absolute inset-0"></div>
                  
                  {/* Review content */}
                  <div className='mb-4 flex-grow'>
                    <div className='flex items-center mb-4'>
                      <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold'>
                        {review.name.charAt(0)}
                      </div>
                      <div className='ml-4'>
                        <h3 className='font-semibold text-lg text-primary'>{review.name}</h3>
                        <div className='flex text-yellow-400'>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </div>
                      </div>
                    </div>
                    
                    <p className='text-gray-600 italic'>&quot;{review.review}&quot;</p>
                  </div>
                  
                  {/* Review metadata */}
                  <div className='mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center'>
                    <span>Google Review</span>
                    <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-primary mb-6'>Ready to experience our outstanding service?</h3>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <a 
              href="tel:925-437-1526" 
              className='px-8 py-3 bg-secondary text-white font-medium rounded-full 
                hover:bg-amber-400 transition-all duration-300 shadow-lg 
                flex items-center justify-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <a 
              href="#contact" 
              className='px-8 py-3 bg-primary text-white font-medium rounded-full 
                hover:bg-primary-light transition-all duration-300 shadow-lg 
                flex items-center justify-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Get A Quote
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Reviews