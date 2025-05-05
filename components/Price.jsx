import React from 'react'

const Price = () => {
  // Function to create bubble elements
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 8; i++) {
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
    <div name='Price' className='bg-primary relative py-20 overflow-hidden'>
      {/* Bubbles Animation */}
      {createBubbles()}
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Our Pricing Plans</h2>
          <div className='h-1 w-24 bg-secondary mx-auto'></div>
          <p className='text-primary-light text-xl mt-8 max-w-3xl mx-auto'>
            Choose the perfect maintenance plan for your pool needs
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Basic Plan */}
          <div className='card bg-white rounded-xl overflow-hidden relative hover:shadow-water transition-all duration-300 hover:-translate-y-2 flex flex-col'>
            {/* Plan header */}
            <div className='bg-gradient-to-r from-primary-light to-primary p-6 relative'>
              <div className='water-ripple absolute inset-0'></div>
              <h3 className='text-2xl font-bold text-white mb-1 relative z-10'>Basic Plan</h3>
              <p className='text-primary-light text-sm mb-4 relative z-10'>Essential Pool Maintenance</p>
              <div className='flex items-end relative z-10'>
                <span className='text-4xl font-bold text-white'>$70</span>
                <span className='text-white opacity-80 ml-1 mb-1'>/month</span>
              </div>
            </div>
            
            {/* Plan features */}
            <div className='p-6 flex-grow'>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly cleaning and maintenance</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Standard chemical balancing</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Surface skimming and vacuuming</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Filter and pump inspection</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Basic water testing</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className='p-6 pt-0 mt-auto'>
              <a 
                href="tel:925-437-1526" 
                className='w-full px-6 py-3 bg-secondary text-white font-medium rounded-full 
                  hover:bg-amber-400 transition-all duration-300 shadow-md
                  flex items-center justify-center'
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Standard Plan */}
          <div className='card bg-white rounded-xl overflow-hidden relative hover:shadow-water transition-all duration-300 hover:-translate-y-2 flex flex-col transform scale-105 shadow-xl border-2 border-secondary z-10'>
            {/* Popular badge */}
            <div className='absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium z-20'>
              Popular
            </div>
            
            {/* Plan header */}
            <div className='bg-gradient-to-r from-primary-light to-primary p-6 relative'>
              <div className='water-ripple absolute inset-0'></div>
              <h3 className='text-2xl font-bold text-white mb-1 relative z-10'>Standard Plan</h3>
              <p className='text-primary-light text-sm mb-4 relative z-10'>Complete Pool Care</p>
              <div className='flex items-end relative z-10'>
                <span className='text-4xl font-bold text-white'>$90</span>
                <span className='text-white opacity-80 ml-1 mb-1'>/month</span>
              </div>
            </div>
            
            {/* Plan features */}
            <div className='p-6 flex-grow'>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className='font-medium'>All Basic Plan features</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced water testing (pH, alkalinity)</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Wall and tile scrubbing</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Accessory cleaning (ladders, handrails)</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Algae prevention treatments</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className='p-6 pt-0 mt-auto'>
              <a 
                href="tel:925-437-1526" 
                className='w-full px-6 py-3 bg-primary text-white font-medium rounded-full 
                  hover:bg-primary-light transition-all duration-300 shadow-md
                  flex items-center justify-center'
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className='card bg-white rounded-xl overflow-hidden relative hover:shadow-water transition-all duration-300 hover:-translate-y-2 flex flex-col'>
            {/* Plan header */}
            <div className='bg-gradient-to-r from-primary-light to-primary p-6 relative'>
              <div className='water-ripple absolute inset-0'></div>
              <h3 className='text-2xl font-bold text-white mb-1 relative z-10'>Premium Plan</h3>
              <p className='text-primary-light text-sm mb-4 relative z-10'>Deluxe Pool Service</p>
              <div className='flex items-end relative z-10'>
                <span className='text-4xl font-bold text-white'>$110</span>
                <span className='text-white opacity-80 ml-1 mb-1'>/month</span>
              </div>
            </div>
            
            {/* Plan features */}
            <div className='p-6 flex-grow'>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className='font-medium'>All Standard Plan features</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive water testing</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Water feature cleaning</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Equipment maintenance</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority on-demand services</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <div className='p-6 pt-0 mt-auto'>
              <a 
                href="tel:925-437-1526" 
                className='w-full px-6 py-3 bg-secondary text-white font-medium rounded-full 
                  hover:bg-amber-400 transition-all duration-300 shadow-md
                  flex items-center justify-center'
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className='mt-20 text-center'>
          <div className='inline-block rounded-xl bg-white/10 backdrop-blur-sm p-8 relative overflow-hidden'>
            <h3 className='text-2xl font-bold text-white mb-8'>Commitment to Transparency</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white'>
              <div className='flex flex-col items-center'>
                <div className='h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className='text-xl font-semibold mb-2'>No Hidden Fees</h4>
                <p className='text-primary-light'>We&apos;re transparent about all costs</p>
              </div>
              
              <div className='flex flex-col items-center'>
                <div className='h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className='text-xl font-semibold mb-2'>No Surcharges</h4>
                <p className='text-primary-light'>What you see is what you pay</p>
              </div>
              
              <div className='flex flex-col items-center'>
                <div className='h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className='text-xl font-semibold mb-2'>No BS</h4>
                <p className='text-primary-light'>We&apos;re too old for that</p>
              </div>
            </div>
            
            {/* Water border effect */}
            <div className="water-border absolute inset-0"></div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <a 
            href="tel:925-437-1526" 
            className='px-8 py-4 bg-secondary text-white font-medium rounded-full 
              hover:bg-amber-400 transition-all duration-300 shadow-lg 
              inline-flex items-center justify-center'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call for Custom Pricing
          </a>
        </div>
      </div>
      
      {/* Wave animation at the bottom */}
      <div className="wave-container absolute bottom-0 left-0 w-full">
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </div>
    </div>
  )
}

export default Price