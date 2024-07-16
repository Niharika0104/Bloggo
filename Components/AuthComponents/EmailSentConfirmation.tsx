"use client"
import React, { useState } from "react";
import { FaEnvelope } from 'react-icons/fa';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const sendMail = () => {
    // Call the API endpoint to resend the mail
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-[80%] sm:w-[25%] mx-auto text-center">
        <div className="flex justify-center items-center h-32 w-32 bg-white border-indigo-600 border-4 rounded-full mx-auto">
          <FaEnvelope fontSize={40} className="text-indigo-600" />
        </div>
        <h1 className="font-bold text-[2.5rem] text-center my-5">Check Your Email</h1>
        <h5 className="font-medium text-md text-center my-5">Please check the email address emailxyz for instructions to reset your password.</h5>
        <div className="flex justify-center mt-5">
          <button onClick={sendMail} type="submit" className="w-full text-center h-10 bg-indigo-600 text-white rounded-md hover:opacity-80">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
}
