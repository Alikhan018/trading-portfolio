import React, { useState } from "react";
import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import CommunityStats from "../components/homepage/CommunityStats";
import Services from "../components/homepage/Services";
import WhyChooseRTC from "../components/homepage/WhyChooseRTC";
import CryptoMarkets from "../components/homepage/CryptoMarkets";
import Footer from "../components/homepage/Footer";

const Homepage: React.FC = () => {
  const [introComplete] = useState(true);

  // const handleIntroComplete = () => {
  //   setIntroComplete(true);
  // };

  return (
    <div style={{ minHeight: "100vh", background: "#000" }}>
      {/* Video Background with Intro */}
      {/* <VideoBackground onIntroComplete={handleIntroComplete} /> */}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero showContent={introComplete} />
        </section>

        {/* Crypto Markets Section */}
        <section id="markets">
          <CryptoMarkets />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Community Stats */}
        <section id="community">
          <CommunityStats />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Why Choose RTC */}
        <WhyChooseRTC />

        {/* Call to Action */}
        {/* <section id="contact">
          <CallToAction />
        </section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
