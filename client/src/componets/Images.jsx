import React from 'react'

export default function Images() {
  return (
    <div className='grid grid-cols-2 gap-2'>
    {
        [1,2,3,4,4,34,53,4,3,6,3,6,23,5,6,6,2,2,0,5,3,5,5,5,5,5,5,5,5,5,5,5,5,6].map((img,i)=>{
            return  <div  key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                <img className='w-full h-full object-fill' src="http://localhost:5173/thumbail.webp" alt="" />
            </div>
        })
    }
</div>
  )
}
