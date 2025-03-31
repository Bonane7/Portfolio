import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaEnvelope, FaTimes } from "react-icons/fa";
import profilePic from "../assets/Bonane.png";
import profileVideo from "../assets/Hero_video.mp4"; // Remplacez par votre vidéo

const Home = () => {
  const [popupContent, setPopupContent] = useState(null);

  // Fonction pour ouvrir le PopUp
  const openPopup = (platform, details) => {
    setPopupContent({ platform, details });
  };

  // Fonction pour fermer le PopUp
  const closePopup = () => {
    setPopupContent(null);
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const confirmation = window.confirm("Do you want to download the CV ?");
    if (confirmation) {
      // Création d'un lien de téléchargement
      const link = document.createElement("a");
      link.href = "/Bonane-BUSOKE-CV.pdf"; // Remplacez par le chemin réel du fichier
      link.download = "Bonane-BUSOKE_CV.pdf"; // Nom du fichier téléchargé
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
        <h1 className="text-2xl font-bold text-center font-serif">
          Bonane BUSOKE
        </h1>
        <div className="flex flex-col items-center mt-2">
          {/* Grande photo non ronde */}
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-60 h-60 object-cover rounded-lg border-1 mt-4 border-blue-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-center mt-1">Web Developer & UI/UX Designer</p>

          {/* Bouton "Me contacter" */}
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
        {/* Vidéo de fond (masquée sur mobile) */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 hidden md:block"
        >
          <source src={profileVideo} type="video/mp4" />
        </video>

        {/* Grand texte centré */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-3xl font-bold text-center relative"
        >
          Creative Design Powerful Code.
          <p className="text-[16px]">Creating a Better World for Everyone!</p>
        </motion.h1>

        {/* Petit div gray en bas avec effet flou */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-2 w-full md:w-[500px] h-[100px] p-2 bg-transparent-90 backdrop-blur-md rounded-xl shadow-lg"
        >
          {/* Icônes réseaux sociaux */}
          <div className="flex justify-center gap-4 mt-1">
            <FaWhatsapp
              className="text-green-500 text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => openPopup("WhatsApp", "+250789443031",)}
            />
            <FaGithub
              className="text-white text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => openPopup("GitHub", "https://github.com/Bonane7")}
            />
            <a href="#contact">
              <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
            </a>
          </div>

          {/* Section des boutons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="#Projects"
              className="bg-white text-blue-800 font-bold text-sm px-2 py-1 rounded-lg shadow-md hover:bg-gray-300 transition-all border border-blue-500 w-auto text-center"
            >
              Projects
            </a>

            <a
              href="#Services"
              className="bg-white text-blue-800 font-bold text-sm px-2 py-1 rounded-lg shadow-md hover:bg-gray-300 transition-all border border-blue-500 w-auto text-center"
            >
              Services
            </a>

            <button
              onClick={handleDownloadCV}
              className="bg-blue-800 text-white font-bold text-sm px-2 py-1 rounded-lg shadow-md hover:bg-blue-600 transition-all border border-white w-auto text-center"
            >
              DOWNLOAD CV
            </button>
          </div>
        </motion.div>

        {/* PopUp (s'affiche quand il y a du contenu) */}
        {popupContent && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white w-[200px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
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

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp, FaGithub, FaEnvelope, FaTimes } from "react-icons/fa";
// import profilePic from "../assets/bonane.jpg";
// import profileVideo from "../assets/Hero_video.mp4"; // Remplacez par votre vidéo

// const Home = () => {
//   const [popupContent, setPopupContent] = useState(null);

//   // Fonction pour ouvrir le PopUp
//   const openPopup = (platform, details) => {
//     setPopupContent({ platform, details });
//   };

//   // Fonction pour fermer le PopUp
//   const closePopup = () => {
//     setPopupContent(null);
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-4/5 flex flex-col md:flex-row px-2 py-0 bg-gray-900 text-white overflow-hidden"
//     >
//       {/* Première carte */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full h-[400px] relative md:w-[300px] p-2 bg-gray-800"
//       >
//         <h1 className="text-2xl font-bold text-center font-serif">Bonane BUSOKE</h1>
//         <div className="flex flex-col items-center mt-2">
//           {/* Grande photo non ronde */}
//           <motion.img
//             src={profilePic}
//             alt="Profile"
//             className="w-60 h-60 object-cover rounded-lg border-2 mt-4 border-blue-500"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//           <p className="text-center mt-1">Web Developer & UI/UX Designer</p>

//           {/* Bouton "Me contacter" */}
//           <motion.div
//             className="mt-1 flex justify-center w-full"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <a
//               href="#contact"
//               className="text-white bg-blue-500 hover:bg-blue-700 px-6 py-1 rounded-full text-lg font-bold transition-all duration-300"
//             >
//               contact us
//             </a>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Hero page */}
//       <div className="relative w-full h-[400px] bg-gray-900 flex flex-col justify-center items-center text-white overflow-hidden">
//         {/* Vidéo de fond (masquée sur mobile) */}
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-50 hidden md:block"
//         >
//           <source src={profileVideo} type="video/mp4" />
//         </video>

//         {/* Grand texte centré */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-3xl font-bold text-center relative"
//         >
//           Creative Design Powerful Code.
//           <p className="text-[16px]">Creating a Better World for Everyone!</p>
//         </motion.h1>

//         {/* Petit div gray en bas avec effet flou */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute bottom-2 w-full md:w-[500px] h-[100px] p-2 bg-transparent-90 backdrop-blur-md rounded-xl shadow-lg"
//         >
//           {/* Icônes réseaux sociaux */}
//           <div className="flex justify-center gap-4 mt-1">
//             <FaWhatsapp
//               className="text-green-500 text-3xl cursor-pointer hover:scale-125 transition-transform"
//               onClick={() => openPopup("WhatsApp", "+250782880865")}
//             />
//             <FaGithub
//               className="text-white text-3xl cursor-pointer hover:scale-125 transition-transform"
//               onClick={() => openPopup("GitHub", "github.com/BonaneBusoke")}
//             />
//             <a href="#contact">
//               <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
//             </a>
//           </div>

//           {/* Boutons de navigation */}
//           import { useState } from "react";

// const NavigationButtons = () => {
//   // Fonction pour télécharger le CV
//   const handleDownloadCV = () => {
//     const confirmation = window.confirm("Voulez-vous télécharger le CV ?");
//     if (confirmation) {
//       // Création d'un lien de téléchargement
//       const link = document.createElement("a");
//       link.href = "/cv.pdf"; // Remplacez par le chemin réel du fichier
//       link.download = "Mon_CV.pdf"; // Nom du fichier téléchargé
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-2">
//       {/* Bouton Projects */}
//       <a
//         href="#Projects"
//         className="bg-white text-blue-800 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all border border-blue-500"
//       >
//         Projects
//       </a>

//       {/* Bouton Services */}
//       <a
//         href="#Services"
//         className="bg-white text-blue-800 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all border border-blue-500"
//       >
//         Services
//       </a>

//       {/* Bouton Download CV */}
//       <button
//         onClick={handleDownloadCV}
//         className="bg-blue-800 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all border border-white"
//       >
//         DOWNLOAD CV
//       </button>
//     </div>
//   );
// };

//           {/* PopUp (s'affiche quand il y a du contenu) */}
//           {popupContent && (
//             <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white w-[200px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
//               <button className="absolute top-2 right-2 text-white hover:text-red-500" onClick={closePopup}>
//                 <FaTimes size={20} />
//               </button>
//               <h2 className="text-lg font-bold">{popupContent.platform}</h2>
//               <p className="mt-4">{popupContent.details}</p>
//             </div>
//           )}
//         </motion.div>

//       </div>
//     {/* Fermeture de la dernière div ici */}
//   </section>
//   );
// };

// export default Home;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp, FaGithub, FaEnvelope,  FaTimes } from "react-icons/fa";
// import profilePic from "../assets/bonane.jpg";
// import profileVideo from "../assets/Hero_video.mp4"; // Remplacez par votre vidéo

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-4/5 flex flex-col md:flex-row px-2 py-0 bg-gray-900 text-white overflow-hidden"
//     >
//       {/* Première carte */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full h-[400px] relative md:w-[300px] p-2 bg-gray-800 "
//       >
//         <h1 className="text-2xl font-bold text-center font-serif">Bonane BUSOKE</h1>
//         <div className="flex flex-col items-center mt-2">
//           {/* Grande photo non ronde */}
//           <motion.img
//             src={profilePic}
//             alt="Profile"
//             className="w-60 h-60 object-cover rounded-lg border-2 mt-4 border-blue-500"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//           <p className="text-center mt-1">Web Developer & UI/UX Designer</p>

//                 {/* Bouton "Me contacter" */}
//                 <motion.div
//                   className="mt-1 flex justify-center w-full"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                 >
//         <a
//           href="#contact"
//           className="text-white bg-blue-500 hover:bg-blue-700 px-6 py-1 rounded-full text-lg font-bold transition-all duration-300"
//         >
//           contact us
//         </a>
//       </motion.div>

//         </div>
//       </motion.div>

// {/* hero pAGE*/ }
//     <div className="relative w-full h-[400px] bg-gray-900 flex flex-col justify-center items-center text-white overflow-hidden">
//       {/* Vidéo de fond (masquée sur mobile) */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-50 hidden md:block"
//       >
//         <source src={profileVideo} type="video/mp4" />
//       </video>

//       {/* Grand texte centré */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-3xl md:text-3xl font-bold text-center relative z-10"
//       >
//         Creative Design Powerful Code.
//         <p className="text-[16px]">Creating a Better World for Everyone!</p>
//       </motion.h1>

//       {/* Petit div orange en bas avec effet flou */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute bottom-2 w-full md:w-[500px] h-[100px] p-2 bg-transparent-90 backdrop-blur-md rounded-xl shadow-lg"
//       >
//         {/* <h2 className="text-xl font-bold text-center">Bonane BUSOKE</h2>
//         <p className="text-center mt-1">Web Designer and Developer</p> */}

//         {/* Icônes réseaux sociaux */}
//         <div className="flex justify-center gap-4 mt-1">

//         const SocialIcons = () => {
//   const [popupContent, setPopupContent] = useState(null);

//   // Fonction pour ouvrir le PopUp
//   const openPopup = (platform, details) => {
//     setPopupContent({ platform, details });
//   };

//   // Fonction pour fermer le PopUp
//   const closePopup = () => {
//     setPopupContent(null);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Icônes réseaux sociaux */}
//       <div className="flex justify-center gap-4 mt-4">
//         <FaWhatsapp
//           className="text-green-500 text-3xl cursor-pointer hover:scale-125 transition-transform"
//           onClick={() => openPopup("WhatsApp", "+250782880865")}
//         />
//         <FaGithub
//           className="text-white text-3xl cursor-pointer hover:scale-125 transition-transform"
//           onClick={() => openPopup("GitHub", "github.com/BonaneBusoke")}
//         />
//         <a href="#Contact">
//           <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
//         </a>
//       </div>

//       {/* PopUp (s'affiche quand il y a du contenu) */}
//       {popupContent && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white w-[200px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
//           <button className="absolute top-2 right-2 text-white hover:text-red-500" onClick={closePopup}>
//             <FaTimes size={20} />
//           </button>
//           <h2 className="text-lg font-bold">{popupContent.platform}</h2>
//           <p className="mt-4">{popupContent.details}</p>
//         </div>
//       )}
//     </div>
//   );
// };

//         </div>

//         {/* Boutons de navigation */}
//         <div className="flex justify-center gap-4 mt-2">
//           <a
//             href="#Projects"
//             className="bg-white text-blue-800 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all hover:border-1 border-blue-500"
//           >
//             Projects
//           </a>
//           <a
//             href="#Services"
//             className="bg-white text-blue-800 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all hover:border-1 border-blue-500"
//           >
//             Services
//           </a>
//         </div>
//       </motion.div>
//     </div>

//     </section>
//   );
// };

// export default Home;

{
  /* Deuxième carte
      <div className="w-full h-[400px] relative mr-[0px] bg-blue-800 my-0 lex flex-col md:flex-row px-2 py-0 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[300px] p-6 bg-yellow-800 rounded-xl shadow-lg mb-10 md:mt-10 md:ml-6"
        >
          <h2 className="text-2xl font-bold text-center">Bonane BUSOKE</h2>
          <p className="text-center mt-2">Web Designer and Developer</p>
          <div className="flex justify-center gap-4 mt-4">
            <FaWhatsapp className="text-green-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
            <FaGithub className="text-white text-3xl cursor-pointer hover:scale-125 transition-transform" />
            <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:scale-125 transition-transform" />
          </div>
        </motion.div>
      </div> */
}
// import { motion } from "framer-motion";
// import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
// import profilePic from "../assets/profil.jpg";

// const home = () => {
//   return (
//     <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center px-5 py-10 bg-gray-900 text-white">
//       {/* Première carte */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full md:w-[300px] p-6 bg-gray-800 rounded-xl shadow-lg"
//       >
//         <h1 className="text-2xl font-bold text-center font-serif">Bonane BUSOKE</h1>
//         <div className="flex flex-col items-center mt-4">
//           <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-500" />
//           <p className="text-center mt-2">Développeur Web & UI/UX Designer</p>
//         </div>
//         <div className="mt-4 p-4 bg-gray-700 rounded-lg">
//           <h2 className="text-lg font-semibold mb-2">Mes Compétences</h2>
//           {[
//             { skill: "HTML", percentage: 85 },
//             { skill: "CSS", percentage: 80 },
//             { skill: "JavaScript", percentage: 70 },
//             { skill: "Tailwind CSS", percentage: 75 },
//             { skill: "React.js", percentage: 65 },
//             { skill: "Git & GitHub", percentage: 65 },
//             { skill: "Node.js", percentage: 70 },
//             { skill: "Figma", percentage: 75 },
//           ].map((item, index) => (
//             <div key={index} className="mb-2">
//               <p className="text-sm font-semibold">{item.skill}</p>
//               <div className="w-full bg-gray-600 rounded-full h-2.5">
//                 <motion.div
//                   className="bg-blue-500 h-2.5 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${item.percentage}%` }}
//                   transition={{ duration: 1 }}
//                 ></motion.div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Deuxième carte */}
//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full md:w-[300px] p-6 bg-gray-800 rounded-xl shadow-lg mt-6 md:mt-0 md:ml-6"
//       >
//         <h2 className="text-2xl font-bold text-center">Bonane BUSOKE</h2>
//         <p className="text-center mt-2">Web Designer and Developer</p>
//         <div className="flex justify-center gap-4 mt-4">
//           <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
//           <FaGithub className="text-white text-3xl cursor-pointer" />
//           <FaEnvelope className="text-red-500 text-3xl cursor-pointer" />
//         </div>
//         <p className="mt-4 text-center">Passionné par la création de sites web modernes et interactifs.</p>
//         <button className="w-full mt-4 bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition">
//           Contact Us
//         </button>
//       </motion.div>

//       {/* Troisième carte au centre */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative flex justify-center items-center mt-10 md:mt-0"
//       >
//         <img src={profilePic} alt="Profile" className="w-40 h-40 rounded-full border-4 border-white" />
//         <div className="absolute bottom-0 bg-gray-800 bg-opacity-80 text-center p-4 rounded-xl">
//           <h2 className="text-xl font-bold font-serif">Bonane BUSOKE</h2>
//           <div className="flex gap-4 mt-2">
//             <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Projects</button>
//             <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700 transition">Services</button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default home;

// const Section = () => {
//   return (
//     <section className="flex items-center py-16 px-6 bg-gray-800 text-white border-amber-700">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Premier quart (à gauche) */}
//         <div className="w-full md:w-[300px] space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold font-custom">Bonane BUSOKE</h2>
//             <img
//               src="path_to_your_image.jpg"
//               alt="Bonane"
//               className="w-full h-56 object-cover mt-4 rounded-lg"
//             />
//           </div>

//           <div className="space-y-4">
//             <p className="text-center">Web Designer and Developer</p>

//             {/* Barre de pourcentage animée (Skills) */}
//             <div className="space-y-2">
//               {[
//                 { skill: 'HTML', percentage: 85 },
//                 { skill: 'CSS', percentage: 80 },
//                 { skill: 'JavaScript', percentage: 70 },
//                 { skill: 'Tailwind CSS', percentage: 75 },
//                 { skill: 'React.js', percentage: 65 },
//                 { skill: 'Git & GitHub', percentage: 65 },
//                 { skill: 'Node.js', percentage: 70 },
//                 { skill: 'Figma', percentage: 75 },
//               ].map((item) => (
//                 <div key={item.skill} className="space-y-1">
//                   <p className="text-sm">{item.skill}</p>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div
//                       className={`bg-blue-500 h-2.5 rounded-full`}
//                       style={{ width: `${item.percentage}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//      {/* Quart central (au milieu) */}
//      <div className="w-full md:w-[300px] relative">
//           <img
//             src="path_to_your_image.jpg"
//             alt="Bonane"
//             className="w-full h-56 object-cover rounded-lg"
//           />
//           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-lg" />
//           <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white space-y-4">
//             <h3 className="text-3xl font-extrabold font-custom">Bonane BUSOKE</h3>
//             <div className="space-x-4">
//               <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 Project
//               </button>
//               <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//                 Services
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Deuxième quart (à gauche) */}
//         <div className="w-full md:w-[300px] space-y-6">
//           <p className="text-xl text-center">Bonane BUSOKE: Web Designer and Developer</p>

//           <div className="space-y-6">
//             {/* Icônes rondes cliquables *WhatsApp/}
//             <div className="flex justify-around">
//               <a href="https://wa.me/your_number" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                 <i className="fab fa-whatsapp text-white"></i>
//               </a>
//               <a href="https://github.com/WhatsAppyour_username" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
//                 <i className="fab fa-github text-white"></i>
//               </a>
//               <a href="mailto:your_email@example.com" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//                 <i className="fas fa-envelope text-white"></i>
//               </a>
//             </div>

//             <p className="text-sm text-center mt-4">
//               Passionné par la conception et le développement web. J'aime créer des expériences utilisateur intuitives et élégantes. Avec une forte expertise en développement front-end et une approche axée sur l'utilisateur, je cherche toujours à apprendre et à évoluer.
//             </p>

//             <div className="text-center mt-6">
//               <a
//                 href="#contact"
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Section;
