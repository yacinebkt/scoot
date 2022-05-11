
import React, {useCallback, useState} from 'react'
import Image from 'next/image'
import axios from 'axios'

const Contact: React.FC = () => {
    //NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL
  const [status, setStatus] = useState({
      submitted : false,
      submitting : false,
      info  : {error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
      fullName : '',
      email : '',
      message : '',
  })


  const handleOnChange = useCallback ( e => {
    e.persist()
    setInputs(prev => ({
        ...prev,
        [e.target.id] : e.target.value
    }))

    setStatus({
        submitted : false,
        submitting : false, 
        info  : {error: false, msg: null }
    })
  }, [])


  const handleServerResponse  = useCallback((ok, msg)=> {
      if(ok) {
        setStatus({
            submitted : true,
            submitting : false, 
            info  : {error: false, msg }
        })

        setInputs({
            fullName : '',
            email : '',
            message : '',
        })

      } else {
        setStatus({
            submitted : false,
            submitting : false, 
            info  : {error: true, msg }
        })
      }

  }, [])


  const handleSubmit = useCallback((e)=> {
    e.preventDefault()

    setStatus(prevStatus => ({...prevStatus, submitting : true}))

    axios({
            method : 'POST',
            url : process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
            data : inputs,

        }).then(_response => {
            handleServerResponse(true, 'Thank You your message has been submitted')
        })

  },[inputs, handleServerResponse])
  
  
    return (
    <div className=" mt--1 flex min-h-screen flex-col justify-center ">

<div className='ml-2 md:ml-6'>
<h2 className='text-primary font-bold text-3xl mb-2' >Subscribe to our newsletter</h2>

        <p className=" max-w-5xl text-xl leading-tight tracking-tight lg:text-xl ">
        Receive all the news as well as the latest challenges launched on our platform.
        </p>
</div>

      <div className="pt-10 flex flex-1 flex-col items-center justify-center lg:pt-6">
        <h2 className="text-4xl font-bold">Newsletter</h2>

        <form className="mt-10 flex min-w-full flex-col gap-5 px-10 lg:mt-10 lg:min-w-[600px]"
            onSubmit={handleSubmit}
        >

            {status.info.error && (
                <div className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative '
                    role="alert"
                >
                    <strong className='font-bold '>
                        Error : 
                    </strong>
                    {" "}
                    <span className='block sm:inline' >{status.info.msg} </span>
                </div>
            )}


            {
                status.submitted ? (
                    <div className='text-white text-xl font-bold px-4 py-3 rounded relative'
                        role='alert' 
                    >
                        Your Message has been successfully sent. We will contact you very soon 
                    </div>
                ) : (
                    <>
                       
          <input
            id="fullName"
            name="fullName"
            required
            maxLength={128}
            type="text"
            placeholder="Full Name"
            className="rounded-3xl border-2 border-slate-900 px-8 py-2 "
            onChange={handleOnChange}
            value={inputs.fullName}
          />

          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={128}
            placeholder="Your E-mail"
            className=" rounded-3xl border-2 border-slate-900 px-8 py-2 "
            onChange={handleOnChange}
            value={inputs.email}
         />

          <textarea
            id="message"
            name="message"
            required
            maxLength={1096}
            placeholder="Additionaal Information ..."
            className="min-h-[16em] rounded-3xl  border-2 border-slate-900 px-8 py-2  outline-none "
            onChange={handleOnChange}
            value={inputs.message}
          />

          <div className="mt-5 text-center ">
            <button
              type="submit"
              className="
              bg-primary text-white rounded-full shadow-sm shadow-white font-semibold
        md:text-sm text-xs tracking-wide md:px-8 px-6 py-4
        duration-500
        hover:shadow-md hover:shadow-primary  hover:border-primary/[.98] 
              "
            >
              {!status.submitting ? !status.submitted ? 'Submit': 'Submitted': 'Submitting...'}
            </button>
          </div>
                    </>
                )
            }
         
        </form>
      </div>
    </div>
  )
}

export default Contact
