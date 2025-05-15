import React from "react";
import HeroSection from "../components/sections/Hero";
import IconSection from "../components/sections/IconSection";
import FeaturedContent from "../components/sections/FeaturedSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <IconSection />
      <FeaturedContent />
    </div>
  );
}
export default Home;