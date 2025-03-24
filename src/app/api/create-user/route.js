import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
console.log("cheak is it working or not");


// export async function GET() {
//   return NextResponse.json({
//     message: "GET API Method is working!",
//   });
// }


export async function POST(request) {
  function capitalize(slug) {
    if (!slug || typeof slug !== "string") return "";
    return slug
      .trim()
      .split("-")
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  console.log("[DEBUG] POST function is running");
  const body = await request.json();
  console.log("[DEBUG] Body received:", body);

  try {
    const user = body.data.id;
    if (!user) {
      return NextResponse.json({ message: "user not found" });
    }
    console.log("[DEBUG] API Key:", apiKey);
    console.log("[DEBUG] API Secret:", apiSecret);
    console.log("[DEBUG] User :", user);

    // Creating client
    let client;
    try {
      if (!apiKey || !apiSecret) {
        return NextResponse.json({
          message: "Envoirnment variables not set yet",
        });
      }
      console.log("[DEBUG] STREAM_API_KEY:", apiKey);
      console.log("[DEBUG] STREAM_API_SECRET:", apiSecret);

      client = new StreamChat(apiKey, apiSecret);
      if (!client) {
        return NextResponse.json({ message: "Creating client faild" });
      }
      console.log("[DEBUG] Client Created");
    } catch (error) {
      console.error("[ERROR]", error); // ADD THIS
      return NextResponse.json({
        message: "Creating clinet faild",
        error: error.message,
      });
    }

    // Creating token
    let token;
    try {
      console.log("[DEBUG] Creating token for backend...");
      token = client.createToken(user);
      console.log("[DEBUG] Token backend:", token);
    } catch (error) {
      console.error("[ERROR] Creating token failed:", error);
      return NextResponse.json({
        message: "Creating token failed",
        error: error.message,
      });
    }

    console.log("[DEBUG] token outside setting metadata try cath : ", token);
    console.log("[DEBUG] user outside setting metadata try cath : ", user);
    // setting token in metadata publicly
    // try {
    //   console.log("[DEBUG] connecting clinet with user...");
    //   await client.connectUser({ id: user }, token);
    //   console.log("[DEBUG] metadata updateding...");
    //   await clerkClient.users.getUser(user);
    //   if (!token || !user) {
    //     console.error("token not found while updating user: ", error);
    //     return NextResponse.json({
    //       message: "token not found while updating user",
    //       error: error.message,
    //     });
    //   }
    //   console.log("[DEBUG] User inside setting  metadata try cath block :", user);
    //   console.log("[DEBUG] Token inside setting  metadata try cath block :", token);
    //   await clerkClient.users.updateUserMetadata(user, {
    //     publicMetadata: { token: token.toString() },
    //   });
    //   console.log("[DEBUG] metadata updated");

    //   const updatedUser = await clerkClient.users.getUser(user);
    //   if (!updatedUser) {
    //     return NextResponse.json({ message: "token is not found" });
    //   }
    //   console.log(
    //     "[DEBUG] Updated user metadata: ",
    //     updatedUser.publicMetadata
    //   );

    //   await client.upsertUser({ id: user });
    // } catch (error) {
    //   console.error("Setting Toekn in metadata is faild: ", error);
    //   return NextResponse.json({
    //     message: "Setting Toekn in metada is faild",
    //     error: error.message,
    //   });
    // }

    try {
      console.log("[DEBUG] Updating Clerk metadata...");
      const response = await fetch(
        `https://api.clerk.dev/v1/users/${user}/metadata`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            public_metadata: { token: token },
          }),
        }
      );

      const data = await response.json();
      console.log("[DEBUG] Clerk response in backend:", data);

      if (!response.ok) {
        throw new Error(`[ERROR] Clerk update failed: ${data.message}`);
      }

      console.log("[DEBUG] Clerk metadata updated successfully");
    } catch (error) {
      console.error("[ERROR] Clerk metadata update failed:", error);
      return NextResponse.json(
        { message: "Failed to update Clerk metadata", error: error.message },
        { status: 500 }
      );
    }

    // Giving access this user to all chats
    try {
      const chats = [
        "javaScript-discuss",
        "python-discuss",
        "java-discuss",
        "c-plus-plus-discuss",
        "ruby-discuss",
        "go-discuss",
      ];

      console.log("[DEBUG] new Channel creating...");
      for (const item of chats) {
        const newChannel = client.channel("messaging", item, {
          image: "https://getstream.io/random_png/?name=react",
          name: capitalize(item),
          created_by_id: user,
        });
        await newChannel.create();
        await newChannel.addMembers([user]);
      }
      console.log("[DEBUG] new Channel created");

      return NextResponse.json(
        { message: "Succefully done", token: token },
        {
          status: 201,
        }
      );
    } catch (error) {
      console.error("[ERROR]", error);
      return NextResponse.json({
        message: "Creating new channel is faild",
        error: error.message,
      });
    }
  } catch (error) {
    console.error("[ERROR]", error); // ADD THIS
    return NextResponse.json({
      message: "Invalid request",
      error: error.message,
    });
  }
}
