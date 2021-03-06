import React from 'react'
import Challenge from './Challenge/Challenge'



import {MenuIcon,
XIcon, HashtagIcon, PuzzleIcon
} from "@heroicons/react/outline";
import ButtonOutLine from './Buttons/ButtonOutline';


const Challenges: React.FC= () => {

   
    return (
        <section className="flex flex-col bg-white py-10 text-3xl md:text-4xl ">
      <div className="container mx-auto px-11">
        <p className="mx-auto max-w-5xl text-3xl leading-tight tracking-tight lg:text-4xl ">
          <strong>we will help you ship better projects, faster.</strong> {" "}
          Our Team of expert engineers has created the best user experiences in some of the most popular projects.
        </p>
      </div>

      <div className="container mx-auto mt-10">
        <h2 className='text-primary font-bold text-3xl ml-2 flex justify-center md:justify-start' >Open Challenges</h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 mx-4'>
          
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             
        </div>
        <div className='w-full flex justify-center my-6'>

            <ButtonOutLine title='See More !' />
        </div>

      </div>

     

      <div className="container mx-auto mt-10">
        <h2 className='text-primary font-bold text-3xl ml-2 flex justify-center md:justify-start'>
        Current challenges</h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 mx-4'>
          
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             <Challenge id="" title="" desc="" date="" link="" img=""  key=''/>
             
        </div>
        <div className='w-full flex justify-center my-6'>

            <ButtonOutLine title='See More !' />
        </div>

      </div>
    </section>
    )
}


export default Challenges
