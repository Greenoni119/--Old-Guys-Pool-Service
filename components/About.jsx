import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import help1 from '../public/help1.png';

const About = () => {
  const parallaxRef = useRef(null);
  const parallaxItemsRef = useRef([]);
  
  // Handle parallax effect
  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    const parallaxItems = parallaxItemsRef.current;
    
    if (!parallaxContainer || parallaxItems.length === 0) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerTop = parallaxContainer.getBoundingClientRect().top + window.scrollY;
      const containerHeight = parallaxContainer.offsetHeight;
      
      // Only apply parallax when the section is in view
      if (scrollPosition + window.innerHeight < containerTop || scrollPosition > containerTop + containerHeight) {
        return;
      }
      
      // Calculate the relative position within the section
      const relativePosition = (scrollPosition - containerTop + window.innerHeight) / (containerHeight + window.innerHeight);
      
      // Apply parallax effect to elements with different depths
      parallaxItems.forEach((item, index) => {
        if (!item) return;
        
        // Different movement speeds for different elements
        const speed = index === 0 ? 0.1 : index === 1 ? 0.05 : 0.15;
        const yOffset = (relativePosition - 0.5) * containerHeight * speed;
        
        item.style.transform = `translateY(${yOffset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div name='About' className='section relative bg-light' ref={parallaxRef}>
      {/* Bubbles animation */}
      <div className="bubble-container">
        {createBubbles()}
      </div>
      
      {/* Background blobs for parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        ref={el => parallaxItemsRef.current[0] = el}
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>About Us</h2>
          <div className='h-1 w-24 bg-secondary mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image with parallax effect */}
          <div className='relative order-2 lg:order-1'>
            <div 
              className='relative rounded-2xl overflow-hidden shadow-card animate-float'
              ref={el => parallaxItemsRef.current[1] = el}
            >
              <div className="absolute inset-0 bg-gradient-blue opacity-10 z-10"></div>
              <Image 
                src={help1} 
                alt='Old Guys Pool Service team' 
                className='w-full h-auto'
                priority
              />
              
              {/* Animated water ripple effect */}
              <div className="water-ripple absolute inset-0 z-20"></div>
              
              {/* Animated bubbles */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="bubble"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: '0',
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 6 + 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content with parallax effect */}
          <div 
            className='order-1 lg:order-2'
            ref={el => parallaxItemsRef.current[2] = el}
          >
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-6'>Professional Pool Service in the Bay Area</h3>
            
            <div className='space-y-6 text-gray-700'>
              <p className='text-lg'>
                Welcome to <span className='font-semibold text-primary'>Old Guys Pool Service</span>, where we bring decades of experience to keep your pools sparkling clean and properly maintained.
              </p>
              
              <p className='text-lg'>
                Our team specializes in comprehensive pool maintenance for residential and commercial properties throughout the Bay Area. From regular cleaning and chemical balancing to equipment repair, we handle it all with professionalism and attention to detail.
              </p>
              
              <p className='text-lg'>
                What sets us apart is our commitment to personalized service. We understand that every pool is different, and we tailor our approach to meet your specific needs.
              </p>
              
              <div className='pt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4'>
                <a 
                  href="tel:925-437-1526" 
                  className='btn-primary mb-4 sm:mb-0'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Us Today
                </a>
                
                <a 
                  href="#services" 
                  className='btn-secondary'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Benefits Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="card p-8 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-primary text-center mb-4">Expert Water Testing</h4>
            <p className="text-gray-600 text-center">Regular water testing to ensure the perfect balance of chemicals for safety and clarity.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="card p-8 animate-fade-in-up animate-delay-100">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-primary text-center mb-4">Insured & Licensed</h4>
            <p className="text-gray-600 text-center">Fully insured and licensed professionals ensuring safe and proper handling of your pool.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="card p-8 animate-fade-in-up animate-delay-200">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-primary text-center mb-4">Custom Maintenance</h4>
            <p className="text-gray-600 text-center">Personalized service plans tailored to your specific pool type and usage needs.</p>
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

export default About