import React, { useState } from 'react';
import { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { RiCloseFill } from "react-icons/ri"

function Navbar() {
    const [showHamburger, setShowHamburger] = useState(true)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    

    useEffect(() => {
        function handleResize() {
          setIsLargeScreen(window.innerWidth > 700);
        }
    
        // Set the initial value of isLargeScreen based on the window width
        setIsLargeScreen(window.innerWidth > 700);
    
        // Add event listener to window
        window.addEventListener('resize', handleResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        }
      }, []);
  return (
    <div>
        <nav className=' container mx-auto flex md:items-center justify-between font-code md:py-5 md:px-1'>
            <a className =" my-5 text-lg font-bold md:my-0 mx-3 md:mx-0" href="#home">{`<karan.dev>`}</a>
            <ul className={`w-[40%] lg:w-1/3 md:justify-between list-none ${showHamburger ? "hidden": "flex bg-gray-900 h-screen items-center justify-evenly w-screen absolute"} flex-col md:flex md:flex-row`}>
                <li onClick={() => isLargeScreen ? "" : setShowHamburger(prev => !prev)}><a href="#about">About</a></li>
                <li onClick={() => isLargeScreen ? "" : setShowHamburger(prev => !prev)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={() => isLargeScreen ? "" : setShowHamburger(prev => !prev)}><a href="https://karanchauhan.hashnode.dev" target="_blank" rel="noreferrer">Blog</a></li>
                <li onClick={() => isLargeScreen ? "" : setShowHamburger(prev => !prev)}><a href="#contact">Contact</a></li>
            </ul>
            <a href='#contact' className='px-3 py-2 bg-fuchsia-700 rounded-lg hover:bg-fuchsia-900 transition-colors duration-500 hidden md:block'>Let's Talk</a>
            <div className='mx-3 absolute right-2 md:hidden'>
            {showHamburger ? (
                <span className='md:hidden text-xl z-10 py-5 md:py-0 inline-block' onClick={() => setShowHamburger(prev => !prev)}>
                <GiHamburgerMenu />
                </span>
            ) : (
                <span className='md:hidden text-2xl transition-all z-10 py-5 inline-block md:py-0' onClick={() => setShowHamburger(prev => !prev)}>
                <RiCloseFill />
                </span>
            )
        }
        </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar