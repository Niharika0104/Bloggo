import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    authorId:string;
    title:string;
    content:string;
   
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const newPost = await client.post.create({
            data: {
                authorId: postdata.authorId,
                title: postdata.title,
                content: postdata.content,
                
            },
        });
        // if (newPost) {
        //     await fetch(`${process.env.BASE_URL}/api/ai/segment`, {
        //       method: "POST",
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({
        //         postContent: newPost.content,
        //         postId: newPost.id,
        //       }),
        //     });
        //   }
        return NextResponse.json({message:"data added successfuly",status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




