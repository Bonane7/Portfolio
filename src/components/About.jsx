import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaTools, FaLightbulb, FaRocket, FaChevronDown, FaChevronUp } from "react-icons/fa";
import profilePic from "../assets/Bonane.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="min-h-[300px] flex flex-col items-center justify-center bg-gray-900 font-bold text-white px-4 py-10">
      {/* Conteneur principal */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full max-w-4xl p-6 rounded-lg shadow-lg">
        {/* Présentation visible par défaut */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Texte à gauche */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FaUser className="text-blue-500" /> About Me
            </h2>
            <p className="mt-2 text-gray-300">
              I am <span className="text-blue-400 font-bold">Bonane Busoke</span>, a passionate web developer specializing in modern and intuitive user interfaces. I have experience in UI/UX Design, HTML, CSS, JavaScript, React, and Node.js. My goal is to create innovative and functional solutions tailored to user needs.
            </p>
          </div>

          {/* Photo de profil à droite */}
          <motion.img 
            src={profilePic} 
            alt="Bonane Busoke" 
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 mt-4 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Bouton pour afficher plus */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-blue-400 text-lg flex items-center gap-2 hover:text-blue-600 transition"
          >
            {showMore ? <FaChevronUp /> : <FaChevronDown />} {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Contenu caché, affiché au clic */}
        {showMore && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {/* Parcours */}
            <div className="mt-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaGraduationCap className="text-yellow-500" /> My Journey
              </h3>
              <p className="text-gray-300 mt-2">
                I started my programming journey with a passion for technology. Over the years, I have gained solid experience in front-end and back-end development, constantly improving my skills.
              </p>
            </div>

            {/* Compétences */}
            <div className="mt-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaTools className="text-green-500" /> Key Skills
              </h3>
              <ul className="list-disc pl-6 text-gray-300 mt-2">
                <li>Front-end: HTML, CSS, JavaScript, React, Tailwind</li>
                <li>Back-end: Node.js, Express</li>
                <li>UI/UX Design: Figma, Photoshop</li>
                <li>Version Control: Git & GitHub</li>
                <li>Deployment: GitHub Pages, Vercel</li>
              </ul>
            </div>

            {/* Motivation */}
            <div className="mt-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaLightbulb className="text-orange-500" /> What Drives Me
              </h3>
              <p className="text-gray-300 mt-2">
                I love solving real-world problems with technology. I am constantly learning new skills to build efficient and user-friendly applications.
              </p>
            </div>

            {/* Appel à l'action */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                <FaRocket className="text-red-500" /> Let's Work Together!
              </h3>
              <p className="text-gray-300 mt-2">
                Looking for a web developer to bring your ideas to life? Let's connect and build something amazing together!
              </p>
              <a href="#contact" className="mt-4 inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
