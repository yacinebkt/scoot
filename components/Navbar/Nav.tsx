import React,{useState} from 'react'
import NavLink from './NavLink'

import {
    MenuIcon,
    XIcon
  } from "@heroicons/react/outline";

let Links = [
    {
        title : 'Home',
        link : '/'
    },
    {
        title : 'challenges',
        link : '/'
    },
    {
        title : 'About Us',
        link : '/'
    },

    {
        title : 'Contact Us',
        link : '/'
    },

]

const Nav: React.FC = () => {

    const [openNav, setOpenNav] = useState(false)


    return (
        <div className='flex justify-between w-full items-center'>
             {/* <Image
            src="/logo/scootText-logo.png"
            width={160 / 1}
            height={114 / 3}
            objectFit='contain'
            alt="logo"
            className='cursor-pointer '
          /> */}
          <div>
              <h1 className='font-black text-4xl cursor-pointer'> SC<strong className='text-primary'>OO</strong>T </h1>
          </div>
         
          <ul className='hidden md:flex items-center gap-10  '>
          {Links.map((nav, index)=> (
            <NavLink title={nav.title} link={nav.link} key={index} />
          ))}
          </ul>

          {/* Mobile Nav */}

          <ul className={` fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl md:hidden
            flex flex-col gap-10 text-meduim p-7 pt-20 right-0 duration-500
            ${openNav ? 'right-0' : 'right-[-100%] '}
          `}>
          {Links.map((nav, index)=> (
            <NavLink title={nav.title} link={nav.link} key={index} />
          ))}
          </ul> 
          
          <div className='text-2xl md:hidden z-50' onClick={()=> setOpenNav(!openNav)}>
            {openNav ? ( <XIcon  className="h-7  xl:inline ml-10 cursor-pointer" />) 
                      : 
                        (<MenuIcon className="h-7  xl:inline ml-10 cursor-pointer" />)
            }

          </div>
        </div>
    )
}


export default Nav
