import React from 'react'

const Contact = () => {
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
    <div name='Contact' className='bg-light relative py-20'>
      {/* Water ripple effect at the top */}
      <div className="water-ripple absolute top-0 left-0 w-full h-32"></div>
      
      {/* Bubbles Animation */}
      {createBubbles()}
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>Contact Us</h2>
          <div className='h-1 w-24 bg-secondary mx-auto'></div>
          <p className='text-gray-700 text-xl mt-8 max-w-3xl mx-auto'>
            Get a free consultation today either on zoom, phone or in person.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact form */}
          <div className='bg-white rounded-xl shadow-xl p-8 relative overflow-hidden'>
            {/* Water border effect */}
            <div className="water-border absolute inset-0"></div>
            
            <h3 className='text-2xl font-semibold text-primary mb-6'>Send Us a Message</h3>
            
            <form 
              action='https://getform.io/f/c73b689e-c58f-4644-877c-e2c79096ae99' 
              method='POST' 
              className='space-y-6'
            >
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name='Name' 
                  placeholder='Enter your name'
                  className='w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent' 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name='Email' 
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent' 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name='Phone' 
                  placeholder='Enter your phone number'
                  className='w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent' 
                />
              </div>
              
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                <textarea 
                  id="message"
                  name="Message" 
                  rows="5" 
                  placeholder='Tell us about your pool needs'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent'
                  required
                ></textarea>
              </div>
              
              <div className='pt-2'>
                <button 
                  type="submit"
                  className='w-full px-6 py-3 bg-secondary text-white font-medium rounded-full 
                    hover:bg-amber-400 transition-all duration-300 shadow-lg 
                    flex items-center justify-center'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact information */}
          <div className='space-y-12'>
            {/* Direct contact methods */}
            <div className='bg-primary rounded-xl shadow-xl p-8 text-white relative overflow-hidden'>
              <h3 className='text-2xl font-semibold mb-6'>Get in Touch</h3>
              
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-white/10 p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-primary-light font-medium'>Phone Number</p>
                    <a href="tel:925-437-1526" className='text-lg hover:text-secondary transition-colors'>925-437-1526</a>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-white/10 p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-primary-light font-medium'>Email</p>
                    <a href="mailto:info@oldguyspoolservice.com" className='text-lg hover:text-secondary transition-colors'>info@oldguyspoolservice.com</a>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-white/10 p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-primary-light font-medium'>Service Area</p>
                    <p className='text-lg'>Bay Area, California</p>
                  </div>
                </div>
              </div>
              
              {/* Wave overlay for visual effect */}
              <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
              </div>
            </div>
            
            {/* Hours of operation */}
            <div className='bg-white rounded-xl shadow-xl p-8 relative overflow-hidden'>
              <h3 className='text-2xl font-semibold text-primary mb-6'>Business Hours</h3>
              
              <div className='space-y-4'>
                <div className='flex justify-between border-b border-gray-100 pb-2'>
                  <span className='font-medium'>Monday - Friday</span>
                  <span className='text-gray-600'>8:00 AM - 6:00 PM</span>
                </div>
                <div className='flex justify-between border-b border-gray-100 pb-2'>
                  <span className='font-medium'>Saturday</span>
                  <span className='text-gray-600'>9:00 AM - 5:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Sunday</span>
                  <span className='text-gray-600'>Closed</span>
                </div>
              </div>
              
              <div className='mt-8 flex justify-center'>
                <a 
                  href="tel:925-437-1526" 
                  className='px-6 py-3 bg-primary text-white font-medium rounded-full 
                    hover:bg-primary-light transition-all duration-300 shadow
                    flex items-center justify-center'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
              
              {/* Water border effect */}
              <div className="water-border absolute inset-0"></div>
            </div>
          </div>
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

export default Contact