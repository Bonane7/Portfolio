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
