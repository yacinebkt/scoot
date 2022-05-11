import React from 'react'


interface Props {
  
    title:string,
    link:string,
}

const NavLink: React.FC<Props> = ({title, link }) => {

   
    return (
      <li className='cursor-pointer font-semibold 
      duration-100
      hover:text-primary'>
          {title}
      </li>
    )
}


export default NavLink
