"use client"
import React, { useState,FormEvent  } from "react";
import { FaKey,FaEye} from 'react-icons/fa';



export default function ResetPassword(){
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        // Handle login logic here
      };
    return(
      
        <div className="flex h-screen w-screen justify-center items-center ">
             <form onSubmit={handleSubmit} className="w-[80%] sm:w-[25%] mx-auto">
                <h1 className="font-extrabold text-[2rem] text-center my-5">Reset your password</h1>
            

     

                <div className="mt-5 ">
              <label className="block text-md font-medium leading-6 text-gray-900">Password<span className="text-red-600">*</span></label>
              <div className="h-10 relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter password"
                className="block w-full h-10 rounded-md pl-10 pr-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                  <span className="absolute h-full   top-0  flex items-center left-3"><FaKey fontSize={20}/></span>

              <span className="absolute top-0 h-full flex items-center right-3"><FaEye fontSize={20}/></span>
              </div>
            </div>
            <div className="mt-5  ">
            
             
              <label className="block text-md font-medium leading-6 text-gray-900">Confirm Password<span className="text-red-600">*</span></label>
              <div className="h-10 relative">
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                required
                placeholder="Enter confirm password"
                className="block w-full h-10 rounded-md pl-10 pr-4  px-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
                  <span className="absolute h-full   top-0  flex items-center left-3 "><FaKey fontSize={20}/></span>

                  <span className="absolute top-0  h-full flex items-center right-3 "><FaEye fontSize={20}/></span>
                  </div>
            </div>
        <div className="flex justify-center mt-5">
              <button type="submit" className="w-full text-center h-10 bg-indigo-600 text-white rounded-md hover:opacity-80">
                Reset
              </button>
            </div>
            
        </form>
      </div>
    )
}