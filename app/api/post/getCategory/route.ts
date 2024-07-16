import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    category:string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const posts = await client.post.findMany({
            where: {
                category: {
                    name:{
                  contains: postdata.category, // Ensure the category contains the specified string
                  mode: 'insensitive', // Optional: make the search case-insensitive
                },
              },
            }
        });
        return NextResponse.json({data:posts,status:200})
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




