import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Navbar/Nav'

const Home: NextPage = () => {
  return (
    <div className="flex font-Poppins">
      <Head>
        <title>Scoot agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />  
    </div>
  )
}

export default Home
