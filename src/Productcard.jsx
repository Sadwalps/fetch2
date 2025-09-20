import React from 'react'

function Productcard({fetchdata}) {
  return (
   <>
   <div className='flex flex-col' style={{height:"50rem"}}>
    <img src={fetchdata?.image} alt="" className='h-75' />
    
      <h2 className='text-center text-black font-bold bg-amber-50 text-2xl'>{fetchdata?.title}</h2>
    <h3 className='text-center text-black font-bold bg-amber-50 '>{fetchdata?.description}</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>₹ {fetchdata?.price}</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>{fetchdata?.rating.rate}</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>{fetchdata?.rating.count}</h3>
  
   </div>
   </>
  )
}

export default Productcard