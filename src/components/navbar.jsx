"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 0);
    };
    if (hasScroll) console.log("User Scroling");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-950 fixed top-0 inset-x-0 z-50 text-white w-full px-2 sm:px-10 md:px-20 ${
        hasScroll
          ? "shadow-xl shadow-[0 4px 6px -2px rgb(0 0 0 / 0.1)] bg-gray-950/80"
          : "shadow-none"
      }`}
    >
      <div className="flex justify-between items-center py-2">
        <div>
          <h1>
            <Link
              className="text-2xl sm:text-4xl hover:scale-105 active:text-white text-gray-200"
              href="/"
            >
              <span className="bg-gradient-to-r from-indigo-300 to-blue-600 bg-clip-text text-transparent">
                <span className="font-semibold">Chat</span>Wave
              </span>
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                className="hover:scale-105 font-semibold active:text-gray-300"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <SignedIn>
                <Link
                  className="hover:scale-105 active:text-gray-300"
                  href={"/forum"}
                >
                  Forums
                </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  className="hover:scale-105 active:text-gray-300"
                  href={"/contact"}
                >
                  Contact us
                </Link>
              </SignedOut>
            </li>
            <li>
              <SignedIn>
                <Link
                  className="hover:scale-105 active:text-gray-300"
                  href={"/chat"}
                >
                  Chat
                </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  className="hover:scale-105 active:text-gray-300"
                  href={"/about"}
                >
                  About us
                </Link>
              </SignedOut>
            </li>
            <li className="flex justify-center items-center">
              <SignedOut>
                <SignInButton>
                  <button className="py-2 px-5 rounded cursor-pointer bg-gray-900 text-gray-100 active:scale-105 hover:text-gray-400">
                    SignIn
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
