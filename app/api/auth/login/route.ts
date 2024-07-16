import client from "@/db";
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { useAuth } from "@/app/Context/AuthContext";
import { NextRequest, NextResponse } from "next/server";

interface User {

    name?: string;
    password: string;
    email: string;
}

export async function POST(req: NextRequest) {
    // const auth=useAuth();
    // console.log(auth)
    try {
        // Parse request body
        const userdata: User = await req.json();
   
        // Find user by username or email
        const user = await client.user.findFirst({
            where: {
            email: userdata.email 
               
            },
            include:{
                posts:true,
                savedPosts:true
            }
        });

        if (user) {
            // Compare passwords
            const isPasswordValid: boolean = await bcrypt.compare(userdata.password, user.password);
            if (isPasswordValid) {
                const result = {
                    email: user.email,
                    name: user.name,
                    phonenumber: user.phonenumber,
                    userId:user.id
                };

                const secretKey: string = process.env.SECRET_KEY || "";
                const token: string = jwt.sign(result, secretKey, { expiresIn: '15d' });

                cookies().set("token", token, {
                    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
                    httpOnly: true,
                    secure: true,
                    path: '/',
                });
               
                return NextResponse.json({ data: result, status: 200 });
            } else {
                return NextResponse.json({ message: "Incorrect credentials", status: 401 });
            }
        } else {
            return NextResponse.json({ message: "Incorrect credentials", status: 401 });
        }

    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




