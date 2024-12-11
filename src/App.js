import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProgramSection from "./components/ProgramSection";
import AboutSection from "./components/AboutSection";
import ContactFormModal from "./components/ContactFormModal";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-manrope text-gray-900 tracking-wide">
      <Header />
      <HeroSection openModal={openModal} /> {/* Passe la prop */}
      <ProgramSection openModal={openModal} /> {/* Passe la prop */}
      <AboutSection openModal={openModal} /> {/* Passe la prop */}
      <Footer />

      {/* Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
