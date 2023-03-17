import React from 'react';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Services from '../components/Services';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
export default function Home() {
  return (
   
       <div>
            <NavBar/>
            <HomePage/>
            <About/>
            <Services/>
            <Price/>
            <Contact/>
            <Reviews/>
            <Footer/>
        </div>
     
  );
}

