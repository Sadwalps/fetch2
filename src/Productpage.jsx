import React, { useState } from 'react'
import Productcard from './Productcard'
import { Link } from 'react-router-dom'
import UseData from './hooks/UseData';


function Productpage() {
  
  const data = UseData('https://dummyjson.com/products')
  console.log(data.products);
  
  
  

  
  
  return (
    <>
   <Link to={'/'}> <button className='flex items-center justify-center font-extrabold text-6xl text-black hover:text-white bg-amber-50 hover:bg-stone-800  px-3 pb-3 float-right hover:shadow-amber-100'>←</button></Link>
    <div className='bg-black'>
      <h1 className='text-center text-amber-50 font-extrabold lg:text-7xl text-5xl pt-20 pb-10'>All Products</h1>
    { data?.map((item)=>(<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        <div className='text-white p-5 flex items-center justify-center'><Productcard/></div>
        
      </div>)) }
<Link to={'/'}> <button className='flex items-center justify-center font-extrabold text-6xl text-black hover:text-white bg-amber-50 hover:bg-stone-800  px-3 pb-3 float-right hover:shadow-amber-100'>up</button></Link>
      
    </div>
    </>
  )
}

export default Productpage