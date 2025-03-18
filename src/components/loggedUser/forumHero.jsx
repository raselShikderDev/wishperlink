import Image from "next/image";
import React from "react";
import forumImg from "../../../public/forumMain.png";
import Link from "next/link";

const ForumHero = () => {
  return (
    <div className="flex flex-col py-16 item-center md:flex-row gap-10 h-3/5 min-h-1/2">
      <div className="w-full md:w-4/6 self-center space-y-3 text-black">
        <h1 className="text-2xl font-bold md:text-5xl">Join the Discussion</h1>
        <p className="text-black/80 pb-4">
          Explore different programming languages, share your thoughts, and
          learn from the community. Get started todays!
        </p>
        <div className="space-x-5">
          <Link
            className="py-2 px-5 rounded shadow-xl shadow-gray-300 bg-indigo-600 hover:bg-indigo-400 text-white activef"
            href={"#"}
          >
            Get Chat
          </Link>
          <Link
            className="py-2 px-5 rounded shadow-xl shadow-gray-300 border border-indigo-600 hover:border-none hover:bg-indigo-700/80 hover:text-white activef"
            href={"#"}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full md:w-2/6 flex justify-center item-center">
        <div className="self-center">
          <Image
            alt="Discussion Image"
            width={400}
            height={300}
            className="rounded-lg"
            src={forumImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ForumHero;
