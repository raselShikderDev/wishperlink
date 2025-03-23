"use client";
import { useEffect, useState } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css"; // ✅ Import CSS for proper styling

// const apiKey = "dz5f4d5kzrue";
// const userId = "lucky-union-6";
// const userName = "lucky";
// const userToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibHVja3ktdW5pb24tNiIsImV4cCI6MTc0MjUxNDA1Nn0.iRP7VJb3vaPyBJvcEf0pKStBG3UbUxLIGOwTZIeJ8rg";

// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

function capitalize(slug) {
  if (!slug || typeof slug !== "string") return ""; 

  return slug
    .trim()
    .split("-")
    .filter(word => word.length > 0) // Remove empty words caused by double hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const ChatForum = ({ slug, clerkUser }) => {
  const apiKey = process.env.STREAM_API_KEY;
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;
    
    const newChannel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(slug),
      members: [userId],
    });

    setChannel(newChannel);
  }, [client]);

  if (!client || !channel) return <div>Setting up chat...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <div className="chat-container">
          <div className="chat-header">
            <ChannelHeader />
          </div>

          <div className="chat-messages">
            <MessageList />
          </div>

          <div className="chat-input">
            <MessageInput />
          </div>
        </div>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
