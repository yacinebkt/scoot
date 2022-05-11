import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Contact: React.FC = () => {
  //NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    message: '',
  })

  const handleOnChange = useCallback((e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }, [])

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })

      setInputs({
        fullName: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, 'Thank You your message has been submitted')
      })
    },
    [inputs, handleServerResponse]
  )

  return (
    <div className=" mt--1 flex min-h-screen w-full flex-col justify-center p-4">
      <div className="w-full md:ml-6">
        <h2 className="mb-2 text-3xl font-bold text-primary">
          Subscribe to our newsletter
        </h2>

        <p className=" max-w-5xl text-xl leading-tight tracking-tight lg:text-xl ">
          Receive all the news as well as the latest challenges launched on our
          platform.
        </p>
      </div>

      <div className="flex  flex-col items-center justify-center pt-10 lg:pt-6">
        <h2 className="text-4xl font-bold">Newsletter</h2>

        <form
          className="mt-10 flex w-full flex-col gap-5 lg:mt-10 lg:max-w-[600px]"
          onSubmit={handleSubmit}
        >
          {status.info.error && (
            <div
              className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700 "
              role="alert"
            >
              <strong className="font-bold ">Error :</strong>{' '}
              <span className="block sm:inline">{status.info.msg} </span>
            </div>
          )}

          {status.submitted ? (
            <div
              className="relative rounded px-4 py-3 text-xl font-bold text-white"
              role="alert"
            >
              Your Message has been successfully sent. We will contact you very
              soon
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
              rounded-full bg-primary px-6 py-4 text-xs font-semibold
        tracking-wide text-white shadow-sm shadow-white duration-500 hover:border-primary/[.98]
        hover:shadow-md
        hover:shadow-primary md:px-8  md:text-sm 
              "
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Submitting...'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
