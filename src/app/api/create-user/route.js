import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

function capitalize(slug) {
  if (!slug || typeof slug !== "string") return "";
  return slug
    .trim()
    .split("-")
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function POST(request) {
  const body = await request.json();
console.log("[DEBUG] Initialed")
  try {
    const user = body.data.id;
    if (!user) {
      return NextResponse.json({ message: "user not found" });
    }
    console.log("[DEBUG] User: ", user);

    // Creating client
    const client = new StreamChat(apiKey, apiSecret);
    if (!client) {
      return NextResponse.json({ message: "Creating client faild" });
    }
    console.log("[DEBUG] Client Created");

    // Creating token
    console.log("[DEBUG] creating token for backend...");
    const token = client.createToken(user);
    if (!token){
      return NextResponse.json({ message: "generating token is faild" });
    }
    console.log("[DEBUG] token backend: ", token);

    // setting token in metadata publicly
    try {
      await client.connectUser(
        { id: user },
        token
      );
      console.log("[DEBUG] metadata updateding...");
      // await clerkClient(user);
      await clerkClient.users.updateUserMetadata(user, {
        publicMetadata: { token: token },
      });
      console.log("[DEBUG] metadata updated");

      const updatedUser = await clerkClient.users.getUser(user);
      if (!updatedUser){
        return NextResponse.json({ message: "token is not found" });
      }
      console.log("[DEBUG] Updated user metadata: ", updatedUser.publicMetadata);

      await client.upsertUser({ id: user });
    } catch (error) {
      console.error("Setting Toekn is faild: ", error);
      return NextResponse.json({ message: "Setting Toekn is faild" });
    }

    // Giving access this user to all chats
    const chats = [
      "javaScript-discuss",
      "python-discuss",
      "java-discuss",
      "c++-discuss",
      "ruby-discuss",
      "go-discuss",
    ];
    console.log("[DEBUG] new Channel creating...");
    chats.forEach(async (item) => {
      const newChannel = client.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: capitalize(item),
        created_by_id: user,
      });
      await newChannel.create();
      newChannel.addMembers([user]);
    });
    console.log("[DEBUG] new Channel created");

    return NextResponse.json(
      { message: "Succefully done", token: token },
      {
        status: 201,
      }
    );
  } catch (error) {}
  return NextResponse.json({ message: "Invalid request" });
}

