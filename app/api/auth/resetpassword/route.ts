import client from "@/db";
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import sendEmail from "@/utils/sendMail";

import { NextRequest, NextResponse } from "next/server";



interface UserData {

   
    email: string;
    password:string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const userdata: UserData = await req.json();
   
        // Find user by username or email
        const user = await client.user.update({
            data:{ password:userdata.password },
            where: {
            email: userdata.email,
           
               
            }
        });

      
            return NextResponse.json({ status: 400 });
      

    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




