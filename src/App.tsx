import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#07090e] text-[#e2e8f0] flex flex-col selection:bg-amber-400 selection:text-black">
        {/* Sticky Navbar */}
        <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isQuoteModalOpen={isQuoteModalOpen}
                  setIsQuoteModalOpen={setIsQuoteModalOpen}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      </div>
    </BrowserRouter>
  );
}
