import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import CommunityStats from "../components/homepage/CommunityStats";
import Services from "../components/homepage/Services";
import Reel from "../components/homepage/Reel";
// import WhyChooseRTC from "../components/homepage/WhyChooseRTC";
import CryptoMarkets from "../components/homepage/CryptoMarkets";
import Footer from "../components/layouts/Footer";
import YoutubeVideosSection from "../components/homepage/YoutubeVideosSection";
import WhyChooseRTC from "@/components/homepage/WhyChooseRTC";

const Homepage: React.FC = () => {
  const [introComplete] = useState(true);

  // const handleIntroComplete = () => {
  //   setIntroComplete(true);
  // };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Video Background with Intro */}
      {/* <VideoBackground onIntroComplete={handleIntroComplete} /> */}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero showContent={introComplete} />

        {/* Crypto Markets Section */}
        <CryptoMarkets />

        {/* Why Choose RTC */}
        <WhyChooseRTC />

        {/* Services */}
        <Services />

        {/* Community Stats */}
        <CommunityStats />

        {/* YouTube Videos Section */}
        <YoutubeVideosSection />

        {/* Reels Marquee Section */}
        <Reel />

        {/* About Section */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
