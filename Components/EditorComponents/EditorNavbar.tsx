"use client"
import { BiSearch, BiEdit, BiUser } from "react-icons/bi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
interface Editor {
  title: string;
  content: string;
  publish: () => void;
}
export default function Navbar(props:Editor) {
  const router=useRouter();

  const auth =useAuth();
  console.log(auth,"navbar")
  useEffect(()=>{},[auth])
  return (
    <div className="bg-white w-[95%] mx-auto flex items-center h-20 justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="flex cursor-pointer" onClick={()=>{router.push("/home");}}>
          <span className="text-[2rem] font-sans font-extrabold text-indigo-800">Word</span>
          <span className="text-[2rem] font-sans font-extrabold text-yellow-400">Wave</span>
        </div>
        
      </div>
      <div className="flex gap-6 items-center text-xl">
        <button className="rounded-full bg-indigo-600 hover:bg-opacity-60 py-2 px-6 text-white font-bold"
        onClick={()=>{props.publish()}}>Publish</button>
         <span className="cursor-pointer">
       <div className="h-10 w-10 bg-amber-400 text-white rounded-full flex justify-center items-center">{auth?.user?.name?.charAt(0)?? <BiUser />}</div>  
        </span>
      </div>
    </div>
  );
}
