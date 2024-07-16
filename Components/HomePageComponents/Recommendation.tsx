import React from 'react'
import topics from '@/Constant/RecommendedTopics'

export default function Component(){
    return (
        <div className=' mx-5'>
            <h3 className='text-xl'>Recommended Topics</h3>
            <div className='flex flex-wrap gap-3  mt-3 w-full '>
                {
topics.map((item,index)=>{
    return (<div key={index} className='bg-gray-100 rounded-full px-6 py-2 '>{item}
    </div>)
})
                }
                
            </div>
            <div className='text-indigo-600 cursor-pointer mt-3'>See more topics</div>
        </div>
    )
}