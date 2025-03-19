import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

export async function GET(req) {
    const {userId} = getAuth(req)
    if(!userId) return NextResponse.json({message:"user not found"})
        console.log("userId: ", userId);
        
    const apiSecret = process.env.STREAM_API_SECRET
    const apiKey = process.env.STREAM_API_KEY

  const client = new StreamChat(apiKey, apiSecret)
  const token = client.createToken(userId)
  console.log("token: ", token);
  
  return NextResponse.json({message:"Hello"})
}
