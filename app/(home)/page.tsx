import Discover from "../components/Discover";
import Hero from "../components/Hero";
import OneplaceTorental from "../components/OneplaceTorental";
import Support from "../components/Support";

export default function Home() {
  return (
    <main className="hero-bg w-full h-full">
      <Hero />
      <Discover />
      <OneplaceTorental />
      <Support />
    </main>
  );
}
