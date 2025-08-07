import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Integrations from "./Components/Integrations";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

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
