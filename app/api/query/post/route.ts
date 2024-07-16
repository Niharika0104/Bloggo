import client from "@/db";

import { NextRequest, NextResponse } from "next/server";

interface PostData {
    query:string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const results = await client.post.findMany({
            where: {
                title: {
                    contains: postdata.query,
                    mode: 'insensitive' 
                }
            },
            include: {
                author: true,
                category: true,
                likes: true,
                savedBy: true,
            }
        });
        
        
        return NextResponse.json({data:results,status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




