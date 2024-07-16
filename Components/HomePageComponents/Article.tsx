"use client"

import { useEffect,useState } from "react"
import Image from "next/image"
import { PiHandsClapping } from "react-icons/pi";
import { BiBookmarkAlt, BiChat, BiShare } from "react-icons/bi";
import staffimage1 from "@/public/Images/staffimage1.png";
import parse from 'html-react-parser';
import { CgMoreAlt } from "react-icons/cg";
import { PostInfo } from "@/app/Types/types";
import { useAuth } from "@/app/Context/AuthContext";
import axios from "axios";
interface PostData{
postId:string
}
const handlefollow=()=>{

}

export default function Article(props:PostData){
    const [data,setdata]=useState<PostInfo|undefined>(undefined);
    const [like,setLike]=useState<number>(0);
    const {user}=useAuth();
    const handleLike=async ()=>{
        const res=await axios.post("/api/post/like",{
            userId:user.userId,
            postId:props.postId,
        })
 
        setLike(res.data?.data?.likes?.length);
    }
 
  
    useEffect(()=>{
        const fetchdata=async ()=>{
        const res= await axios.post("/api/post/getpost",{
            postId:props.postId
        })
        const data:PostInfo=res.data.data;
        console.log(data)
        setdata(data);
       
        setLike(res?.data?.data?.likes?.length)
        }
        fetchdata();
    },[like])

return (
    
    <div className="w-[50%] mx-auto mt-10">
        <h1 className="text-black font-bold text-xl"> {parse(data?.title|| "")}</h1>
        {/* second sectoin */}
        <div className="flex gap-2 mt-5 ">
       
        <div className="flex items-center gap-3">
         
          <Image src={staffimage1} alt={"staff icons"} className='h-13 w-12 rounded-full'/>
        
          <div>
            <div className="flex flex-col gap-1">
                <p className="font-bold">{data?.author?.name}</p>
                <p>{data?.createdAt.split('T')[0]}</p>

            </div>
          </div>

        

        </div>
        <div className="cursor-pointer text-indigo-500 font-medium " onClick={handlefollow}>
         <div className=" flex items-center font-bold  ">  <span>.</span> <p>Follow</p> </div>
         
         </div>

</div>
        {/* third section */}
        <div className="mt-8 border-t-2 border-b-2 border-gray-100 flex justify-between items-center p-2 ">
            <div className="flex gap-2 items-center">
               <div className=" flex items-center gap-2 text-lg cursor-pointer" onClick={()=>{handleLike()}}><PiHandsClapping fontSize={30}/> <p>{data?.likes?.length}</p></div> 
               <div className="flex "><BiChat fontSize={30}/> <p>{data?.comments?.length}</p></div> 

            </div>
            <div className="flex gap-2">
               <div><BiBookmarkAlt fontSize={30}/> </div> 
               <div><BiShare fontSize={30}/> </div> 
               <div><CgMoreAlt fontSize={30}/> </div> 


            </div>
        </div>
        {/* content */}
        <div className="mt-10 mb-10">
            {parse(data?.content || "")}
        </div>
    </div>
)
}