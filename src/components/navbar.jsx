"use client";

import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
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
              ChatWave
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                className="hover:scale-105 font-semibold text-gray-200 active:text-gray-300"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 active:text-gray-300"
                href={"/contact"}
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 active:text-gray-300"
                href={"/about"}
              >
                About us
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <SignedOut>
                <SignUpButton>
                  <button className="py-2 px-5 rounded cursor-pointer bg-gray-900 text-gray-100 active:scale-105 hover:text-gray-400">
                    SignUp
                  </button>
                </SignUpButton>
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
