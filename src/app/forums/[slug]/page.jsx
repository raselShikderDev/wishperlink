import { currentUser } from "@clerk/nextjs/server";
import ForumClient from "@/components/loggedUser/ForumClient";

const ForumSlugPage = async () => {
  const user = await currentUser();
//  console.log("user: ", user)
  if (!user && !user.publicMetadata?.token) {
    console.error("User token is missing:", user?.publicMetadata)
    return <div>Please log in to access the forum.</div>;
  }

  return (
    <ForumClient
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: user.publicMetadata?.token || "",
      }}
    />
  );
};

export default ForumSlugPage;








// "use client";

// import ChatForum from "@/components/loggedUser/chatForum";
// import { currentUser } from "@clerk/nextjs/server";
// import { useParams } from "next/navigation";

// const ForumSlugPage = async () => {
//   const user = await currentUser();
//   const { slug } = useParams();
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-950 pt-16">
//       <div className="w-[600px] min-h-[500px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
//         <ChatForum
//           slug={slug}
//           clerkUser={{
//             id: user.id,
//             name: user.firstName,
//             token: user.publicMetadata.token,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ForumSlugPage;
