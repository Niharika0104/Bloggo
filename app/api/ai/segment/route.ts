import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  postContent: string;
  postId: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const request: Body = await req.json();
console.log(request)
    const response = await fetch(
      'https://probable-space-rotary-phone-7q6vpjg4457hpr4g-47334.app.github.dev/api/projects/mindsdb/models/topic_classifier_model/predict',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MINDSDB_KEY}`  // Replace with your actual API key
        },
        body: JSON.stringify({
          data: [{ post: request.postContent }]
        })
      }
    );

    const newPost = await response.json();
    const topic = newPost.response.topic;

    // Find or create the category
    let category = await client.category.findFirst({
      where: {
        name: topic
      }
    });

    if (!category) {
      category = await client.category.create({
        data: {
          name: topic
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

    return NextResponse.json({ response: newPost, status: 200 });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}
