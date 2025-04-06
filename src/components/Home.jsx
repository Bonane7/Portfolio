import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaEnvelope, FaTimes } from "react-icons/fa";
import profilePic from "../assets/Bonane.png";
import profileVideo from "../assets/Hero_video.mp4";

const text = "Creative Design Powerful Code."; // Texte principal animé

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const containerAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Décalage entre chaque lettre
  },
};

const Home = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (platform, details) => {
    setPopupContent({ platform, details });
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <section
      id="home"
      className="min-h-4/5 flex flex-col md:flex-row px-2 py-0 bg-gray-900 text-white overflow-hidden"
    >
      {/* Première carte */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-[400px] relative md:w-[300px] p-2 bg-gray-800"
      >
        <h1 className="text-2xl font-bold text-center font-serif">Bonane-BUSOKE</h1>
        <div className="flex flex-col items-center mt-2">
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-60 h-60 object-cover rounded-lg border-1 mt-4 border-blue-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-center mt-1">Web Developer & UI/UX Designer</p>
          <motion.div
            className="mt-1 flex justify-center w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="#contact"
              className="bg-blue-800 text-white font-bold text-sm px-2 py-1 rounded-lg shadow-md hover:bg-blue-600 transition-all border border-white w-auto text-center"
            >
              CONTACT US
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero page */}
      <div className="relative w-full h-[400px] bg-gray-900 flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Vidéo de fond */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 hidden md:block"
        >
          <source src={profileVideo} type="video/mp4" />
        </video>

        {/* Grand texte animé */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center relative text-white z-10"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          key={text} // Force le redémarrage à chaque fin d'animation
          onAnimationComplete={() => setTimeout(() => {}, 2000)} // Petite pause avant de recommencer
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sous-texte statique */}
        <p className="text-[16px] text-gray-300 z-10">
          Creating a Better World for Everyone!
        </p>

        {/* Petit div gris en bas avec effet flou */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-2 w-full md:w-[500px] h-[100px] p-2 bg-transparent-90 backdrop-blur-md rounded-xl shadow-lg"
        >
          <div className="flex justify-center gap-4 mt-1">
            <FaWhatsapp
              className="text-green-500 text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => openPopup("WhatsApp", "+250789443031")}
            />
            <FaGithub
              className="text-white text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => openPopup("GitHub", "https://github.com/Bonane7")}
            />
            <a href="#contact">
              <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* PopUp (s'affiche quand il y a du contenu) */}
        {popupContent && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-black text-white w-[250px] px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
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
      </div>
    </section>
  );
};

export default Home;

