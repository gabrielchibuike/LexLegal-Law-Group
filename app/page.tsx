"use client";
import React, { useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import PraticeArea from "./components/PraticeArea";
import Offers from "./components/Offers";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/Faq";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function page() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="">
        {/* Header */}

        <Navigation />
        <div id="home">
          <HeroSection />
        </div>
        <section>
          <div id="about">
            <AboutUs />
          </div>
        </section>
        <section>
          <div id="practice">
            <PraticeArea />
          </div>
        </section>
        <section>
          <div id="offer">
            <Offers />
          </div>
        </section>
        <section>
          <div id="attorneys">
            <OurTeam />
          </div>
        </section>
        <section>
          <div id="testimonials">
            <Testimonials />
          </div>
        </section>
        <section>
          <div id="faq">
            <FaqSection />
          </div>
        </section>
        <section>
          <div id="contact">
            <ContactUs />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default page;
