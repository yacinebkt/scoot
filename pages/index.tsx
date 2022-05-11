import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Challenges from '../components/Challenges'

import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {
  return (
    <div className=" font-Poppins bg-Hero bg-auto md:bg-cover bg-top ">
      <Head>
        <title>Scoot agency</title>
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>


   </Head>
   

      <div className='flex justify-center w-full'>
        <div className='max-w-[1800px] w-full'>
        <Header />
        <About />   
        <Challenges />
        <Testimonials />
        <Contact />
        <Footer />

        </div>
      </div>
      
    </div>
  )
}

export default Home
