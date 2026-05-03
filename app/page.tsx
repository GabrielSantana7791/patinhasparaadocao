"use client";

import Hero from "../src/components/hero/Hero";
import About from "../src/components/aboutUs/About";
import Adoption from "../src/components/adoption/Adoption";
import AdoptionProcess from "../src/components/adoptionProcess/AdoptionProcess";
import HowToHelp from "../src/components/HowToHelp/HowToHelp";
import Faq from "../src/components/faq/Faq";
import Footer from "@/src/components/footer/Footer";
import Header from "../src/components/homeHeader/HomeHeader";
import HappyStories from "@/src/components/happyStories/HappyStories";
import Contact from "@/src/components/contact/Contact";
import CtaBanner from "@/src/components/ctaBanner/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Adoption />
        <AdoptionProcess />
        <HowToHelp />
        <CtaBanner />
        <HappyStories />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
