import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Paq from "@/components/Paq";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Paq />
      <NewsLetter />
    </main>
  );
}
