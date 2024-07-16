import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    userId:string;
    title:string;
    content:string;
    postId:string;
   
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const newPost = await client.post.update({
            data: {
                isDeleted  :true
            },
            where:{
                id:postdata.postId
            }
        });
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




