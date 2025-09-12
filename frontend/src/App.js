import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Mock data
import { mockData } from "./data/mock";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const content = mockData.content[currentLang];
  const contactInfo = mockData.contact;

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header 
        content={content} 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      
      <HeroSection content={content} />
      
      <ServicesSection content={content} />
      
      <ContactSection 
        content={content} 
        contactInfo={contactInfo}
      />
      
      <Footer 
        content={content} 
        contactInfo={contactInfo}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;