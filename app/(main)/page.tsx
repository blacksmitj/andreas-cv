import { Biography } from "@/components/biography";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 pt-20 mx-10">
      <Hero />
      <Biography />
      <Footer />
    </div>
  );
}
