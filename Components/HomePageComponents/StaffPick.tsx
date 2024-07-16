import React from 'react'
import staffpicks from '@/Constant/StaffPicks'
import Image from 'next/image'
export default function Component(){
    return (
        <div className='w-max-min mx-5'>
            <h3 className='text-xl'>Staff Pick's</h3>
            <div className='flex flex-col gap-3  mt-3'>
                {
staffpicks.map((item,index)=>{
    return (<div key={index}>
        <div className='flex gap-2'>
            <Image src={item.icon} alt={"staff icons"} className='h-6 w-6 rounded-full'/>
            <div className='text-black font-bold'>{item.title}</div>
        </div>
        <div>{item.articlename}</div>
    </div>)
})
                }
                
            </div>
            <div className='text-indigo-600 cursor-pointer mt-3'>See full list</div>
        </div>
    )
}