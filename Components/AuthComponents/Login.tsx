"use client";

import React, { useState,FormEvent  } from "react";
import Image from "next/image";
import registerImage from "@/public/Images/RegisterImage.svg";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash ,FaGoogle,FaGithub,FaMailBulk,FaKey, FaEnvelope} from 'react-icons/fa';
import { toast } from 'react-hot-toast';


import axios from "axios";
export default function Login() {

  const router=useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setloading]=useState(false);
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  
  const handleSubmit = async (e:(any)) => {

    e.preventDefault();
    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }
    else{
      try{
        setloading(true);
    const res=await axios.post("/api/auth/login",
      {
        "email":email,
        "password":password
      }
    )
   
if(res.data.status==200){
  setloading(false);
 
  await router.push("/home");
}
else if(res.data.status!=200){
  setloading(false);
 toast.error(res.data.message);
  
}

    }
 
  catch(ex:any){
    toast.error("some error has occured");
console.log(ex);
  }
}
    
  };

  return (
    <div className="flex flex-row-reverse sm:gap-10 w-screen h-screen  m-0 p-0">
       <div className="hidden sm:block w-1/2 relative bg-slate-100 rounded-2xl sm:mx-10 sm:my-10 sm:py-10">
        <Image  src={registerImage} alt="register image" layout="fill" />
      </div>
      <div className=" w-[80%] sm:w-1/2 flex flex-col justify-center mx-auto px-0 overflow-x-hidden">
        <div className="w-full sm:w-96 mx-auto">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900">Welcome back!</h2>
          <h5 className="text-md font-bold leading-9 tracking-tight text-gray-900">We missed you a lot!</h5>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label className="block text-md font-medium leading-6 text-gray-900">Email Address<span className="text-red-600">*</span></label>
              <div className="mt-2 relative full">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  className="block w-full  h-10 rounded-md pl-10 pr-4  border-0 py-6  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                  <span className="absolute h-10 py-6 top-0  flex items-center left-3 "><FaEnvelope fontSize={20}/></span>
              
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-md font-medium leading-6 text-gray-900">Password<span className="text-red-600">*</span></label>
              <div className="mt-2 relative w-full">
                <input
                  id="password"
                  name="password"
                  type="password"
                  
                  placeholder="Enter your password"
                  className="block w-full h-10 rounded-md pl-10 pr-4 border-0 py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <span className="absolute h-10 py-6 top-0  flex items-center left-3 "><FaKey fontSize={20}/></span>

                  <span className="absolute h-10 py-6 top-0  flex items-center right-3 "><FaEye fontSize={20}/></span>
              </div>
            </div>
            <div className="flex justify-between mt-2 h-10 py-6 items-center">
             <div className=" flex items-center ">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 mr-2"/>
              <span>Remember me</span>
             </div> 
              <p className="font-bold text-sm sm:text-md underline cursor-pointer text-indigo-600">Forget your Password?</p>
            </div>
            <div className="flex justify-center mt-2">
              <button type="submit" className="w-full flex justify-center items-center h-10 bg-indigo-600 text-white font-bold rounded-md hover:opacity-80" onClick={handleSubmit}>
               {loading?<div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-white"></div>:<div>Login</div>} 
              </button>
            </div>
            <div className="flex items-center my-5">
              <div className="flex-grow h-0 border border-gray-200 w-auto"></div>
              <div className="text-gray-600 text-xl mx-2  w-auto">Or , Login With:</div>
              <div className=" flex-grow h-0 border border-gray-200  w-auto"></div>
            </div>
            <button className="flex items-center w-[100%] justify-center space-x-2 border border-grey-600 text-gray-700 rounded-md p-2 shadow-sm hover:shadow-lg my-4">
    
      <FaGoogle className="w-6 h-6" />

      <span>Login with Google</span>
    </button>
    <button className="flex items-center w-[100%] justify-center space-x-2 border border-grey-600 text-gray-700 rounded-md p-2 shadow-sm hover:shadow-lg my-4">
    
    <FaGithub className="w-6 h-6" />

    <span>Login with Github</span>
  </button>
            <div className="text-center w-full text-gray-900 font-bold text-md my-3"> {"Don't have an account?"} <span className="text-indigo-600 underline cursor-pointer " onClick={()=>router.push("/auth/register")}>Register here</span></div>
          </form>
        </div>
      </div>
    </div>
  );
}
