import { SignUpButton, SignedOut } from "@clerk/nextjs";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Connect Seamlessly with
          <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            ChatWave
          </span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Experience next-generation communication with secure, real-time
          messaging powered by AI-enhanced features.
        </p>
        <div className="flex gap-4 justify-center">
          <SignedOut>
            <SignUpButton>
              <button className="bg-indigo-600 cursor-pointer hover:bg-transparent hover:border hover:border-indigo-700 active:bg-indigo-700 px-8 py-4 rounded-lg font-medium transition-colors">
                SignUp
              </button>
            </SignUpButton>
          </SignedOut>
          <button className="border border-slate-600 active:scale-105 cursor-pointer hover:border-indigo-500 px-8 py-4 rounded-lg font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
