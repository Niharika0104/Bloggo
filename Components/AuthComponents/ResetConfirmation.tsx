"use client"
import React, { useState } from "react";
import { FaEnvelope } from 'react-icons/fa';
import { useRouter } from "next/navigation";
export default function ResetConfirmation() {
 
const router =useRouter();


  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-[80%] sm:w-[25%] mx-auto text-center">
       
        <h1 className="font-bold text-[2.5rem] text-center my-5">Password reset done successfully</h1>
        <h5 className="font-medium text-md text-center my-5">Your password has been changed successfully.Please login in to your account with new credentials.</h5>
        <div className="flex justify-center mt-5">
          <button onClick={()=>{router.push("/auth/login")}} type="submit" className="w-full text-center h-10 bg-indigo-600 text-white rounded-md hover:opacity-80">
          Login
          </button>
        </div>
      </div>
    </div>
  );
}
