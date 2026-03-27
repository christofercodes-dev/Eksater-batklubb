import CTA from "@/components/Membership";
import CatchReport from "@/components/CatchReport";
import Features from "@/components/Features";
import FishingRules from "@/components/FishingRules";
import Heritage from "@/components/Heritage";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Image from "next/image";
import Membership from "@/components/Membership";
import Fishing from "@/components/Fishing";

export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <Heritage/>
        <Fishing/>
        <Membership/>
        <News/>
        
        {/* <CatchReport/> */}
        
      </main>
    </div>
  );
}
