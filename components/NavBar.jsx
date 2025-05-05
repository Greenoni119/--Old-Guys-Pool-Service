import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Services" },
    { id: 4, link: "Price" },
    { id: 5, link: "Reviews" },
    { id: 6, link: "Contact" }
  ];

  return (
    <div className='fixed w-full z-50'>
      <div 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'glass-dark shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo for navbar */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="Home" smooth duration={500} className="cursor-pointer">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-blue flex items-center justify-center">
                    <span className="text-white font-bold">OG</span>
                  </div>
                  <span className="ml-2 font-semibold text-xl text-white">Old Guys Pools</span>
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center">
              <div className="flex space-x-6">
                {links.map(({ id, link }) => (
                  <Link
                    key={id}
                    to={link}
                    smooth
                    duration={500}
                    className="relative text-white text-sm font-medium cursor-pointer hover:text-secondary transition-colors duration-300 group py-2"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
              
              {/* Call to action button */}
              <div className="ml-8">
                <a 
                  href="tel:925-437-1526" 
                  className="btn-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setNav(!nav)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-white/10 focus:outline-none transition-colors duration-300"
                aria-expanded={nav}
              >
                <span className="sr-only">Open main menu</span>
                {!nav ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {nav && (
          <div className="md:hidden glass-dark mt-2 animate-fade-in-up">
            <div className="px-4 pt-2 pb-5 space-y-2">
              {links.map(({ id, link }) => (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="block px-3 py-2.5 text-base font-medium text-white hover:text-secondary transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
              <a 
                href="tel:925-437-1526" 
                className="mt-4 btn-primary block w-full text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar