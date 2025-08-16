import Navigation from "@/components/Navigation";
import VisionMission from "@/components/about/VisionMission";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <VisionMission />
      <Footer />
    </div>
  );
}