import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Games from './pages/Games';
import TriviaPage from './pages/TriviaPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/merch" element={<PlaceholderPage link="https://leadershipclass.myshopify.com/" linkText="Visit our Shopify" />} />
        <Route path="/videos" element={<PlaceholderPage link="https://www.youtube.com/@LeadershipClass" linkText="Visit our YouTube" />} />
        <Route path="/tour" element={<PlaceholderPage link="https://bnds.us/cwaboo" linkText="View our Tour Dates" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/trivia" element={<TriviaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
