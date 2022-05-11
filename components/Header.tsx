import React from 'react'
import ButtonFill from './Buttons/ButtonFill'
import ButtonOutLine from './Buttons/ButtonOutline'
import Nav from './Navbar/Nav'
import Terminal from './Terminal/Terminal'



const Header: React.FC= () => {

   
    return (
      <section className='min-h-screen w-full py-4 px-4 md:px-24 overflow-x-hidden'>
          <Nav />

          <div className='flex md:flex-row flex-col gap-5 pt-20 items-center'>
            <div className='flex-1 '>
              <h2 className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
              leading-snug "> Infinite Solutions for Growing Challenges.</h2>
              <p className='text-grey-600 text-xl  md:w-2/3 md:py-4 py-2 leading-relaxed'>
              Scoot strives to find a solution within 8 weeks from the day your case is handled by the Scoot center.
              </p>
            </div>

            <div className='relative flex justify-center items-center my-6 '>
              <Terminal />
            </div>
          </div>

          <div className='flex gap-2 md:gap-4 flex-wrap'>
            <ButtonFill title="See the list of challenges" />
            <ButtonOutLine title='Launch your challenge' />
          </div>
      </section>
    )
}


export default Header
