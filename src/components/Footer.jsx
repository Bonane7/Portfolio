import { useState } from "react";
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [popupContent, setPopupContent] = useState(null);

  // Fonction pour ouvrir le PopUp
  const openPopup = (platform, details) => {
    setPopupContent({ platform, details });
  };

  // Fonction pour fermer le PopUp
  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Connect with me</h2>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          {/* Icônes des réseaux sociaux avec PopUp */}
          <FaWhatsapp
            className="text-3xl hover:text-green-500 transition-colors duration-300 cursor-pointer"
            onClick={() => openPopup("WhatsApp", "+250789443031")}
          />
          <FaGithub
            className="text-3xl hover:text-gray-500 transition-colors duration-300 cursor-pointer"
            onClick={() => openPopup("GitHub", "https://github.com/Bonane7")}
          />
          <FaEnvelope
            className="text-3xl hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => openPopup("Email", "bonanebusoke@gmail.com")}
          />
          <FaLinkedin
            className="text-3xl hover:text-blue-700 transition-colors duration-300 cursor-pointer"
            onClick={() => openPopup("LinkedIn", "www.linkedin.com/in/bonane-busoke-214982327")}
          />
        </div>

        {/* PopUp (s'affiche quand il y a du contenu) */}
        {popupContent && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white w-[200px] px-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500"
              onClick={closePopup}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-lg font-bold">{popupContent.platform}</h2>
            <p className="mt-4">{popupContent.details}</p>
          </div>
        )}

        <div className="text-sm text-gray-400 mt-6">
          <p>&copy; 2025 Bonane Busoke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
