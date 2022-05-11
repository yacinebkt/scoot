import React from 'react'
import Link from 'next/link'


const Footer: React.FC= () => {

   
    return (
      <footer className=' w-full py-4 px-4 md:px-24 overflow-x-hidden'>
         <div className='w-full h-1 bg-slate-900'>
         </div>

         <div className="container flex flex-col items-center justify-center my-4">
         <div>
              <h1 className='font-black text-4xl cursor-pointer'> SC<strong className='text-primary'>OO</strong>T </h1>
          </div>
          <div className='flex text-xl  gap-8 items-center justify-center p-5
          cursor-pointer font-bold 
          
          '>
          <Link href='/terms' >
            <p className='duration-100
          hover:text-primary'>Terms</p></Link>
        
<Link href='/privacy' >
            <p className='duration-100
          hover:text-primary'>Privacy Policy</p></Link>
          </div>
         </div>
      </footer>
    )
}


export default Footer
