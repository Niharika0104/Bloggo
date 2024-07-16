// components/Shimmer.tsx
import React from 'react';

const Shimmer = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-5 w-full items-center '>
           <div className=' w-4/5'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-5 items-center'>
                <p className='h-5 w-5 rounded-full bg-gray-100'></p>
                <p className='h-3 w-16 bg-gray-100'></p>
                </div>
              
        <div className="relative overflow-hidden bg-gray-100 rounded-lg w-full h-5 ">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        <div className="relative overflow-hidden bg-gray-100 rounded-lg h-5 w-5/6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        </div>
       
        </div>
        <div className='h-40 w-40 bg-gray-100 rounded-lg'></div>
        
        </div>
        <div className='flex gap-5 w-full items-center '>
           <div className=' w-4/5'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-5 items-center'>
                <p className='h-5 w-5 rounded-full bg-gray-100'></p>
                <p className='h-3 w-16 bg-gray-100'></p>
                </div>
              
        <div className="relative overflow-hidden bg-gray-100 rounded-lg w-full h-5 ">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        <div className="relative overflow-hidden bg-gray-100 rounded-lg h-5 w-5/6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        </div>
       
        </div>
        <div className='h-40 w-40 bg-gray-100 rounded-lg'></div>
        
        </div>
        <div className='flex gap-5 w-full items-center '>
           <div className=' w-4/5'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-5 items-center'>
                <p className='h-5 w-5 rounded-full bg-gray-100'></p>
                <p className='h-3 w-16 bg-gray-100'></p>
                </div>
              
        <div className="relative overflow-hidden bg-gray-100 rounded-lg w-full h-5 ">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        <div className="relative overflow-hidden bg-gray-100 rounded-lg h-5 w-5/6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        </div>
       
        </div>
        <div className='h-40 w-40 bg-gray-100 rounded-lg'></div>
        
        </div>
        </div>
    );
};

export default Shimmer;
