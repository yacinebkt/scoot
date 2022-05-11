import React, {useEffect, useState} from 'react'
import Head from 'next/head'

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

const Terminal: React.FC = () => {
    const [backLayer, setBackLayer] = useState(false)

    hljs.registerLanguage('javascript', javascript);
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
   </Head>

      <div
        className="relative z-10 h-96 w-[90vw] md:w-[100%] overflow-hidden rounded-lg border-2  border-gray-700 
        bg-gray-800 shadow-[0_0_15px_rgba(0,0,0,.5) m-0 p-0
      "
      >
        <div className="flex items-center">
          <div className="flex items-center space-x-2 p-3">
            <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500"></div>
            <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500"></div>
          </div>

          <h1 className="font-light text-blue-500"> Project.config.tsx </h1>
        </div>

        <pre>
            <code className="js">
    {`  module.exports = {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
        ],
        extend: {
            keyframes: {
                'spain-slow': {
                    '0%' :  {tranform : 'rotate(0deg)'},
                    '100%' :  {tranform : 'rotate(180deg)'},
                }
            }
        }
    }`}
                
            </code>

        </pre>
      </div>

      {/* BACK */}
      <div 
        className={`absolute top-0  h-96 w-[90vw] md:w-[100%] translate-x-6 -translate-y-6 
      rotate-6 transform rounded-lg bg-gray-800 opacity-80
      shadow-[0_0_15px_rgba(0,0,0,.5)]
      ${backLayer? 'z-100' : 'z-0'}
      `} 
      
      >
        <div className="flex items-center space-x-2 p-3">
          <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500"></div>
        </div>

        <pre>
            <code className="js">
    {`  module.exports = {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
        ],
        extend: {
            keyframes: {
                'spain-slow': {
                    '0%' :  {tranform : 'rotate(0deg)'},
                    '100%' :  {tranform : 'rotate(180deg)'},
                }
            }
        }
    }`}
                
            </code>

        </pre>
      </div>

    </>
  )
}

export default Terminal
