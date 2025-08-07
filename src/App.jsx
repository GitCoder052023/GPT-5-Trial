import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
