import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import net from '../public/24:7.png';
import germs from '../public/handshake.png';
import treats from '../public/pets.png';
import tools from '../public/app.png';

const Services = () => {
  const parallaxRef = useRef(null);
  const parallaxItemsRef = useRef([]);
  const cardsRef = useRef([]);
  
  // Handle parallax effect on scroll
  useEffect(() => {
    const parallaxContainer = parallaxRef.current;
    const parallaxItems = parallaxItemsRef.current;
    
    if (!parallaxContainer || parallaxItems.length === 0) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerTop = parallaxContainer.getBoundingClientRect().top + window.scrollY;
      
      // Only apply parallax when the section is in view
      if (scrollPosition + window.innerHeight < containerTop) {
        return;
      }
      
      // Calculate the relative position
      const offset = (scrollPosition - containerTop + window.innerHeight) * 0.1;
      
      // Apply different parallax speeds to different elements
      parallaxItems.forEach((item, index) => {
        if (!item) return;
        const factor = index === 0 ? 0.05 : index === 1 ? -0.08 : 0.1;
        item.style.transform = `translateY(${offset * factor}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animate cards on scroll with Intersection Observer
  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    cards.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  // Function to create bubble elements
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 12; i++) {
      const size = Math.random() * 40 + 20; // Random size between 20px and 60px
      const left = Math.random() * 100; // Random position
      const delay = Math.random() * 5; // Random delay
      const duration = Math.random() * 10 + 8; // Random duration between 8-18s
      
      bubbles.push(
        <div 
          key={i}
          className="bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            bottom: '-5%',
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return bubbles;
  };

  return (
    <div name='Services' className='section relative bg-gradient-dark py-24' ref={parallaxRef}>
      {/* Bubbles Animation */}
      <div className="bubble-container">
        {createBubbles()}
      </div>
      
      {/* Animated background shapes */}
      <div 
        className="absolute inset-0 z-0"
        ref={el => parallaxItemsRef.current[0] = el}
      >
        <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-1/5 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-in-up' style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Our Services</h2>
          <div className='h-1 w-24 bg-secondary mx-auto'></div>
          <p className='text-gray-300 text-xl mt-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up' style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            We provide comprehensive pool maintenance services with a focus on exceptional customer care and attention to detail
          </p>
        </div>

        {/* Main Service Cards with Parallax effect */}
        <div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24'
          ref={el => parallaxItemsRef.current[1] = el}
        >
          {/* Service Card 1 */}
          <div 
            className='card opacity-0' 
            ref={el => cardsRef.current[0] = el}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <div className='h-56 bg-gradient-blue relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center p-6'>
                <div className='w-24 h-24 rounded-full glass flex items-center justify-center z-10'>
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              
              {/* Water ripple effect */}
              <div className="water-ripple absolute inset-0"></div>
              
              {/* Bubbles in card */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="bubble absolute"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: '0',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 4 + 3}s`
                  }}
                />
              ))}
            </div>
            
            <div className='p-8'>
              <h3 className='text-2xl font-semibold text-primary mb-4'>Weekly Maintenance</h3>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Water testing and chemical balancing</span>
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
                  <span>Filter maintenance and backwashing</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Equipment check and cleaning</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div 
            className='card opacity-0' 
            ref={el => cardsRef.current[1] = el}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className='h-56 bg-gradient-blue relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center p-6'>
                <div className='w-24 h-24 rounded-full glass flex items-center justify-center z-10'>
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Water ripple effect */}
              <div className="water-ripple absolute inset-0"></div>
              
              {/* Bubbles in card */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="bubble absolute"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: '0',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 4 + 3}s`
                  }}
                />
              ))}
            </div>
            
            <div className='p-8'>
              <h3 className='text-2xl font-semibold text-primary mb-4'>Seasonal Services</h3>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pool opening and closing</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Spring cleaning and preparation</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Algae treatment and prevention</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Winterization services</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div 
            className='card opacity-0' 
            ref={el => cardsRef.current[2] = el}
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className='h-56 bg-gradient-blue relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center p-6'>
                <div className='w-24 h-24 rounded-full glass flex items-center justify-center z-10'>
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Water ripple effect */}
              <div className="water-ripple absolute inset-0"></div>
              
              {/* Bubbles in card */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="bubble absolute"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: '0',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 4 + 3}s`
                  }}
                />
              ))}
            </div>
            
            <div className='p-8'>
              <h3 className='text-2xl font-semibold text-primary mb-4'>Equipment Repair</h3>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pump and motor service</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Filter system diagnostics</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Heater troubleshooting</span>
                </li>
                <li className='flex items-start'>
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Parts replacement and upgrade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Why We're Different Section with Parallax */}
        <div 
          className='mt-20'
          ref={el => parallaxItemsRef.current[2] = el}
        >
          <h3 className='text-3xl font-bold text-white text-center mb-12 opacity-0 animate-fade-in-up' style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>Why We're Different</h3>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Feature Cards */}
            {[
              {
                icon: net,
                title: '24/7 Service',
                description: 'Always available for your pool needs',
                delay: '0.4s'
              },
              {
                icon: germs,
                title: 'No Hidden Fees',
                description: 'Transparent pricing with no surprises',
                delay: '0.5s'
              },
              {
                icon: tools,
                title: 'Mobile App',
                description: 'Manage your service from your phone',
                delay: '0.6s'
              },
              {
                icon: treats,
                title: 'Pet Friendly',
                description: 'Treats for your furry companions',
                delay: '0.7s'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className='glass p-6 rounded-xl opacity-0'
                ref={el => cardsRef.current[index + 3] = el}
                style={{ animationDelay: feature.delay, animationFillMode: 'forwards' }}
              >
                <div className='relative w-20 h-20 mx-auto mb-6'>
                  <div className='absolute inset-0 rounded-full bg-secondary/20 animate-pulse'></div>
                  <div className='relative z-10 w-full h-full flex items-center justify-center'>
                    <Image src={feature.icon} alt={feature.title} className='w-12 h-12 object-contain' />
                  </div>
                  <div className="water-ripple absolute inset-0 rounded-full"></div>
                </div>
                <h4 className='text-xl font-semibold text-white text-center mb-3'>{feature.title}</h4>
                <p className='text-gray-300 text-center'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className='text-center mt-16 opacity-0 animate-fade-in-up' style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a 
            href="#pricing" 
            className='btn-primary inline-flex items-center text-lg'
          >
            <span>View Our Pricing</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
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

export default Services