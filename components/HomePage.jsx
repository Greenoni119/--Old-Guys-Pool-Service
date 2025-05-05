import React, { useEffect, useRef } from 'react'

const HomePage = () => {
  const parallaxRef = useRef(null);
  const parallaxItemsRef = useRef([]);
  
  // Function to create bubble elements
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 40 + 10; // Random size between 10px and 50px
      const left = Math.random() * 100; // Random position
      const delay = Math.random() * 5; // Random delay
      const duration = Math.random() * 10 + 10; // Random duration between 10-20s
      
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

  // Handle parallax effect
  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    const parallaxItems = parallaxItemsRef.current;
    
    if (!parallaxContainer || parallaxItems.length === 0) return;
    
    const handleMouseMove = (e) => {
      const containerRect = parallaxContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = (e.clientX - centerX) / 50;
      const mouseY = (e.clientY - centerY) / 50;
      
      // Apply parallax effect to elements with different depths
      parallaxItems.forEach((item, index) => {
        if (!item) return;
        
        const depthFactor = index === 0 ? 0.05 : index === 1 ? 0.1 : 0.2;
        
        item.style.transform = `translate3d(${-mouseX * depthFactor}px, ${-mouseY * depthFactor}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="relative" ref={parallaxRef}>
      {/* Hero Section with Modern Background */}
      <div name='Home' className='relative w-full min-h-screen bg-gradient-dark overflow-hidden'>
        {/* Bubbles Animation */}
        <div className="bubble-container">
          {createBubbles()}
        </div>
        
        {/* Background geometric shapes - parallax effect */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          ref={el => parallaxItemsRef.current[0] = el}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary-light blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-accent-light blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-secondary blur-xl"></div>
        </div>
        
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='flex flex-col items-center justify-center h-screen pt-16 md:pt-0'>
            {/* Content Container */}
            <div className="relative z-10 text-center">
              {/* Logo Section */}
              <div 
                className='animate-float mb-8'
                ref={el => parallaxItemsRef.current[1] = el}
              >
                <svg id='logo' xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 592 566" className='mx-auto'>
                  <rect id="Rectangle_1" data-name="Rectangle 1" width="592" height="566" rx="96" fill="#ed8900"/>
                  <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="75.5" cy="76" rx="75.5" ry="76" transform="translate(112 103)" fill="#fff"/>
                  <ellipse id="Ellipse_4" data-name="Ellipse 4" cx="75.5" cy="76" rx="75.5" ry="76" transform="translate(326 103)" fill="#fff"/>
                  <path id="Path_5" data-name="Path 5" d="M755.614,722.519s38.007,24.794,76.963-11.244S956.857,757.2,956.857,757.2S930.58,652.907,875.8,620.279s-116.323-1.2-116.323-1.2L734.734,631.41v79.865Z" transform="matrix(-0.999, 0.035, -0.035, -0.999, 1056.559, 1026.662)" fill="#fff"/>
                  <path id="Path_6" data-name="Path 6" d="M941.493,721.874s-39.049,24.658-79.073-11.182S734.734,756.36,734.734,756.36s27-103.715,83.278-136.163S937.523,619,937.523,619l25.422,12.267v79.425Z" transform="matrix(-0.999, -0.052, 0.052, -0.999, 1215.938, 1101.289)" fill="#fff"/>
                  <path id="Path_7" data-name="Path 7" d="M329.979,329.784s29.16-7.4,56.7-7.4,53.469,7.4,53.469,7.4v5.409a297.185,297.185,0,0,0-53.469-5.409c-27.543,0-56.7,5.409-56.7,5.409Z" transform="translate(-92 -156.193)" fill="#fff"/>
                </svg>
              </div>
              
              {/* Company Name with bubbles */}
              <div
                className='mb-6 animate-fade-in-up relative'
                ref={el => parallaxItemsRef.current[2] = el}
              >
                {/* Extra bubbles around the title */}
                <div className="absolute inset-0 -z-10">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const size = Math.random() * 30 + 5;
                    const left = Math.random() * 100;
                    const top = Math.random() * 100;
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 8 + 7;
                    
                    return (
                      <div
                        key={i}
                        className="bubble absolute"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          left: `${left}%`,
                          top: `${top}%`,
                          animationDelay: `${delay}s`,
                          animationDuration: `${duration}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight'>
                  <span className="block">Old Guys</span>
                  <span className='text-secondary'>Pool Service</span>
                </h1>
              </div>

              {/* Tagline */}
              <p className='mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-100'>
                Professional pool maintenance and cleaning services with decades of experience
              </p>
              
              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animate-delay-200'>
                <a 
                  href="tel:925-437-1526" 
                  className='btn-primary'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
                <a 
                  href="#services" 
                  className='btn-secondary'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  Explore Services
                </a>
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-secondary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Glass Cards with Features - shown at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="glass p-6 rounded-xl animate-fade-in-up animate-delay-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">24/7 Service</h3>
                </div>
                <p className="text-gray-300">Professional pool maintenance available whenever you need us, day or night.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="glass p-6 rounded-xl animate-fade-in-up animate-delay-400">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experienced Team</h3>
                </div>
                <p className="text-gray-300">Decades of collective experience in pool cleaning and maintenance.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="glass p-6 rounded-xl animate-fade-in-up animate-delay-400">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Transparent Pricing</h3>
                </div>
                <p className="text-gray-300">No hidden fees or surprise charges. We believe in complete transparency.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Spacer to accommodate the feature cards */}
      <div className="h-32 md:h-40 bg-light"></div>
    </div>
  )
}

export default HomePage