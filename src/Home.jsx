import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='bg-black grid lg:grid-cols-[repeat(1,4fr)_repeat(1,1fr)]  ' style={{ height: "100vh" }} >
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-white lg:text-6xl md:text-4xl text-4xl '> Hello Welcome To </h1>
          <h1 className='font-bold text-white lg:text-6xl  md:text-4xl text-4xl  mt-3'>Our Shop</h1>
          <h2 className='font-bold text-white lg:text-4xl  md:text-2xl text-2xl   mt-3'>Check our Collections</h2>

          <Link to={'/product-page'}><button className='mt-5 bg-amber-300 py-4 px-3 text-amber-950 hover:textblack font-bold hover:bg-white hover:cursor-pointer'>
            Check Products
          </button></Link>
        </div>
        <div className='bg-black'>
          <h2 className='text-amber-300'></h2>
        </div>
      </div>
    </>
  )
}

export default Home