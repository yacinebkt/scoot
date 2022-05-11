import React from 'react'



interface Props {
  
    title:string,
}

const ButtonOutLine: React.FC<Props> = ({title }) => {

   
    return (
      <button className="bg-transparent border border-primary text-primary rounded-full  font-semibold
        md:text-sm text-xs tracking-wide md:px-8 px-6 py-4 
        duration-500
        hover:shadow-md hover:shadow-primary  hover:border-primary/[.34] 
      ">
          {title}

         
      </button>



    )
}


export default ButtonOutLine
