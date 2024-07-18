import React, { useState } from 'react'

const OneCity = ({urls,user,index , removeIndex}) => {
  const[show,setShow]=useState(true)

  return (
    <article className='shadow-md rounded-tl-md rounded-tr-md overflow-hidden'>
        <div className='h-1/2'>
            <img src={urls.regular}  className='object-cover w-full h-full'/>
        </div>
        <div className='flex flex-col justify-between p-4'>
    <div className='my-4'>
      <p className='text-center font-bold'>{user?.first_name}</p>
      <p className='text-slate-500 text-sm'>{!show ?<p> `${user.bio.substring(0,15)}...` <span onClick={()=> setShow(true)} className='text-red-600'   >Read More</span></p> : <p> (`${user.bio}... ` <span className='text-red-600'  onClick={()=>setShow(false)} >Read less</span>) </p>}</p>
    </div>
    <div className='mt-auto'>
      <button onClick={()=> removeIndex(index)} className='w-full border border-solid border-green-400 rounded-md py-2 px-4 bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700'>
        Not interested
      </button>
    </div>
  </div>
    </article>
  )
}

export default OneCity