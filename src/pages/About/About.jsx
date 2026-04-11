import React from "react";
import AboutSection from "../../components/About/AboutSection";
import AboutBanner from "./AboutBanner";
import AboutFeatures from "./AboutFeatures";
import AboutInfo from "./AboutInfo";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function About() {
  return (
    <React.Fragment>
      <AboutSection />
      <AboutBanner />
      <AboutFeatures />
      <AboutInfo />
      <Testimonials />
    </React.Fragment>
  );
}