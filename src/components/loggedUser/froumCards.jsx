import { programmingLanguages } from "@/data/data";
import Image from "next/image";
import cardImg from "../../../public/MobileMessage.png";
import Link from "next/link";

export default function Forumcards() {
  return (
    <div className="grid mt-16 md:grid-cols-3 gap-6">
      {programmingLanguages.map((lang) => (
        <div
          key={lang.id}
          className="bg-indigo-200/10 py-6 text-center rounded-lg p-4 shadow-lg"
        >
          <Image
            src={cardImg}
            alt={lang.name}
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-5 text-center">{lang.name}</h3>
          <p className="text-gray-700 text-center mb-5">{lang.description}</p>
          <Link className="py-2 px-5 rounded cursor-pointer bg-black text-gray-100 active:scale-105 hover:border hover:border-black/70 hover:bg-transparent hover:text-black" href={`/forums/${lang.slug}`}>Discuss</Link>
        </div>
      ))}
    </div>
  );
}
