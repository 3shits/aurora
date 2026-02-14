import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Timeline from "@/components/Timeline";
import Rules from "@/components/Rules";
import Faculty from "@/components/Faculty";
import StarsBackground from "@/components/StarsBackground";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <StarsBackground />
      <Hero />
      <Events />
      <Timeline />
      <Rules />
      <Faculty />
      <Organizers />
      <Footer />
    </div>
  );
}
