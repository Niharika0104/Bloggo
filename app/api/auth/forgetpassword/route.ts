import client from "@/db";
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import sendEmail from "@/utils/sendMail";

import { NextRequest, NextResponse } from "next/server";



interface UserData {

   
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const userdata: UserData = await req.json();
   
        // Find user by username or email
        const user = await client.user.findFirst({
            where: {
            email: userdata.email 
               
            },
        });

        if (user) {
            // Compare passwords
           
                const secretKey: string = process.env.SECRET_KEY || "";
                const token: string = jwt.sign(user, secretKey, { expiresIn: '5m' });

                cookies().set("token", token, {
                    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
                    httpOnly: true,
                    secure: true,
                    path: '/',
                });
                sendEmail(process.env.FROM_EMAIL_ADDRESS || "",user.email,"Reset Your Password","reset you password",token)
                return NextResponse.json({ data: user, status: 200 });
            } 
        else {
            return NextResponse.json({ message: "Email does not exist", status: 400 });
        }

    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




