import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 btn btn-primary"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Benefits />
        <CaseStudy />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
