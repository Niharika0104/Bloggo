import React from 'react'
import topics from '@/Constant/WhoToFollow'
import Image from 'next/image'
export default function Component(){
    return (
        <div className=' mx-5  '>
            <h3 className='text-xl'>Who to Follow</h3>
            <div className='flex flex-col gap-3  mt-3  '>
                {
topics.map((item,index)=>{
    return (<div className='flex justify-between items-center w-full' key={index}>
        <div className='w-4/5'>
        <div className='flex gap-4'>
        <Image src={item.icon} alt={"staff icons"} className='h-6 w-6 rounded-full'/>
        <div className='text-black font-bold'>{item.name}</div>
        </div>
        <div className='text-md'>{item.bio.substring(0,50)}...</div>
        </div>
        <div className='border font-bold px-5 text-white py-2 bg-indigo-600 rounded-full'>Follow</div>
    </div>)
})
                }
                
            </div>
            <div className='text-indigo-600 cursor-pointer mt-3'>See more topics</div>
        </div>
    )
}