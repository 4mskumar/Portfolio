import React from 'react'
import Hero from '../Components/Hero'
import { Nav } from '../Components/Nav'

const Home = () => {
  return (
    <div className='w-full bg-zinc-100 h-screen'>
        <Hero />
        <Nav />
    </div>
  )
}

export default Home