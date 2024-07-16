import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    userId:string;
    postId:string;
   
   
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const post = await client.like.create({
            data: {
                userId: postdata.userId,
                postId: postdata.postId
            
                
            },
        });
        const postInfo=await client.post.findFirst({
            where:{
                id:postdata.postId
            },
            include:{
                likes:true,
            }
        })
        return NextResponse.json({data:postInfo,status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}
