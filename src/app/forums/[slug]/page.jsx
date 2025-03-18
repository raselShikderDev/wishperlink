"use client";
import { useParams } from "next/navigation";

export default function ForumPage() {
    const {slug} = useParams()
    console.log(`slug: ${slug}`)
    if (!slug) {
        return <div>Loading...</div>;  
      }
  return (
    <div>
      <h1>MY post is:</h1>
      <p>Params: {slug}</p>
    </div>
  );
}
