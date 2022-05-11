import React from 'react'
import ButtonFill from './Buttons/ButtonFill'
import ButtonOutLine from './Buttons/ButtonOutline'
import Terminal from './Terminal/Terminal'



import {MenuIcon,
XIcon, HashtagIcon, PuzzleIcon
} from "@heroicons/react/outline";


const About: React.FC= () => {

   
    return (
      <section className=' h-screen w-full py-4 px-4 md:px-24 '>
       
       <div className='flex md:flex-row flex-col gap-5 pt-20 items-center'>
             <div className='relative flex-1 justify-center items-center'>
              {/* <Terminal /> */}
              <img src="/about.jpg" alt="about"
               className='rounded-lg shadow-[0_0_15px_rgba(0,0,0,.5)]' />
            </div>
            <div className='flex-1 mt-4'>
              <h2 className="md:text-4xl text-3xl font-semibold tracking-wide md:leading-tight
              leading-snug "> Are you a startup, engineer, researcher or student?</h2>
              <p className='text-grey-600 text-xl  md:py-4 py-2 leading-relaxed'>
                Be part of a large community of problem solvers !
              </p>
              
              <div>
                <p className=" text-justify" > <PuzzleIcon className="h-5 xl:inline cursor-pointer mx-2 text-primary" />
                 Stay informed of collaboration opportunities and calls for projects.</p>
                <p className="my-2 text-justify" > <PuzzleIcon className="h-5 xl:inline cursor-pointer mx-2 text-primary" />
                Participate in challenges launched by companies around different themes.</p>

                <p className=" text-justify" >  <PuzzleIcon className="h-5 xl:inline cursor-pointer mx-2 text-primary" />
                Create, design, shape the future with the most innovative companies.</p>
              </div>

             

            </div>

           
          </div>

          <div className='flex flex-row-reverse gap-2 md:gap-4 flex-wrap'>
            <ButtonFill title="CREATE AN ACCOUNT" />
             {/* <ButtonOutLine title='Launch your challenge' />  */}
          </div>
      </section>
    )
}


export default About
