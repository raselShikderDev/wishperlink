import { programmingLanguages } from "@/data/data";
import Image from "next/image";
import cardImg from "../../../public/MobileMessage.png";
import Link from "next/link";

export default function Forumcards() {
  return (
    <div className="container mx-auto md:px-10 pb-10">
      <div className="grid mt-10 md:grid-cols-3 gap-6">
        {programmingLanguages.map((lang) => (
          <div
            key={lang.id}
            className="bg-indigo-950/60 border border-indigo-800 py-6 text-center rounded-lg p-4 shadow-lg"
          >
            <Image
              src={cardImg}
              alt={lang.name}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-5 text-center">{lang.name}</h3>
            <p className="text-neutral-100 text-center mb-5">{lang.description}</p>
            <Link
              className="py-2 px-5 rounded cursor-pointer shadow-xl text-white shadow-black/40 border active:scale-105 border-indigo-600 hover:border-none hover:bg-indigo-700/80 hover:text-white"
              href={`/forums/${lang.slug}`}
            >
              Discuss
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
