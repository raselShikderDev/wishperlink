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
import "stream-chat-react/dist/css/v2/index.css"; 


// const apiKey = 'dz5f4d5kzrue';
// const userId = 'polished-morning-4';
// const userName = 'polished';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicG9saXNoZWQtbW9ybmluZy00IiwiZXhwIjoxNzQyODI5NDc5fQ.3FYadIhTf7p_5AccZ-_y5cp7LTtK7kTKfBEIO9DLdC8';



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
