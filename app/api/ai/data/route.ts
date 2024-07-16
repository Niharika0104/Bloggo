import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  query: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const request: Body = await req.json();

    const response = await fetch(
      'https://probable-space-rotary-phone-7q6vpjg4457hpr4g-47334.app.github.dev/api/projects/mindsdb/models/blog_helper/predict',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MINDSDB_KEY}`  // Replace with your actual API key
        },
        body: JSON.stringify({
          data: [{ query: request.query }]
        })
      }
    );

    const newPost = await response.json();

    return NextResponse.json({ response: newPost, status: 200 });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}
