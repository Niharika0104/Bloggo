import client from "../../../../db"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers';

interface User {
    name: string;
    email: string;
    phonenumber?: string;
    password: string;
   
}



export async function POST(req: NextRequest, res: NextResponse) {
    try {

        const userdata: User = await req.json();

        const salt = await bcrypt.genSalt(11);



        const hashedPassword: string = await bcrypt.hash(userdata.password, salt);

        const exists = await client.user.findMany(
            {
                where: {
                 
                      email: userdata.email 
                   
                },
            }
        );

        if (exists.length > 0) return NextResponse.json({ message: "User with this email already exists", status: 400 })

        const user = await client.user.create(
            {
                data: {
                    name: userdata.name,
                    email: userdata.email,
                    phonenumber: userdata.phonenumber||"",
                    password: hashedPassword
                  
                   
                }
            }
        );

        const result = {
            name: userdata.name,
            email: userdata.email,
            phoneNumber: userdata.phonenumber,
            password: hashedPassword
        }

        const val: any = process.env.SECRET_KEY || undefined;

        const token: string = jwt.sign(result, val);
        
        cookies()
            .set(
                "token",
                token,
                {
                    maxAge: 15 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                    secure: true
                }
            )

       
        

        // Send success response with created user data
        return NextResponse.json({

            message: "user is successfully created",
            data: user,
            errro: null,

        }, {

            status: 200
        })

    } catch (error: any) {
        console.error("Error creating user:", error);
        // Send error response with appropriate status code
        return NextResponse.json(
            {
                message: "some error occurred while creating user ",
                errro: error.message,
                data: null
            },
            {
                status: 500
            }
        )
    }
}

