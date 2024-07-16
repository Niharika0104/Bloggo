import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    userId:string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const posts = await client.post.findMany({
            where: {
                authorId: postdata.userId
            },
        });
        return NextResponse.json({data:posts,status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




