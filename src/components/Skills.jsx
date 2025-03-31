import { motion } from "framer-motion";
import project1 from "../assets/Project-recent/light-coding.jpg"; // Remplace avec le bon chemin de tes images
import project2 from "../assets/Project-recent/jotech-service.jpg";
import project3 from "../assets/Project-recent/resto.jpg";

const projects = [
  {
    name: "Light-Coding School",
    image: project1,
    description: "Educational coding platform",
  },
  {
    name: "Jotech-Service",
    image: project2,
    description: "E-commerce service platform",
  },
  {
    name: "Restaurant Landing Page",
    image: project3,
    description: "Modern restaurant website",
  },
];

const Skills = () => {
  return (
    <div>
      {/* Section Projets Récents */}
      <section id="Projects" className="w-full py-10 text-center">
        <h2 className="text-3xl font-bold">Recent Projects</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.4 }}
              whileHover={{ scale: 1.05 }} // Effet de zoom au survol
              className="w-full sm:w-[300px] md:w-[280px] lg:w-[300px] bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300"
            >
              {/* Sous-titre */}
              <p className="text-sm text-gray-300 mb-2">
                {project.description}
              </p>

              {/* Image du projet */}
              <div className="h-40 bg-gray-600 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Titre du projet */}
              <h3 className="mt-4 font-semibold">{project.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

// import { motion } from "framer-motion";

// const skills = () =>  {
//     return (
//       <div>
//               {/* Section Projects Recent */}
//       <section id="Projects" className="w-full py-10 text-center">
//         <h2 className="text-3xl font-bold">Recent Projects</h2>
//         <div className="flex flex-wrap justify-center gap-6 mt-6">
//           {["Light-Coding_school", "Jotech-Service", "Restaurant Landing Page"].map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.4 }}
//               className="w-full md:w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg"
//             >
//               <div className="h-40 bg-gray-600 rounded-md"></div>
//               <h3 className="mt-4 font-semibold">{project}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       </div>
//     );
//   }

// export default skills;
