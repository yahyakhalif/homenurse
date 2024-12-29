import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <BlogList />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
