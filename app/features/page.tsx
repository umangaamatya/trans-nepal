import Navigation from "@/components/Navigation";
import Hero from "@/components/about/Hero";
import TerminalNetwork from "@/components/about/TerminalNetwork";
import StorageSolutions from "@/components/about/StorageSolutions";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TerminalNetwork />
      <StorageSolutions />
      <Footer />
    </div>
  );
}
