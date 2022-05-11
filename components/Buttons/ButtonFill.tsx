import React from 'react'



interface Props {
  
    title:string,
}

const ButtonFill: React.FC<Props> = ({title }) => {

   
    return (
      <button className="bg-primary text-white rounded-full shadow-sm shadow-white font-semibold
        md:text-sm text-xs tracking-wide md:px-8 px-6 py-4
        duration-500
        hover:shadow-md hover:shadow-primary  hover:border-primary/[.98] 
      ">
          {title}
      </button>
    )
}


export default ButtonFill
