import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import MemoriesTogether from "./components/MemoriesTogether";
import Journey from "./components/Journey";
import Reasons from "./components/Reasons";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Memories />
      <MemoriesTogether />
      <Journey />
      <Reasons />
      <footer>
        <h2>I Love You Forever, My Amore ❤️</h2>
        <p>Happy Anniversary!</p>
      </footer>
    </div>
  );
}
