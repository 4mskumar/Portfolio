import React from 'react'
import Hero from '../Components/Hero'
import { Nav } from '../Components/Nav'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='w-full bg-zinc-100 min-h-screen'>
        <Hero />
        <Nav />
        <Card />
    </div>
  )
}

export default Home