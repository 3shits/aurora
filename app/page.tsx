import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Timeline from "@/components/Timeline";
import Merchandise from "@/components/Merchandise";
import Rules from "@/components/Rules";
import Faculty from "@/components/Faculty";
import Guests from "@/components/Guests";
import StarsBackground from "@/components/StarsBackground";
import Organizers from "@/components/Organizers";

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
      <Merchandise />
      
    </div>
  );
}
