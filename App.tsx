import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import TryDemo from './components/TryDemo';
import Footer from './components/Footer';
import Demo from './components/Demo';

function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <Team />
      <Roadmap />
      <TryDemo />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;