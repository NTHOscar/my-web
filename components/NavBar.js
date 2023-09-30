'use client'

import { useState, useEffect } from "react";
import { ThemeButton } from "/components/ThemeButton";

export const NavBar = () => {
  let navLinks = null;
  useEffect(() => {
    // you are safe to use the 'document' object here
    navLinks = document.querySelector('.nav-links')
  }, [navLinks]);

  function onToggleMenu(e){
    // console.log(e);
    e.name = e.name === 'menu' ? 'close' : 'menu'
    if(navLinks !== null){
      navLinks.classList.toggle('top-[42px]'); // == h-12 (the horizontal navbar)
      // navLinks.classList.toggle('md:bg-cyan-100');
      // navLinks.classList.toggle('md:dark:bg-gray-700');
      navLinks.classList.toggle('py-3');
    }
  }

  return (
    <div className="sticky top-0">
      <nav className=" bg-cyan-400 dark:bg-gray-900 flex justify-between items-center px-5  mx-auto h-12">
          <div className="">
              {/* <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."></img> */}
              NTHOscar
          </div>
          <div className="nav-links duration-500 md:static fixed md:min-h-fit  left-0 top-[-100%] md:w-auto  w-full px-5 max-md:bg-cyan-100 dark:max-md:bg-gray-700">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                  <li>
                      <a className="hover:text-gray-500" href="/">Home</a>
                  </li>
                  <li>
                      <a className="hover:text-gray-500" href="#about">About</a>
                  </li>
                  <li>
                      <a className="hover:text-gray-500" href="#">Skills</a>
                  </li>
                  <li>
                      <a className="hover:text-gray-500" href="#">Experience</a>
                  </li>
                  <li>
                      <a className="hover:text-gray-500" href="#">Contact</a>
                  </li>
                  <li>
                    {/* <Switch /> */}
                    <ThemeButton/>

                  </li>
              </ul>
          </div>
      
          {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button> */}
          <button onClick={(e)=>onToggleMenu(e)} name="menu" className="text-3xl cursor-pointer md:hidden">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
      </nav>
    </div>
  )
}