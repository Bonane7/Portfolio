import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, description: "Structuring web page content.." },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, description: "Styling and making websites responsive." },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" />, description: "Create dynamic interactions on the web." },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" />, description: "Building modern and reactive user interfaces." },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, description: "Developing server-side applications." }
];

const progressBarData = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 80 },
  { name: "Tailwind-CSS", percentage: 85 },
  { name: "JavaScript", percentage: 75 },
  { name: "React.js", percentage: 70 },
  { name: "Node.js", percentage: 70 }
];

const Competences = () => {
  return (
    <motion.section
      id="skills"
      className="py-10 px-5 bg-gray-300 text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Zoom léger au survol
          >
            {skill.icon}
            <h3 className="text-lg font-bold mt-3">{skill.name}</h3>
            <p className="text-sm text-center mt-1">{skill.description}</p>
          </motion.div>
        ))}

        {/* Carte des compétences avec barres de progression */}
        <motion.div
          className="bg-gray-800 text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-2/2 md:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1 }} // Zoom léger au survol
        >
          <h3 className="text-lg font-bold text-center mb-4">Competences</h3>
          {progressBarData.map((skill, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-sm font-semibold">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-600 h-2 rounded-md mt-1">
                <motion.div
                  className="bg-blue-500 h-2 rounded-md"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Competences;


// import { motion } from "framer-motion";
// import { FaReact, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa"; // Importation des icônes
// import { useEffect, useState } from "react";

// const skillsData = [
//   {
//     name: "React.js",
//     icon: <FaReact className="text-blue-400 text-6xl mx-auto" />,
//     description: "Création d'interfaces dynamiques et modernes avec React.",
//   },
//   {
//     name: "TailwindCSS",
//     icon: <FaCss3Alt className="text-cyan-400 text-6xl mx-auto" />,
//     description: "Stylisation rapide et efficace avec Tailwind CSS.",
//   },
//   {
//     name: "JavaScript",
//     icon: <FaJs className="text-yellow-400 text-6xl mx-auto" />,
//     description: "Développement interactif et dynamique avec JavaScript.",
//   }
// ];

// const Competences = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("skills");
//       if (section) {
//         const top = section.getBoundingClientRect().top;
//         setIsVisible(top < window.innerHeight - 100);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.section
//       id="skills"
//       className="py-10 px-5 bg-gray-800 text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Cartes des compétences */}
//         {skillsData.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             {skill.icon}
//             <h3 className="text-xl font-bold text-center mt-3">{skill.name}</h3>
//             <p className="text-sm text-center mt-2">{skill.description}</p>
//           </motion.div>
//         ))}

//         {/* Carte avec les compétences et barres de progression */}
//         <motion.div
//           className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <FaNodeJs className="text-green-400 text-6xl mx-auto" />
//           <h3 className="text-xl font-bold text-center mt-3">Compétences</h3>

//           {/* Barres de progression */}
//           <div className="mt-4">
//             {[
//               { name: "HTML", value: 80 },
//               { name: "CSS", value: 80 },
//               { name: "JavaScript", value: 70 },
//               { name: "React.js", value: 70 },
//               { name: "Node.js", value: 60 },
//             ].map((skill, i) => (
//               <div key={i} className="mb-3">
//                 <p className="text-sm">{skill.name}</p>
//                 <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
//                   <motion.div
//                     className="h-full bg-blue-500"
//                     initial={{ width: 0 }}
//                     animate={{ width: isVisible ? `${skill.value}%` : "0%" }}
//                     transition={{ duration: 1.5, delay: i * 0.3 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Competences;


// import { motion } from "framer-motion";

// const Competences = () => {
//   return (
//     <motion.section
//       id="skills"
//       className="py-10 px-5 bg-gray-800 text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Carte 1 - React.js */}
//         <motion.div
//           className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="./assets/react.svg" alt="React.js" className="w-20 mx-auto mb-4" />
//           <h3 className="text-xl font-bold text-center">React.js</h3>
//           <p className="text-lg text-center">
//             Building modern and dynamic user interfaces with React.js
//           </p>
//         </motion.div>

//         {/* Carte 2 - TailwindCSS */}
//         <motion.div
//           className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="/images/tailwind-logo.png" alt="TailwindCSS" className="w-20 mx-auto mb-4" />
//           <h3 className="text-xl font-bold text-center">TailwindCSS</h3>
//           <p className="text-lg text-center">
//             Creating beautiful and responsive designs using TailwindCSS
//           </p>
//         </motion.div>

//         {/* Carte 3 - JavaScript */}
//         <motion.div
//           className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="/images/js-logo.png" alt="JavaScript" className="w-20 mx-auto mb-4" />
//           <h3 className="text-xl font-bold text-center">JavaScript</h3>
//           <p className="text-lg text-center">
//             Programming in JavaScript to create interactive and dynamic websites
//           </p>
//         </motion.div>

//                 {/* Carte 4 - Node.js */}
//                 <motion.div
//           className="bg-gray-700 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="/images/js-logo.png" alt="JavaScript" className="w-20 mx-auto mb-4" />
//           <h3 className="text-xl font-bold text-center">Node.js</h3>
//           <p className="text-lg text-center">
//             Programming in Node to Backend websites
//           </p>
//         </motion.div>

//       </div>
//     </motion.section>
//   );
// };

// export default Competences;
