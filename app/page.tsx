import Image from "next/image";
import HealthcareHeroSections from ".//components/Info"
import React from "react";
import { About } from ".//components/About"
import { Services } from ".//components/Services"
import Hero from "./components/Count"

export default function Home() {
  return (
    <>
      <HealthcareHeroSections />
      <About />
      <Services />
      <Hero />
    </>
  );
}
