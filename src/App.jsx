import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F4F5F0] font-sans text-[#172A23] selection:bg-[#16845B] selection:text-white">
      <Navbar />
      {/* <Hero />
      <Problem />
      <Solution />
      <LeadForm />
      <Footer /> */}
    </div>
  );
}

export default App;
