import Feature from "@/components/feature";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Feature />
      <Pricing />
    </div>
  );
}
