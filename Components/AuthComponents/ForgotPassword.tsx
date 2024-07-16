"use client"
import React, { useState,FormEvent  } from "react";
import { FaEnvelope} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


export default function ForgotPassword(){
    const [email, setEmail] = useState("");
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      };
    
        e.preventDefault();
        if (!email) {
          toast.error('Email is required');
          return;
        }
    
        if (!validateEmail(email)) {
          toast.error('Please enter a valid email address');
          return;
        }
      };
    return(
      
        <div className="flex h-screen w-screen justify-center items-center ">
             <form onSubmit={handleSubmit} className="w-[80%] sm:w-[25%] mx-auto">
                <h1 className="font-extrabold text-[2rem] text-center my-5">Reset your password</h1>
                <h5 className="font-medium text-md text-center my-5">Enter your email address and we will send you instructions to reset your password.</h5>

        <div className="mt-3">
              <label className="block text-md font-medium leading-6 text-gray-900">Email<span className="text-red-600">*</span></label>
              <div className="mt-2 relative w-full">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  placeholder="Enter your email"
                  className="block w-full h-10 rounded-md pl-10 pr-4 border-0 py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                  <span className="absolute h-10 py-6 top-0  flex items-center left-3 "><FaEnvelope fontSize={20}/></span>

               
              </div>
        </div>
        <div className="flex justify-center mt-5">
              <button type="submit" className="w-full text-center h-10 bg-indigo-600 text-white rounded-md hover:opacity-80">
                Continue
              </button>
            </div>
            <div className="flex justify-center mt-5">
             <span className="text-indigo-600 font-bold cursor-pointer">Back to Wordwave Web</span>
            </div>
        </form>
      </div>
    )
}