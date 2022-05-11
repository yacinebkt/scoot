import React from 'react'

interface Props {
    id:string,
    title:string,
    desc:string,
    date:string,
    link : string,
    img : string,
}

const Challenge: React.FC<Props> = ({id, title, desc, date, link, img}) => (

    <div className='h-[480px] border border-gray-300 rounded-xl overflow-hidden
     shadow-xl cursor-pointer hover:shadow-2xl hover:border-gray-200 duration-300	 '>
        <div className='h-[200px]  '>
            <div className='h-[150px] bg-Cover  md:bg-cover bg-top flex flex-col items-center'>
            <h2 className="md:text-xl text-xl mt-5   font-bold tracking-wide md:leading-tight
              leading-snug text-[#fff] drop-shadow-[0_1px_1px_rgba(0,0,0,.9)]">
                 Infinite Solutions for.</h2>

            <div className='w-full flex flex-row-reverse'>
            <h2 className="md:text-xl text-xl mt-5  mr-2 font-bold tracking-wide md:leading-tight
              leading-snug text-[#fff] drop-shadow-[0_1px_1px_rgba(0,0,0,.9)]">
               <span>By</span>  Algerian Start</h2>
            </div>
            
            </div>
                <div className=' h-[6rem] mt-[-3rem] w-[6rem] ml-8 rounded-full bg-orange-500 '>

            </div>
        </div>

        <div className='flex-1 m-2 '>
             
              <p className='text-grey-600 leading-relaxed line-clamp-6 text-justify text-base'>
              Scoot strives to find a solution within 8 weeks from the day your case is handled by the Scoot center. Scoot strives to find a solution within 8 weeks from the day your case is handled by the Scoot center. Scoot strives to find a solution within 8 weeks from the day your case is handled by the Scoot center.
              </p>

              <span className='text-primary text-sm cursor-pointer drop-shadow-[0_1px_1px_rgba(0,0,0,.3)]'>see more ...</span>

              <div className='text-sm flex flex-1 justify-between mx-4 mt-2'> 
                  <p>
                  Launch date
                  </p>
                  <span> 2022-03-22 </span>
              </div>
        </div>

    </div>
    
)


export default Challenge
