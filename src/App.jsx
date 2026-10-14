import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="rounded-2xl bg-white p-8 shadow-2xl text-center max-w-md">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          Brightgrid Energy ⚡
        </h1>
        <p className="text-slate-600 mb-6">
          Tailwind CSS v4 is successfully wired up and working with your Vite
          React app!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-500/30">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
