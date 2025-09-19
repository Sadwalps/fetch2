import React from 'react'

function Productcard() {
  return (
   <>
   <div className=''>
    <img src="https://tse3.mm.bing.net/th/id/OIP.1xX4yvvHcM7IhjbfG1tRrQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className='w-100' alt="" />
    <h2 className='text-center text-black font-bold bg-amber-50 text-3xl'>Title</h2>
    <h3 className='text-center text-black font-bold bg-amber-50 '>description</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>Price</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>Rating</h3>
    <h3 className='text-center text-black font-bold bg-amber-50 '>Stock</h3>
   </div>
   </>
  )
}

export default Productcard