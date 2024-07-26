import Discover from "../components/Discover";
import Hero from "../components/Hero";
import OneplaceTorental from "../components/OneplaceTorental";
import StartPromote from "../components/StartPromote";
import Support from "../components/Support";

export default function Home() {
  return (
    <main className="relative z-0 hero-bg w-full h-full">
      <Hero />
      <Discover />
      <OneplaceTorental />
      <Support />
      <StartPromote />
    </main>
  );
}
