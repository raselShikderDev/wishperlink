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

const apiKey = "dz5f4d5kzrue";
const userId = "user_2uSSVpXNrYbSeMgFroVyfgcpOTs";
const userName = "late";
const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydVNTVnBYTnJZYlNlTWdGcm9WeWZnY3BPVHMifQ.xiuvp_vQPijSZveDZdcGfzZjRkn-_hOLlX8phdZXorA"
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGF0ZS1zaGFwZS0wIiwiZXhwIjoxNzQyMzk2MTAzfQ.pYi3toef3syqJxho7h6Uq8bk0xVutmpMUsc28JkJKc8";

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const ChatForum = ({slug}) => {
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
      name: `${slug?.split("-")[0]} ${slug?.split("-")[1]}`,
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
