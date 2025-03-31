import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptopCode, FaSearch } from "react-icons/fa"; // Import des icônes

const servicesData = [
  {
    name: "App Development",
    icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
    description: "Building modern and scalable mobile applications.",
  },
  {
    name: "Web Design",
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    description: "Creating stunning and responsive website designs.",
  },
  {
    name: "SEO (Web Pages)",
    icon: <FaSearch className="text-blue-500 text-3xl" />,
    description: "Optimizing websites to rank higher in search engines.",
  },
];

const Services = () => {
  return (
    <div>
      {/* Section Services */}
      <section id="Services" className="w-full py-10 text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }} // Effet de zoom au survol
              className="w-full sm:w-[300px] md:w-[280px] lg:w-[300px] bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300"
            >
              {/* Icône + Titre */}
              <div className="flex items-center justify-center gap-3">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </div>

              {/* Sous-titre */}
              <p className="text-gray-300 mt-2 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

// import { motion } from "framer-motion";

// const services = () =>  {
//     return (
//       <div>
//        {/* Section Services */}
//        <section id="Services" className="w-full py-10 text-center">
//         <h2 className="text-3xl font-bold">Services</h2>
//         <div className="flex flex-wrap justify-center gap-6 mt-6">
//           {["App Development", "Web Design", "SEO (Web Pages)"].map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.2 }}
//               className="w-full md:w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg"
//             >
//               <h3 className="mt-4 font-semibold">{service}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       </div>
//     );
//   }

// export default services;
