import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyLifeLens from "@/components/home/WhyLifeLens";
import Footer from "@/components/home/Footer";
import Features from "@/components/home/Features";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <HowItWorks />

      <Features />

      <WhyLifeLens />
      
      <Footer />
    </main>
  );
}