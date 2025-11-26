import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <div className="min-h-screen bg-brand-50">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;