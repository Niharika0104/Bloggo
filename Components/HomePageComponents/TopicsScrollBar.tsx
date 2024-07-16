"use client"
import React, { useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Topics from '@/Constant/TopicsData';
import axios from 'axios';
import { useAuth } from "@/app/Context/AuthContext";
const Carousel: React.FC = () => {
  const {topic,setTopicFnc}=useAuth();
  const [item,setItem]=useState("");
  const carouselRef = useRef<HTMLDivElement>(null);
 const fetchRecords=()=>{
setTopicFnc(item)
 }
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className=" mt-5 flex h-20 items-center w-[90%] mx-auto sm:w-full">
      <button
        className="   text-gray-700 p-2 rounded-full focus:outline-none"
        onClick={scrollLeft}
      >
       <BiChevronLeft fontSize={30}/>
      </button>
      <div
        className=" flex overflow-x-hidden whitespace-nowrap "
        ref={carouselRef}
      >
        {Topics.map((item:string,index)=>{
          return ( <div className="px-2 text-gray-700 sm:px-4 w-min-max cursor-pointer" key={index} onClick={()=>{setItem(item);fetchRecords();}}>{item}</div>)
        })}
       
       
      
        

        


        {/* Add more items as needed */}
      </div>
      <button
        className="   text-gray-700 p-2 rounded-full focus:outline-none"
        onClick={scrollRight}
      >
       <BiChevronRight fontSize={30}/>
      </button>
    </div>
  );
};

export default Carousel;
