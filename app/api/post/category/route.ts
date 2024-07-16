import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  topic: string;
  postId: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const request: Body = await req.json();

   

   
   

    // Find or create the category
    let category = await client.category.findFirst({
      where: {
        name: request.topic
      }
    });

    if (!category) {
      category = await client.category.create({
        data: {
          name: request.topic
        }
      });
    }

    // Update the post with the categoryId
    await client.post.update({
      where: {
        id: request.postId
      },
      data: {
        categoryId: category.id
      }
    });

    return NextResponse.json({ response: "Topic Assigned successfully", status: 200 });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}
