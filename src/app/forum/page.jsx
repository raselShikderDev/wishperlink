import programmingLanguages from "@/data/data";
import Image from "next/image";
import forumImg from "../../../public/forumMain.png"
import cardImg from "../../../public/MobileMessage.png"

const Forum = () => {
    return (
        <div className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center h-full gap-8 mb-16">
            {/* Left Side */}
            <div className="md:w-2/3 space-y-4">
              <h1 className="text-4xl font-bold">Join the Discussion</h1>
              <p className="text-lg text-gray-600">
                Explore different programming languages, share your thoughts, and 
                learn from the community. Get started today!
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
                  Learn More
                </button>
              </div>
            </div>
            {/* Right Side */}
            <div className="md:w-1/3">
              <Image
                src={forumImg}
                alt="Discussion Image"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
    
          {/* Discussion Forum Heading */}
          <h2 className="text-3xl font-semibold mb-6">Discussion Forum</h2>
    
          {/* Discussion Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {programmingLanguages.map((lang) => (
              <div key={lang.id} className="border rounded-lg p-4 shadow-lg">
                <Image
                  src={cardImg}
                  alt={lang.name}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center">{lang.name}</h3>
                <p className="text-gray-500 text-center">Created on: {new Date().toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Forum;
