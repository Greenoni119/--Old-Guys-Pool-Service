import React from 'react'

import NavBar from './NavBar'
import HomePage from './HomePage'
import About from './About'
import Services from './Services'
import Price from './Price'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <HomePage />
      <About />
      <Services />
      <Price />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App