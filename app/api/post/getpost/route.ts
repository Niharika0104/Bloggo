import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    postId:string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const post = await client.post.findFirst({
            where: {
                id: postdata.postId
            },
            include:{
author:true,
category:true,
likes:true,
savedBy:true,
            }
        });
        return NextResponse.json({data:post,status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




