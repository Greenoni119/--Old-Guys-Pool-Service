import React from 'react'
import { CgMenuLeftAlt} from "react-icons/cg"
import {FaTimes} from "react-icons/fa"
import { useState } from "react";
import {Link} from "react-scroll";

const NavBar = () => {
const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link:"About Us"
    },
    {
      id: 3,
      link:"Price"
    },
    {
      id: 4,
      link:"Contact"
    },
    
  ];
  return (
    <div className=''>
      
      <div className=' px-4 flex justify-between items-center w-full h-20 fixed bg-blue-900 z-10 '>
     
            <ul className='gap-10 hidden lg:flex'>
              
                {links.map(({id,link}) => (
                <li key={id} className='text-2xl cursor-pointer text-white hover:scale-110 duration-200 '>
                 <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                ))}
                
            </ul>
          
              <div>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white lg:hidden hover:scale-110 duration-200 '>
                { nav ? <FaTimes size={60} /> : <CgMenuLeftAlt size={60} /> }
              </div>
              </div>
              
            
            

            { nav && (
                <ul className='gap-20 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue-600 z-10'>
                    {links.map(({id,link}) => (
                <li key={id} className='text-5xl cursor-pointer hover:scale-110 duration-200  text-white hover:text-amber-500 '>
                 <Link onClick= {()=>setNav(!nav)}to={link}  smooth duration={500} >{link}</Link>
                </li>

                ))}
                </ul>
                      )}         
       </div>
       
       </div>
  )
}

export default NavBar