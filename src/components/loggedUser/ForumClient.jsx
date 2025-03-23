"use client"; 

import ChatForum from "@/components/loggedUser/chatForum";
import { useParams } from "next/navigation";

const ForumClient = ({ clerkUser }) => {
    const { slug } = useParams();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 pt-16">
      <div className="w-[600px] min-h-[500px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        <ChatForum slug={slug} clerkUser={clerkUser} />
      </div>
    </div>
  );
};

export default ForumClient;
